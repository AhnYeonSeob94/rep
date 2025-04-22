import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSerchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Col, Container, Spinner, Row, Form } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import './MoviePage.style.css';

const ITEMS_PER_PAGE = 12;

const MoviePage = () => {
  const { data: genreList = [] } = useMovieGenreQuery();
  const [query] = useSearchParams();
  const keyword = query.get('q');

  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [showTop10, setShowTop10] = useState(false);
  const [sortOption, setSortOption] = useState('');

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 키워드 or 필터 변경 시 페이지 초기화
  useEffect(() => {
    setPage(1);
  }, [keyword, selectedGenre, showTop10, sortOption]);

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // UX 개선
  };

  // 필터 + 정렬 처리
  let filteredResults = data?.results || [];

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

  // 클라이언트 사이드 페이지네이션
  const offset = (page - 1) * ITEMS_PER_PAGE;
  const currentPageData = filteredResults.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);

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
        <Alert variant="warning">검색 결과가 없습니다.</Alert>
      )}

      <Row>
        <Col lg={4} xs={12}>
          <div className="filter-box">
          <div className="filter-title">필터 옵션</div>
          {/* 장르 필터 */}
          <Form.Select
            className="mb-3"
            aria-label="장르 선택"
            value={selectedGenre || ''}
            onChange={(e) => {
              const value = e.target.value;
              setSelectedGenre(value === '' ? null : Number(value));
            }}
          >
            <option value="">전체 장르</option>
            {genreList.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </Form.Select>

          {/* 인기 Top10 필터 */}
          <Form.Check
            type="checkbox"
            label="인기 Top 10만 보기"
            className="mb-3"
            checked={showTop10}
            onChange={(e) => setShowTop10(e.target.checked)}
          />

          {/* 정렬 옵션 */}
          <Form.Select
            className="mb-3"
            aria-label="정렬 방식"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">정렬 없음</option>
            <option value="vote">평점순</option>
            <option value="release">최신 개봉일순</option>
          </Form.Select>
          </div>
        </Col>

        <Col lg={8} xs={12}>
          <Row>
            {currentPageData.map((movie, index) => (
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <div className="floating-pagination">
          <ReactPaginate
            onPageChange={handlePageClick}
            pageCount={pageCount}
            forcePage={page - 1}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            nextLabel="next >"
            previousLabel="< previous"
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
          />
          {showScroll && (
          <button className="scroll-top-btn"
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
