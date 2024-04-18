import { getMovies } from '../utilitys/getMovies';
import { useRef, useMemo, useCallback, useState } from 'react';

export function useMovies({ query, sort }) {

    const [movies, setMovies] = useState([]);
    const previousQuery = useRef(query);

    const searchMovies = useCallback(async ({query}) => {
        if(query === previousQuery.current) return;

        try {

          previousQuery.current = query;
          const newMovies = await getMovies({query});
          setMovies(newMovies)
        
        } catch (error) {
          throw new Error(error)
        }
      }, [])

    const sortedMovies = useMemo( () => {
      return sort 
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies
    }, [sort, movies] )
    
    return { movies: sortedMovies, searchMovies };
}