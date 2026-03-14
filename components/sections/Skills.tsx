import type { ReactNode } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiCoderabbit,
  SiCss,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLefthook,
  SiMysql,
  SiNextdotjs,
  SiNotion,
  SiReact,
  SiShadcnui,
  SiSlack,
  SiSpring,
  SiStyledcomponents,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVanillaextract,
  SiVercel,
  SiVite,
} from "react-icons/si";

import SkillBadge from "../ui/SkillBadge";

interface Skill {
  icon?: ReactNode;
  label: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const mainCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "UI 구현과 페이지 구성의 중심이 되는 기술들",
    skills: [
      { icon: <SiReact className="text-sky-500" />, label: "React" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
      {
        icon: <SiJavascript className="text-yellow-500" />,
        label: "JavaScript",
      },
      { icon: <SiHtml5 className="text-orange-500" />, label: "HTML5" },
      { icon: <SiCss className="text-blue-500" />, label: "CSS3" },
      { icon: <SiVite className="text-purple-500" />, label: "Vite" },
    ],
  },
  {
    title: "Styling · State",
    description: "화면 스타일링, 상태 흐름을 다루는 기술들",
    skills: [
      {
        icon: <SiTailwindcss className="text-cyan-500" />,
        label: "Tailwind CSS",
      },
      {
        icon: <SiStyledcomponents className="text-pink-500" />,
        label: "styled-components",
      },
      { icon: <SiThreedotjs />, label: "Three.js" },
      {
        icon: <span className="text-amber-700 font-bold text-xs">Z</span>,
        label: "Zustand",
      },
      {
        icon: <span className="text-red-500 font-bold text-xs">TQ</span>,
        label: "TanStack Query",
      },
      { icon: <SiShadcnui />, label: "shadcn/ui" },
      {
        icon: <SiVanillaextract className="text-violet-500" />,
        label: "vanilla-extract",
      },
    ],
  },
  {
    title: "Tools · Collaboration · Deploy",
    description: "협업, 문서화, 품질 관리, 배포에 사용한 도구들",
    skills: [
      { icon: <SiGithub />, label: "GitHub" },
      { icon: <SiFigma className="text-purple-500" />, label: "Figma" },
      { icon: <SiNotion />, label: "Notion" },
      { icon: <SiJira className="text-blue-600" />, label: "Jira" },
      { icon: <SiVercel />, label: "Vercel" },
      {
        icon: <SiLefthook className="text-red-500" />,
        label: "lefthook",
      },
      {
        icon: <SiCoderabbit className="text-orange-500" />,
        label: "CodeRabbit",
      },
      { icon: <SiSlack />, label: "Slack" },
    ],
  },
];

const alsoWorkedWith: SkillCategory = {
  title: "다뤄본 기술들",
  description: "프로젝트나 학습 과정에서 함께 다뤄 본 기술들",
  skills: [
    { icon: <FaJava className="text-red-500" />, label: "Java" },
    { icon: <SiMysql className="text-blue-600" />, label: "MySQL" },
    { icon: <SiSpring className="text-green-500" />, label: "STS" },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center py-12 bg-slate-50"
    >
      <div className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-3">Skills</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...mainCategories, alsoWorkedWith].map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-slate-500 rounded-full" />
                <h3 className="text-base font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>
              <p className="text-sm text-slate-500 mb-5">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.label}
                    icon={skill.icon}
                    label={skill.label}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
