import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Col, Container, Spinner, Row, Form } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import './MoviePage.style.css';
import { useTranslation } from 'react-i18next';

const ITEMS_PER_PAGE = 12;
const MAX_PAGE_LIMIT = 500;

const MoviePage = () => {
  const { t } = useTranslation();
  const { data: genreList = [] } = useMovieGenreQuery();
  const [query] = useSearchParams();
  const keyword = query.get('q');

  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [showTop10, setShowTop10] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setPage(1);
    setCurrentPage(1);
  }, [keyword, selectedGenre, showTop10, sortOption]);

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

  const handlePageClick = ({ selected }) => {
    const selectedPage = selected + 1;
    setPage(selectedPage);
    setCurrentPage(selectedPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isFiltered = selectedGenre || showTop10 || sortOption;

  let filteredResults = data?.results || [];
  let totalPages;

  if (isFiltered) {
    if (selectedGenre) {
      filteredResults = filteredResults.filter((movie) =>
        movie.genre_ids.includes(selectedGenre)
      );
    }

    if (showTop10) {
      filteredResults = [...filteredResults]
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 10);
    }

    if (sortOption === 'vote') {
      filteredResults = [...filteredResults].sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortOption === 'release') {
      filteredResults = [...filteredResults].sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
    }

    totalPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);
    filteredResults = filteredResults.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  } else {
    totalPages = Math.min(data?.total_pages || 1, MAX_PAGE_LIMIT);
  }

  const dynamicPageCount = Math.min(totalPages, currentPage + 10);

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
    <Container>
      {filteredResults.length === 0 && (
        <Alert variant="warning">{t('noresultData')}</Alert>
      )}

      <Row>
        <Col lg={4} xs={12}>
          <div className="filter-box">
            <div className="filter-title">{t('filterOption')}</div>
            <Form.Select
              className="mb-3"
              aria-label="장르 선택"
              value={selectedGenre || ''}
              onChange={(e) => {
                const value = e.target.value;
                setSelectedGenre(value === '' ? null : Number(value));
              }}
            >
              <option value="">{t('allGenre')}</option>
              {genreList.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </Form.Select>

            <Form.Check
              type="checkbox"
              label={t('toptenOnly')}
              className="mb-3"
              checked={showTop10}
              onChange={(e) => setShowTop10(e.target.checked)}
            />

            <Form.Select
              className="mb-3"
              aria-label="정렬 방식"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">{t('sort')}</option>
              <option value="vote">{t('rate')}</option>
              <option value="release">{t('recently')}</option>
            </Form.Select>
          </div>
        </Col>

        <Col lg={8} xs={12}>
          <Row>
            {filteredResults.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>

          <div className="floating-pagination">
            <ReactPaginate
              onPageChange={handlePageClick}
              pageCount={dynamicPageCount}
              forcePage={page - 1}
              pageRangeDisplayed={10}
              marginPagesDisplayed={1}
              nextLabel="❯"
              previousLabel="❮"
              breakLabel="..."
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              activeClassName="active"
            />
            {showScroll && (
              <button
                className="scroll-top-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
                title="맨 위로"
              >
                ⬆
              </button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;