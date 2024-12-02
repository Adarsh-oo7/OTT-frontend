import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/API/movie_list')
      .then((response) => {
        console.log(response.data); 
        setMovies(response.data);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching movies:", error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
