import React, { useState } from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Banner.style.css';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const movie = data.results[0];
  const overviewLimit = 150;
  const isLong = movie.overview.length > overviewLimit;
  const shortOverview = movie.overview.slice(0, overviewLimit) + '...';

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="text-white banner-text-area">
        <h1>{movie.title}</h1>
        <p>
          {expanded || !isLong ? movie.overview : shortOverview}
          {isLong && (
            <button
              className="read-more-btn"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'hide' : 'more...'}
            </button>
          )}
        </p>
        <button
          className="banner-btn"
          onClick={() => navigate(`/movies/${movie.id}`)}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
