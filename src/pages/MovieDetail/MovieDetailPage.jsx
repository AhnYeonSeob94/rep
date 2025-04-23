import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovieDetailQuery';
import { Container, Spinner, Badge, Alert, Modal, Button } from 'react-bootstrap';
import './MovieDetailPage.style.css';
import ReviewCard from '../Homepage/components/ReviewCard/ReveiwCard';
import { useMovieReviewsQuery } from '../../hooks/useMovieReviewsQuery';
import { useRecommendedMoviesQuery } from '../../hooks/useRecommendedMoviesQuery';
import RecommendedMovieCard from '../../common/MovieCard/RecommendedMovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useMovieTrailerQuery } from '../../hooks/useMovieTrailerQuery';
import YouTube from 'react-youtube';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2
  }
};

const MovieDetailPage = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('reviews');

  // 영화 상세정보
  const { data: movie, isLoading, isError, error } = useMovieDetailQuery(id);
  const { data: reviews = [] } = useMovieReviewsQuery(id);
  const { data: recommended = [] } = useRecommendedMoviesQuery(id);
  const { data: trailer } = useMovieTrailerQuery(id);

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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
  
    return (
      <>
        {[...Array(fullStars)].map((_, idx) => (
          <span key={`full-${idx}`} style={{ color: '#FFD700' }}>★</span>
        ))}
        {halfStar === 1 && <span style={{ color: '#FFD700' }}>☆</span>}
        {[...Array(emptyStars)].map((_, idx) => (
          <span key={`empty-${idx}`} style={{ color: '#888' }}>★</span>
        ))}
      </>
    );
  };

  return (
    <Container className="movie-detail-page text-white py-5">
      {/* 상단: 포스터 + 영화 정보 */}
      <div className="d-flex">
        <img
          className="poster"
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="movie-info ms-4">
          <div className="genre-list mb-3">
            {movie.genres.map((genre) => (
              <Badge key={genre.id} bg="danger" className="me-2">
                {genre.name}
              </Badge>
            ))}
          </div>
          <h1>{movie.title}</h1>
          <div className="ratings mb-3 d-flex align-items-center gap-3">
            <div>{renderStars(movie.vote_average)}</div>
            <span className="text-white">⭐ {movie.vote_average.toFixed(1)}</span>
            <span className="ms-2">🔥 {Math.round(movie.popularity).toLocaleString()}</span>
          </div>
          <p>{movie.overview}</p>
          <hr />
          <ul className="detail-stats">
            <li><strong>Budget:</strong> ${movie.budget.toLocaleString()}</li>
            <li><strong>Release Date:</strong> {movie.release_date}</li>
            <li><strong>Runtime:</strong> {movie.runtime} min</li>
            <li>
              <Button variant="danger" className="mt-3" onClick={() => setShowTrailer(true)}>
                Trailer
              </Button>
          </li>
          </ul>
        </div>

        {/*예고편 모달 */}
        <Modal
          show={showTrailer}
          onHide={() => setShowTrailer(false)}
          centered
          size="lg"
          contentClassName="trailer-modal-content"
          backdropClassName="trailer-modal-backdrop"
        >
          <Modal.Header closeButton className="border-0">
            <Modal.Title className="text-white">🎬{movie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            {trailer ? (
              <YouTube
                videoId={trailer.key}
                opts={{
                  width: '100%',
                  height: '450',
                  playerVars: {
                    autoplay: 1,
                    controls: 1,
                    modestbranding: 1,
                    rel: 0,
                  },
                }}
              />
            ) : (
              <div className="text-white text-center p-4">예고편을 찾을 수 없습니다.</div>
            )}
          </Modal.Body>
        </Modal>

      </div>

      {/* 탭 버튼 */}
      <div className="tab-buttons my-4">
        <button
          className={`btn me-2 ${activeTab === 'reviews' ? 'btn-danger' : 'btn-outline-danger'}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
        <button
          className={`btn ${activeTab === 'recommended' ? 'btn-danger' : 'btn-outline-danger'}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>

      {/* 탭 콘텐츠 */}
      {activeTab === 'reviews' && (
        <div className="review-section mt-4">
          <h4 className="text-white mb-3">Reviews</h4>
          {reviews.length === 0 ? (
            <p className="text-muted">No reviews available.</p>
          ) : (
            reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          )}
        </div>
      )}

      {activeTab === 'recommended' && (
        <div className="recommended-section mt-4">
          <h4 className="text-white mb-3">Recommended Movies</h4>
          <Carousel
            responsive={responsive}
            infinite={false}
            arrows={true}
            keyBoardControl={true}
            autoPlay={false}
            itemClass="px-2"
          >
            {recommended.map((movie) => (
              <RecommendedMovieCard key={movie.id} movie={movie} />
            ))}
          </Carousel>
        </div>
      )}
    </Container>
  );
};

export default MovieDetailPage;
