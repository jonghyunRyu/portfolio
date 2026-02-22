# 포트폴리오 웹사이트

Next.js와 Tailwind CSS로 제작한 프론트엔드 개발자 포트폴리오 웹사이트입니다.

## 🚀 배포 

👉 https://rjh-portfolio.vercel.app/

## 🎨 주요 특징

- **반응형 레이아웃**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- **부드러운 애니메이션**: 스크롤 애니메이션과 호버 효과
- **섹션 네비게이션**: 스크롤 인디케이터와 네비게이션 바로 쉬운 이동
- **모바일 메뉴**: 햄버거 메뉴로 모바일 환경 지원

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Linter**: Biome

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone <repository-url>

# 프로젝트 디렉토리로 이동
cd portfolio

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📁 프로젝트 구조

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 메인 페이지
│   └── globals.css          # 전역 스타일
├── components/              # React 컴포넌트
│   ├── Navbar.tsx          # 네비게이션 바
│   ├── Hero.tsx            # 메인 히어로 섹션
│   ├── About.tsx           # 소개 섹션
│   ├── Projects.tsx        # 프로젝트 섹션
│   ├── Skills.tsx          # 스킬 섹션
│   ├── Archiving.tsx       # 아카이빙 섹션
│   ├── Footer.tsx          # 푸터
│   ├── ScrollIndicator.tsx # 스크롤 위치 인디케이터
│   └── ScrollToTop.tsx     # 맨 위로 버튼
├── public/                  # 정적 파일
├── .gitignore              # Git 제외 파일
├── biome.json              # Biome 설정
├── next.config.ts          # Next.js 설정
├── package.json            # 프로젝트 의존성
├── postcss.config.mjs      # PostCSS 설정
├── tsconfig.json           # TypeScript 설정
└── README.md               # 프로젝트 문서
```

## 🎯 주요 섹션

### Hero Section
- 다크 그라데이션 배경의 메인 랜딩 섹션
- 부드러운 bounce 애니메이션이 적용된 CTA 버튼
- 스크롤 다운 화살표 아이콘

### About Section
- 개인정보와 소개를 나란히 배치
- 한쪽은 밝은 배경, 한쪽은 다크 그라데이션으로 대비

### Projects Section
- 그리드 레이아웃으로 프로젝트 카드 배치
- 호버 시 위로 올라가는 애니메이션
- 기술 스택 태그 표시

### Skills Section
- 카테고리별로 스킬 분류 (Frontend, Backend, Tools)
- 호버 효과가 있는 스킬 아이템

### Archiving Section
- GitHub, Blog 링크 카드
- 외부 링크로 연결

## 📱 반응형 디자인

- **Desktop (1024px+)**: 전체 레이아웃, 스크롤 인디케이터 표시
- **Tablet (768px - 1023px)**: 그리드 레이아웃 조정
- **Mobile (~767px)**: 햄버거 메뉴, 단일 컬럼 레이아웃

## 🤝 기여

이슈나 개선 사항이 있다면 자유롭게 PR을 보내주세요!

---
