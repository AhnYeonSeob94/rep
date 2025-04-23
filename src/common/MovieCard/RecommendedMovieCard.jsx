import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RecommendedMovieCard.style.css';

const RecommendedMovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="recommended-movie-card"
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className="poster-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <p className="title">{movie.title}</p>
    </div>
  );
};

export default RecommendedMovieCard;
