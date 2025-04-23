import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
      translation: {
        more: 'Read More',
        hide: 'Hide',
        reviews: 'Reviews',
        recommended: 'Recommended',
        trailer: 'Trailer',
        seeMore: 'See More',
        moreInfo: 'more...',
        popularMovies: 'Popular Movies',
        topRatedMovies: 'Top Rated Movies',
        upComingMovies: 'Upcoming Movies',
        search: 'Search',
        home: 'Home',
        movies: 'Movies',
        filterOption: 'Filter Option',
        allGenre: 'ALL',
        toptenOnly: 'Top 10',
        sort: 'Sort',
        rate: 'Rate',
        recently: 'Recently',
        budget: 'Budget',
        releasDate: 'Release Date',
        runtime: 'Runtime',
        noresultData: 'No Result, Sorry!',
      },
    },
    ko: {
      translation: {
        more: '더보기',
        hide: '접기',
        reviews: '리뷰',
        recommended: '추천 영화',
        trailer: '예고편',
        seeMore: '자세히 보기',
        moreInfo: '더보기',
        popularMovies: '인기 영화',
        topRatedMovies: '평점 높은 영화',
        upComingMovies: '개봉 예정 영화',
        search: '검색',
        home: '홈',
        movies: '영화',
        filterOption: '필터 옵션',
        allGenre: '전체',
        toptenOnly: 'Top 10만 보기',
        sort: '정렬',
        rate: '평점순',
        recently: '최신순',
        budget: '제작비',
        releasDate: '개봉일',
        runtime: '러닝타임',
        noresultData: '검색 결과가 없습니다.',
      },
    },
  };

i18n
  .use(LanguageDetector) // 브라우저 언어 감지
  .use(initReactI18next) // react-i18next에 연결
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React에서 자동 escaping
    },
  });

export default i18n;