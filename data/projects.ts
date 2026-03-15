import project1Readme from "./readmes/project1.md";
import project2Readme from "./readmes/project2.md";

export type ProjectAction =
  | { type: "readme"; content: string }
  | { type: "github"; url: string }
  | { type: "media"; url: string }
  | { type: "link"; url: string; label?: string }
  | { type: "figma"; url: string };

export interface Project {
  title: string;
  period: string;
  description: string;
  subDescription: string[];
  tech: string[];
  link?: string;
  actions?: ProjectAction[];
}

export const projects: Project[] = [
  {
    title: "OJO - CRM Admin Dashboard",
    period: "2026.02 - 현재 개발중 (8명 팀 프로젝트 - 프론트 1명, 백엔드 7명)",
    description:
      "통신사 고객 데이터를 관리하고 분석하기 위한 CRM 어드민 대시보드",
    subDescription: [
      "LG유플러스에서 고객 데이터 기반 고객 분석 서비스를 주제로한 개발을 요청",
      "URL 쿼리 파라미터에 연동되는 필터 기능 및 페이지네이션 구현",
      "Chart.js와 Mapbox-gl.js를 활용한 데이터 시각화",
      "사용자를 위한 UI/UX 설계 및 모바일, 태블릿, 데스크탑을 고려한 반응형 웹페이지 구현",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack-Query",
      "Vercel",
      "AWS S3",
      "Mapbox-gl.js",
      "Chart.js",
      "Axios",
    ],
    link: "https://frontend-react-virid.vercel.app/",
    actions: [
      { type: "readme", content: project1Readme },
      { type: "github", url: "https://github.com/hive-5-OJO/frontend-react" },
      {
        type: "figma",
        url: "https://www.figma.com/design/88qOEgJw4Y1u1jHJ79vFGg/%EC%B5%9C%EC%A2%85%EC%9C%B5%ED%95%A9%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=161-13&p=f&t=rc16SaVbWx7nnPGv-0",
      },
    ],
  },
  {
    title: "다무너 - AI 기반 상담 요약 플랫폼",
    period:
      "2026.01.12 - 2026.01.30 (7명 팀 프로젝트 - 프론트 6명, 백엔드 1명)",
    description:
      "실시간 상담과 AI 기반 상담 요약을 결합한 통합 요금제 상담 플랫폼",
    subDescription: [
      "LG유플러스에서 상담 내용을 요약하는 프로젝트 주제로 상담 내역 데이터를 받아 진행",
      "마이페이지, 이용 안내 페이지, 404 페이지, 상담 이력·이용 데이터 시각화 구현",
      "상담 내역 데이터 로딩 렌더링 최적화 및 3D 로딩 UI 적용",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vanilia-Extract",
      "Three.js",
      "Framer Motion",
      "Chart.js",
      "LangChain",
      "Axios",
      "Biome",
      "Lefthook",
      "Railway",
      "Vercel",
    ],
    link: "https://da-moono-frontend-deploy.vercel.app/",
    actions: [
      { type: "readme", content: project2Readme },
      { type: "github", url: "https://github.com/Da-Moono/DaMoono-Frontend" },
      { type: "media", url: "https://www.youtube.com/watch?v=CKL0SLVoZgQ" },
      {
        type: "figma",
        url: "https://www.figma.com/design/gLlzi0BI8A3EGoTf5UxbOl/%EC%A2%85%ED%95%A9%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=118-2&p=f&t=YZBp8Euzma2telTL-0",
      },
    ],
  },
];
