import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert, Spinner } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import { useTranslation } from 'react-i18next';

const PopularMovieSlide = () => {
    const { t } = useTranslation();
    const {data, isLoading, isError, error }= usePopularMoviesQuery();

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
        <MovieSlider 
        title={t('popularMovies')}
        movies={data.results}
        responsive={responsive}/>
    </div>

  )
}

export default PopularMovieSlide