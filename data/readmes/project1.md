# OJO - CRM Admin Dashboard

## 🔗 배포 URL

- AWS: http://high5-ojo.s3-website.ap-northeast-2.amazonaws.com
- Vercel: https://frontend-react-virid.vercel.app

## 📝 프로젝트 요약

통신사 고객 데이터를 관리하고 분석하기 위한 **CRM 어드민 대시보드**입니다.
8인 팀(프론트 1, 백엔드 7)에서 **프론트엔드 전체를 단독으로 담당**했습니다.

- 역할: Frontend 개발 (단독)
- 기술 스택: React, TypeScript, Vite, Tailwind CSS, TanStack Query, Zustand, Chart.js, Mapbox GL

---

## 🧩 주요 기능

- 고객 수/신규/이탈 메트릭 및 월별 추이 **대시보드**
- 다중 컬럼 정렬, 세그먼트 필터, 검색이 가능한 **고객 관리 테이블**
- 고객 선택 바구니를 통한 **채널 관리** (드래그 가능 플로팅 패널)
- RFM 분석, 코호트 분석, **Mapbox 기반 지역별 분석**
- 개인정보 마스킹 처리

---

## 🎯 문제 해결

| 문제 | 해결 방식 |
|------|----------|
| 컴포넌트 간 상태 의존성이 복잡해지는 문제 | 서버 상태(TanStack Query)와 UI 상태(Zustand)를 분리하여 관리 |
| 여러 API에서 동일 데이터 중복 요청 및 캐싱 부재 | TanStack Query 도입으로 캐싱, 자동 refetch, 로딩 상태 통합 관리 |
| 프로젝트 규모 확대에 따른 코드 구조 한계 | Feature-Sliced Design(FSD) 아키텍처로 기능 단위 모듈화 |
| 페이지 이동 시 고객 선택 상태 유실 | Zustand persist 미들웨어 + localStorage로 상태 유지 |
| URL 필터 상태가 새로고침 시 초기화 | URL 쿼리 파라미터와 필터 상태를 양방향 동기화 |

---

## 🚀 배포

- **main** → AWS S3 + GitHub Actions CI/CD
- **develop** → Vercel 자동 배포 (협업용)
