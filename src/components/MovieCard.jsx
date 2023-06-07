import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  
  &:hover {
    .card-title {
      opacity: 1;
      font-size: 25px;
    }
    
    .card-image::before {
      content: "";
      position: absolute;
      top: 0;
      left: 1;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
    }
  }
`;

const CardTitle = styled.h2`
  position: absolute;
  
  display: flex;
  justify-content: center;
  align-items: flex-start;
  opacity: 0;

  margin-bottom: 8px;
  overflow-wrap: break-word;
  color: white;
  transition: all 0.3s ease-in-out;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
`;

const MovieCard = ({ movie }) => {
  const API_KEY = "e4e1ecc0b155dbe00e434c7125de75ba";
  const API_URL = "https://api.themoviedb.org/3";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  return (
    <Card>
      <CardImage className="card-image"  key={movie?.id} src={`${IMAGE_PATH}/${movie.poster_path}`} alt={movie.title} />
    </Card>
  );
};

export default MovieCard;
