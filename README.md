# Frontend Portfolio

프론트엔드 개발자로서의 기술 스택과 개발 환경을 정리하고,  
정적인 정보 전달에 최적화된 **개인 포트폴리오 웹사이트**입니다.

> **목표**  
> 2026년 프론트엔드 신입 개발자로 채용되기 위한 포트폴리오 제작

---

## 🔗 Demo

- 배포 URL: *(추후 Vercel 배포 후 추가 예정)*

---

## 🚀 Getting Started

이 프로젝트는 Node.js 환경에서 실행됩니다.

### Prerequisites
- Node.js v18 이상
- npm 또는 yarn

### Installation

```bash
# 레포지토리 클론
git clone https://github.com/your-username/your-repository.git

# 프로젝트 디렉토리 이동
cd your-repository

# 의존성 설치
npm install


## 🛠 Tech Stack

### Core
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**

### Code Quality
- **Biome** — lint & format 통합 관리
- **TypeScript typecheck (`tsc --noEmit`)**

### Git Workflow
- **Lefthook**
  - pre-commit: lint / format
  - pre-push: typecheck / build

### Deployment
- **Vercel**

---

## 📁 Project Structure

```txt
app/
 ├─ layout.tsx
 ├─ page.tsx
 ├─ globals.css
components/
styles/
public/
