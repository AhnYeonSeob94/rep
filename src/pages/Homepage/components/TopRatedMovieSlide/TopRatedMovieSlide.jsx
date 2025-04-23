import React from 'react';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import { Alert, Spinner } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

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
        title='Top Rated Movies'
        movies={data.results}
        responsive={responsive}/>
      </div>
    </div>
  );
};

export default TopRatedMovieSlide;
