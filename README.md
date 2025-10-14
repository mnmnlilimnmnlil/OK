# 🎓 OK 프로젝트 (React + Three.js + Express + GPT)

OK 프로젝트는 React, Three.js, Express, GPT API를 활용한 멀티플랫폼 프로젝트입니다.

## 📁 프로젝트 구조

```
OK/
├── src/
│   ├── pages/           # 페이지 컴포넌트들
│   │   ├── Intro/       # 인트로 페이지 (Three.js)
│   │   ├── Main/        # 메인 페이지
│   │   ├── SystemBefore/
│   │   ├── DesignGuide/
│   │   ├── Tablet/
│   │   ├── SmartWatch/
│   │   ├── Kiosk/
│   │   └── OKe/
│   ├── components/      # 재사용 가능한 컴포넌트들
│   ├── hooks/          # 커스텀 훅들
│   ├── styles/         # SCSS 스타일 파일들
│   │   ├── global.scss
│   │   ├── variables.scss
│   │   └── mixins.scss
│   └── utils/          # 유틸리티 함수들
├── server/             # Express 서버
│   ├── index.js
│   └── env.example
└── public/             # 정적 파일들
```

## 🚀 설치된 패키지들

### 클라이언트 (React + Vite)
- **React**: ^19.1.1
- **React DOM**: ^19.1.1
- **React Router DOM**: ^7.9.1 (라우팅)
- **Vite**: ^7.1.7 (빌드 도구)

### 스타일링
- **Sass**: ^1.83.1 (SCSS 지원)

### 3D 그래픽스 & 애니메이션
- **Three.js**: ^0.170.0 (3D 라이브러리)
- **three-stdlib**: ^0.170.0 (Three.js 표준 라이브러리)
- **Framer Motion**: ^11.15.0 (애니메이션 라이브러리)
- **GSAP**: ^3.12.5 (고급 애니메이션 라이브러리)
- **react-bits**: ^0.0.1 (React 비트 컴포넌트)

### API 통신
- **Axios**: ^1.12.2 (HTTP 클라이언트)

### 서버 (Express)
- **Express**: ^4.21.2 (웹 서버 프레임워크)
- **CORS**: ^2.8.5 (Cross-Origin Resource Sharing)
- **dotenv**: ^17.2.3 (환경 변수 관리)
- **OpenAI**: ^4.67.3 (GPT API 클라이언트)

### 개발 도구
- **Concurrently**: ^9.2.1 (동시 실행 도구)
- **ESLint**: ^9.36.0 (코드 린터)
- **gh-pages**: ^6.3.0 (GitHub Pages 배포)

## 🛠️ 개발 환경 설정

### 1. 환경 변수 설정
```bash
# server 폴더에 .env 파일 생성
cd server
cp env.example .env
# .env 파일에서 OPENAI_API_KEY를 실제 키로 변경
```

### 2. 개발 서버 실행
```bash
# 클라이언트만 실행
npm run dev

# 서버만 실행
npm run server

# 클라이언트와 서버 동시 실행
npm start
```

### 3. 빌드 및 배포
```bash
# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

## 🌐 접속 URL
- **클라이언트**: http://localhost:5173
- **서버**: http://localhost:5000
- **GitHub Pages**: https://mnmnlilimnmnlil.github.io/OK

## 📝 주요 기능

### 인트로 페이지
- Three.js를 활용한 3D 인터랙티브 인트로
- 스크롤을 통한 페이지 전환
- 회전하는 3D 오브젝트

### 메인 페이지
- 비디오 배경
- 네비게이션 메뉴
- 각 섹션으로의 라우팅

### 서버 API
- GPT API 연동
- CORS 지원
- RESTful API 엔드포인트

## 🎨 스타일 가이드

### 색상
- Primary: #3399ff
- Background: #0b0b0b
- Text: #ffffff
- Accent: #ff6b6b

### 폰트
- 기본: Pretendard, sans-serif

## 🔧 개발 명령어

```bash
# 개발 서버 시작
npm run dev

# 서버 시작
npm run server

# 동시 실행
npm start

# 빌드
npm run build

# 린트 검사
npm run lint

# 미리보기
npm run preview

# 배포
npm run deploy
```

## 📦 패키지 관리

모든 패키지는 `package.json`에 정리되어 있으며, `npm install` 명령어로 설치할 수 있습니다.

### 새 패키지 설치
```bash
# 일반 의존성
npm install [패키지명]

# 개발 의존성
npm install -D [패키지명]
```

## 🤝 협업 가이드

1. `develop` 브랜치에서 작업
2. 기능별로 브랜치 생성
3. Pull Request를 통한 코드 리뷰
4. 메인 브랜치로 병합

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.