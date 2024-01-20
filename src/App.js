import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies, setMovies]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
async function fetchMoviesHandler (){

    setIsLoading(true);
    const response= await fetch('https://swapi.dev/api/films/');
    const data= await response.json();
    
      const transformedMovies = data.results.map(moviesData =>{
        return{
          id: moviesData.episode_id,
          title: moviesData.title,
          openingText:moviesData.opening_crawl,
          releaseDate:moviesData.release_date
         
        }
      })
      setMovies(transformedMovies);
      setIsLoading(false);
    }
  
  

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
     { !isLoading && <MoviesList movies={movies} />}
     {isLoading && <p>Loading.....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
