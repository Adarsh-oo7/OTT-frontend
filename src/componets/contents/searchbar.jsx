import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const SearchInput = styled.input`
  width: 60%;
  max-width: 500px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;

  @media (max-width: 600px) {
    width: 40%;
  }
`;

const SearchButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Search for:', query);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
