import React from 'react';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import { Alert, Spinner } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner animation="border" variant="danger" style={{ width: '5rem', height: '5rem' }} />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <div>
        <MovieSlider 
        title='Upcoming Movies'
        movies={data.results}
        responsive={responsive}/>
      </div>
    </div>
  );
};

export default UpcomingMovieSlide;
