import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const WatchList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setError('Authorization token not found');
      setLoading(false);
      return;
    }

    axios
      .get('http://127.0.0.1:8000/API/watchlater', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response ? error.response.data : error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading movies...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {movies.length > 0 ? (
        movies.map((item) => {
          console.log(item.movie.title)
          return <MovieCard key={item.movie.id} movie={item.movie} />;
        })
      ) : (
        <div>No movies in your watch list.</div>
      )}
    </div>
  );
};

export default WatchList;
