import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const History = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      setError("Authorization token not found. Please log in again.");
      setLoading(false); // Stop loading if no token
      return;
    }

    axios
      .get('http://127.0.0.1:8000/API/movieHistory', {
        headers: {
          Authorization: `Token ${token}`, // Or use `Bearer ${token}` if your backend requires it
        },
      })
      .then(response => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(
          error.response?.status === 401 
          ? "Unauthorized access. Please log in." 
          : "Failed to load movie history"
        );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading your movie history...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>;
  }

  if (movies.length === 0) {
    return <div style={{ textAlign: 'center' }}>No movies found in your history.</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {movies.map((item) => (
        <MovieCard 
          key={item.movie_details.id} 
          movie={item.movie_details}  // Use movie_details instead of movie
        />
      ))}
    </div>
  );
};

export default History;
