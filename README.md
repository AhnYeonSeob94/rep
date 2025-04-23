# Netflix-Project(1~15)

# 🎬 Netflix-Project (1~15 단계 구현)

## ✅ 구현 내용

1. 네비게이션 바를 검은색으로, 글씨는 흰색으로 변경 (variant 활용)
2. Netflix 로고 삽입
3. 검색 버튼을 빨간색으로 변경 (variant 활용)
4. 전체 배경색을 검정색으로 설정
5. Home → `/`, Movies → `/movies`로 이동 기능 추가
6. Homepage/component Banner 제작(인기영화 중 첫번째)
7. hooks 폴더에 공통 훅 작성 (usePopularMoives.js 등)
8. Banner 미디어쿼리로 모바일환경에서 글씨가 넘치지않게 처리
9. 홈페이지 슬라이드 추가 (인기, top rated, upcoming)
10. 슬라이드 내 카드 carousel 이용 반응형 디자인 호버시 확대기능
11. 검색기능+ 필터링 기능 추가
12. 페이지네이션 추가
13. 상세페이지 추가
14. 상세페이지 내 예고편보기 기능/ 리뷰보기 / 추천영화 추가
15. 다국어기능 제공 (한국어/영어)

## 📁 프로젝트 폴더 구조

📦 Netflix-Project

├── 📁 node_modules

├── 📁 public

├── 📁 src

│   ├── 📁 common

│   │   ├── 📁 MovieCard                # 영화 카드 UI 컴포넌트

│   │   └── 📁 MovieSlider             # 슬라이드 캐러셀 공통 컴포넌트

│

│   ├── 📁 constants

│   │   └── responsive.js             # 반응형 설정 (react-multi-carousel용)

│

│   ├── 📁 hooks

│   │   ├── usePopularMovies.js

│   │   ├── useRecommendedMoviesQuery.js

│   │   ├── useTopRatedMovies.js

│   │   ├── useUpcomingMovies.js

│   │   ├── useMovieDetailQuery.js

│   │   ├── useMovieGenre.js

│   │   ├── useMovieReviewsQuery.js

│   │   ├── useMovieTrailerQuery.js

│   │   └── useSerchMovie.js          # (오타 → useSearchMovie.js 로 변경 권장)

│

│   ├── 📁 layout

│   │   └── AppLayout.jsx             # 공통 레이아웃 (Navbar 포함)

│

│   ├── 📁 pages

│   │   ├── 📁 Homepage

│   │   │   ├── Homepage.jsx

│   │   │   ├── Homepage.style.css

│   │   │   └── 📁 components

│   │   │       ├── Banner.jsx

│   │   │       ├── PopularMovieSlide.jsx

│   │   │       ├── TopRatedMovieSlide.jsx

│   │   │       ├── UpcomingMovieSlide.jsx

│   │   │       └── ReviewCard.jsx

│   │   │

│   │   ├── 📁 MovieDetail

│   │   │   └── MovieDetailPage.jsx

│   │   │

│   │   ├── 📁 Movies

│   │   │   └── MoviePage.jsx

│   │   │

│   │   └── 📁 NotFoundpage

│   │       └── NotFoundPage.jsx

│

│   ├── 📁 store

│   │   └── useLanguageStore.js       # 현재 언어 전역 상태 관리 (Zustand)

│

│   ├── 📁 utils

│   │   └── api.js                    # axios 인스턴스 (기본 API 요청기 설정)

│

│   ├── App.js                        # 라우터 설정 포함한 루트 컴포넌트

│   ├── App.css

│   ├── App.test.js

│   ├── i18n.js                       # 다국어(i18next) 설정

│   └── index.js                      # 리액트 렌더링 시작점

│

├── .env                              # API KEY 등 환경변수

├── package.json

└── README.md

## About Project 

-React + React Router v6

-React Query 기반 데이터 패칭

-Zustand로 언어 전역 상태 관리 (useLanguageStore)

-i18next로 다국어 지원 (i18n.js)

-컴포넌트 분리 구조: 슬라이드, 카드, 상세, 리뷰 등

-반응형 지원: react-multi-carousel + CSS 미디어쿼리

-TMDB API 연동