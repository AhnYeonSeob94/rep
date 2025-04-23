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
15. 다국어기능(예정)
## 📁 프로젝트 폴더 구조

📦 Netflix-Project
├── 📁 node_modules

├── 📁 public

├── 📁 src

│   ├── 📁 layout

│   │   └── usePopularMovies.js         # 훅 ( 인기영화가져오기 등)

│   ├── 📁 layout

│   │   └── AppLayout.jsx         # 공통 레이아웃 (NavBar, Outlet 등)

│   ├── 📁 pages

│   │   ├── 📁 Homepage

│   │   │   ├── Homepage.jsx      # 메인 페이지

│   │   │   └── Homepage.scss     # 메인 페이지 스타일

│   │   │    ├── 📁 components   # 홈페이지 내 컴포넌트 (Banner 등) 

│   │   ├── 📁 MovieDetail

│   │   │   ├── MovieDetail.jsx   # 영화 상세 페이지

│   │   │   └── MovieDetail.scss  # 상세 페이지 스타일

│   │   ├── 📁 Movies

│   │   │   ├── MoviePage.jsx   # 영화 리스트 페이지

│   │   │   └── MoviePage.scss  # 영화 리스트 스타일

│   │   ├── 📁 NotFoundpage

│   │   │   └── NotFoundPage.jsx  # 404 페이지

│   ├── 📁 utils

│   │   └── api.js                # API 호출 함수 정리

│   ├── App.js                    # 라우터 설정 포함한 진입 컴포넌트

│   ├── App.css                   # 전체 스타일

│   ├── index.js                  # 리액트 렌더링 시작점

│   ├── index.css                 # 글로벌 스타일

│   ├── logo.svg

│   └── 기타 설정 파일들

├── .env                          # 환경변수(API 키 등)

├── package.json

└── README.md