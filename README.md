# 🎓 OK 프로젝트 (React + Three.js + Express + GPT)

OK 프로젝트는 React, Three.js, Express, GPT API를 활용한 멀티플랫폼 프로젝트입니다.

## 🚀 시작하기

### 1. 프로젝트 클론
```bash
git clone [깃허브 주소]
cd OK
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

## 📁 프로젝트 구조

```
OK/
├── src/
│   ├── pages/           # 페이지 컴포넌트들
│   │   ├── Intro/       # 인트로 페이지 (Three.js 작업)
│   │   ├── Main/        # 메인 페이지
│   │   ├── SystemBefore/
│   │   ├── DesignGuide/
│   │   ├── Tablet/
│   │   ├── SmartWatch/
│   │   ├── Kiosk/
│   │   └── OKe/
│   ├── components/      # 재사용 가능한 컴포넌트들
│   │   └── Chat.jsx     # 채팅 컴포넌트 (구현 완료)
│   ├── styles/          # 공통 SCSS 스타일 시스템
│   │   ├── main.scss    # 메인 스타일 (전체 import)
│   │   ├── color.scss   # 컬러 팔레트
│   │   ├── font.scss    # 폰트 설정
│   │   └── mixins.scss  # 믹스인들
│   └── utils/           # 유틸리티 함수들
├── server/              # Express 서버
│   ├── index.js
│   └── env.example
├── public/              # 정적 파일들
│   └── images/          # 이미지 파일들
└── dist/                # 빌드 결과물
```

## 🎨 스타일 시스템

### 사용법
각 페이지의 `.module.scss` 파일 상단에 추가:
```scss
@use '../../styles/main' as *;
```

### 컬러 팔레트
```scss
$color-primary: #0015ff;      // 메인 블루
$color-secondary: #ff4d00;    // 오렌지
$color-dark: #171717;         // 다크 그레이
$color-light: #f7f7f7;       // 라이트 그레이
$color-white: #ffffff;
$color-black: #000000;
```

### 폰트
```scss
$font-pretendard;             // 프리탠다드 거버넌트 (기본)
$font-gotham;                 // 고담 폰트 (제목용)
```

### 믹스인
```scss
@include flex-center;         // 플렉스 센터
@include flex-column-center;  // 세로 플렉스 센터
@include mobile { }           // 모바일 반응형 (768px 이하)
@include tablet { }           // 태블릿 반응형 (769-1024px)
@include desktop { }          // 데스크톱 반응형 (1025px 이상)
@include text-ellipsis;       // 텍스트 말줄임
@include button-base;         // 버튼 기본 스타일
@include card;                // 카드 스타일
```

## 🖼️ 이미지 사용법

### Public 폴더 사용 (권장)
```
public/images/
├── logo.png
├── background.jpg
└── hero-bg.jpg
```

```jsx
// JSX에서 사용
<img src="/images/logo.png" alt="로고" />

// CSS에서 사용
background-image: url('/images/background.jpg');
```

## 🗺️ 라우터 구조

- `/` - Intro 페이지 (3D 작업)
- `/main` - 메인 페이지
- `/system-before` - 시스템 전략
- `/design-guide` - 디자인 가이드
- `/tablet` - 태블릿
- `/smart-watch` - 스마트 워치
- `/kiosk` - 키오스크
- `/ok-e` - OK-E

## ⚙️ 개발 명령어

```bash
npm run dev          # 개발 서버 실행 (포트 3000)
npm run build        # 프로덕션 빌드
npm run preview      # 빌드 결과 미리보기
npm run server       # 백엔드 서버 실행
npm run start        # 프론트엔드 + 백엔드 동시 실행
npm run dev:all      # 개발 서버 + 백엔드 동시 실행
```

## 🌿 Git 브랜치 전략

### 브랜치 구조
- `main` - 프로덕션 브랜치 (배포용)
- `develop` - 개발 브랜치 (통합 브랜치)
- `feature/*` - 기능 개발 브랜치

### 작업 흐름
1. **기능 개발**: `feature/기능명` 브랜치 생성
2. **개발 완료**: `develop` 브랜치로 PR 생성
3. **코드 리뷰**: `develop`에서 테스트 및 검토
4. **배포**: `develop` → `main` 머지 후 배포

### 브랜치 생성 예시
```bash
# 새 기능 브랜치 생성
git checkout develop
git pull origin develop
git checkout -b feature/intro-3d-animation

# 작업 완료 후
git add .
git commit -m "feat: Intro 페이지 3D 애니메이션 추가"
git push origin feature/intro-3d-animation
```

## 🚀 배포

### GitHub Pages 배포
- **담당자**: 프로젝트 관리자만 가능
- **명령어**: `npm run deploy`
- **자동화**: `develop` → `main` 머지 시 자동 배포

### 배포 과정
1. `develop` 브랜치에서 최종 테스트
2. `main` 브랜치로 머지
3. 자동으로 GitHub Pages에 배포

## 🛠️ 설치된 패키지들

### 클라이언트 (React + Vite)
- **React**: ^19.1.1
- **React DOM**: ^19.1.1
- **React Router DOM**: ^7.9.1
- **Vite**: ^7.1.7

### 스타일링
- **Sass**: ^1.93.2 (SCSS 지원)

### 3D 그래픽스 & 애니메이션
- **Three.js**: ^0.180.0
- **three-stdlib**: ^2.36.0
- **@react-three/fiber**: ^9.3.0
- **@react-three/drei**: ^10.7.6
- **Framer Motion**: ^12.23.24
- **GSAP**: ^3.13.0

### API 통신
- **Axios**: ^1.12.2

### 서버 (Express)
- **Express**: ^5.1.0
- **CORS**: ^2.8.5
- **dotenv**: ^17.2.3
- **OpenAI**: ^6.3.0

## 📝 작업 가이드

### 3D 작업 (Intro 페이지)
- **작업 폴더**: `src/pages/Intro/`
- **스타일 파일**: `src/pages/Intro/style.module.scss`
- **컴포넌트 파일**: `src/pages/Intro/index.jsx`
- **Three.js 라이브러리**: 이미 설치 완료

### 주의사항
- `npm run dev`로 계속 확인하면서 작업
- 공통 스타일 시스템 사용 권장
- 라이브러리 추가 시 팀원과 상의
- 작업 내용 서로 공유
- 더 좋은 방법 있으면 제안

## 🔧 문제 해결

### 일반적인 문제들
- **오류 발생**: 브라우저 콘솔 확인
- **스타일 안 적용**: `@use '../../styles/main' as *;` 확인
- **이미지 안 보임**: `public/images/` 경로 확인
- **빌드 실패**: `npm install` 재실행

### 개발 환경 문제
- **포트 충돌**: 다른 포트 사용 (`npm run dev -- --port 3001`)
- **캐시 문제**: 브라우저 캐시 삭제 또는 시크릿 모드

## 👥 팀원별 역할

### 프로젝트 관리자
- Git 브랜치 관리
- 배포 관리
- 코드 리뷰
- 프로젝트 구조 관리

### 개발자
- 기능 개발
- 버그 수정
- 코드 최적화
- 테스트

## 📞 연락처 및 지원

- **궁금한 점**: 파일들 읽어보고 바로 질문
- **스타일 사용**: 모르겠으면 굳이 사용할 필요 없음 (하지만 사용하는 게 좋음)
- **Git 관련**: 같이 있을 때 설명 예정
- **긴급 문제**: 팀원과 즉시 연락

---

**준비 완료! 바로 작업 시작 가능합니다! 🚀**
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