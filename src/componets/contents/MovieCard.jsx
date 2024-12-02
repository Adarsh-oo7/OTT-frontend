import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

const CardContainer = styled.div`
  background-color: #141414;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const MovieDetails = styled.div`
  padding: 10px;
  color: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const MovieTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #fff;
`;

const BookmarkButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ffbf00; /* Change color on hover */
  }
`;

const MovieGenre = styled.p`
  font-size: 0.9rem;
  color: #bbb;
  text-align: center;
`;

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleCardClick = () => {
    navigate(`/watch/${movie.id}`); // Navigates to the watch page for the selected movie
  };

  const handleBookmarkToggle = (event) => {
    event.stopPropagation(); // Prevent triggering the card click
    setIsBookmarked(!isBookmarked);
  };

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageWrapper>
        <MovieImage src={`http://127.0.0.1:8000${movie.thumbnail}`} alt={movie.title} />
      </ImageWrapper>
      <MovieDetails>
        <TitleContainer>
          <MovieTitle>{movie.title}</MovieTitle>
          <BookmarkButton onClick={handleBookmarkToggle}>
            {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </BookmarkButton>
        </TitleContainer>
        <MovieGenre>{movie.description}</MovieGenre>
      </MovieDetails>
    </CardContainer>
  );
};

export default MovieCard;
