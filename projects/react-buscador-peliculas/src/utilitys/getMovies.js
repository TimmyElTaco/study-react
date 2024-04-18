
export const getMovies = async ({query}) => {    
    if(query) {
        try {
            const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=5f5a42f8&s=${query}`);
            const { Search } = await response.json();
            return Search.map( movie => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
              }
            ));

        } catch (error) {
            throw new Error(error)
        }
    }
}
