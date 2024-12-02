import React from 'react';
import MovieList from './MovieList';
import SearchBar from './searchbar';

const App = () => {
  return (
    <div style={{ backgroundColor: '#141414', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#fff', textAlign: 'center' }}> Movie Listing</h1>
      <hr />
      <SearchBar/>

      <hr />
      <MovieList />
    </div>
  );
};

export default App;

