import { useState } from 'react';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useEffect } from 'react';
import { useRef } from 'react';
import debounce from 'just-debounce-it'

import './app.css'
import { useCallback } from 'react';

function useSearch() {
  const [ query, setQuery ] = useState('');
  const [ error, setError ] = useState(null);
  const isFirstRender = useRef(true);

  useEffect( () => {
    if(isFirstRender.current) {
      isFirstRender.current = query === '';
      return
    }
    
    if(query === '') {
      setError('Campo vacios, introduce una pelicula');
      return
    }

    if(query.length < 3) {
      setError('El titulo debe ser mayor a 3 caracteres')
      return
    }

    setError(null);
  }, [query] )

  return { query, setQuery, error };
}

function App() {

  const [sort, setSort] = useState(false);
  const { query, setQuery, error } = useSearch();
  const { movies, searchMovies } = useMovies({ query, sort });

  const debouncedMovies = useCallback(
    debounce(query => {
      searchMovies({ query })
    }, 300), [searchMovies]
  );

  function handleSubmit(e) {
    e.preventDefault();
    searchMovies({query});
  }

  function handleChange(e) {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedMovies(newQuery)
  }

  return (
    <>
      <header>
        <h1>Buscador</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          { error && <p style={{color: 'red'}}>{error}</p> }
          <input value={query} onChange={handleChange} name='queryMovie' type="text" placeholder="The Matrix" />
          <button type="submit">Buscar</button>
          <input type='checkbox' onChange={() => setSort(!sort)} />
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
