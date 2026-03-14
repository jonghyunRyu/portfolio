import project1Readme from "./readmes/project1.md";
import project2Readme from "./readmes/project2.md";

export interface Project {
  title: string;
  period: string;
  description: string;
  subDescription?: string;
  tech: string[];
  link?: string;
  readme?: string;
}

export const projects: Project[] = [
  {
    title: "고객 데이터 기반 고객 분석 서비스 OJO",
    period: "2024.01 - 2024.03",
    description: "프로젝트의 주요 내용을 설명합니다.",
    subDescription: "프로젝트에 대한 추가 설명이나 배경을 작성합니다.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/project1",
    readme: project1Readme,
  },
  {
    title: "프로젝트 2",
    period: "2023.09 - 2023.12",
    description: "프로젝트의 주요 내용을 설명합니다.",
    subDescription: "프로젝트에 대한 추가 설명이나 배경을 작성합니다.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project2",
    readme: project2Readme,
  },
  {
    title: "프로젝트 3",
    period: "2023.06 - 2023.08",
    description: "프로젝트의 주요 내용을 설명합니다.",
    tech: ["Vue.js", "Firebase", "CSS"],
    link: "https://github.com/yourusername/project3",
  },
];
