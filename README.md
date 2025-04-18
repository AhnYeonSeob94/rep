# Netflix-Project(1~5)

# 🎬 Netflix-Project (1~5 단계 구현)

## ✅ 구현 내용

1. 네비게이션 바를 검은색으로, 글씨는 흰색으로 변경 (variant 활용)
2. Netflix 로고 삽입
3. 검색 버튼을 빨간색으로 변경 (variant 활용)
4. 전체 배경색을 검정색으로 설정
5. Home → `/`, Movies → `/movies`로 이동 기능 추가


## 📁 프로젝트 폴더 구조

📦 Netflix-Project
├── 📁 node_modules
├── 📁 public
├── 📁 src
│   ├── 📁 layout
│   │   └── AppLayout.jsx         # 공통 레이아웃 (NavBar, Outlet 등)
│   ├── 📁 pages
│   │   ├── 📁 Homepage
│   │   │   ├── Homepage.jsx      # 메인 페이지 컴포넌트
│   │   │   └── Homepage.scss     # 메인 페이지 스타일
│   │   ├── 📁 MovieDetail
│   │   │   ├── MovieDetail.jsx   # 영화 상세 페이지
│   │   │   └── MovieDetail.scss  # 상세 페이지 스타일
│   │   ├── 📁 Movies
│   │   │   └── ...               # 영화 목록 관련 컴포넌트 (생략 가능)
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