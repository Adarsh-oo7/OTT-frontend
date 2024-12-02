import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// Define styled components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141414;
  padding-left: 90px;
  color: white;
  min-height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MoviePoster = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const MovieDetails = styled.div`
  text-align: center;
  max-width: 800px;
  flex: 1;
`;

const MovieTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  color: #e50914;
`;

const MovieInfo = styled.div`
  margin: 20px 0;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const MovieDescription = styled.p`
  font-size: 18px;
  margin: 20px 0;
  line-height: 1.6;
`;

const PlayButton = styled.button`
  background-color: #e50914;
  color: white;
  font-size: 18px;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #d40813;
  }
`;

const VideoWrapper = styled.div`
  flex: 1;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

// Main component
const SelectMovie = () => {
  const { id } = useParams(); // Get the movie id from the URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/API/movie/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      <MoviePoster src={`http://127.0.0.1:8000${movie.thumbnail}`} alt={movie.title} />
      <MovieDetails>
        <MovieTitle>{movie.title}</MovieTitle>

        <MovieDescription>{movie.description}</MovieDescription>
  
      </MovieDetails>
      <VideoWrapper>
        <VideoPlayer controls>
          <source  src={`http://127.0.0.1:8000${movie.video}`} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPlayer>
      </VideoWrapper>
    </PageWrapper>
  );
};

export default SelectMovie;
