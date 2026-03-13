import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "프로젝트 1",
      period: "2024.01 - 2024.03",
      description: "프로젝트의 주요 내용을 설명합니다.",
      subDescription: "프로젝트에 대한 추가 설명이나 배경을 작성합니다.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/yourusername/project1",
      readme:
        "# 프로젝트 1\n\n프로젝트에 대한 상세한 README 내용입니다.\n\n## 주요 기능\n- 기능 1\n- 기능 2\n- 기능 3",
    },
    {
      title: "프로젝트 2",
      period: "2023.09 - 2023.12",
      description: "프로젝트의 주요 내용을 설명합니다.",
      subDescription: "프로젝트에 대한 추가 설명이나 배경을 작성합니다.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project2",
      readme: "# 프로젝트 2\n\n프로젝트에 대한 상세한 README 내용입니다.",
    },
    {
      title: "프로젝트 3",
      period: "2023.06 - 2023.08",
      description: "프로젝트의 주요 내용을 설명합니다.",
      tech: ["Vue.js", "Firebase", "CSS"],
      link: "https://github.com/yourusername/project3",
    },
  ];

  return (
    <section
      id="projects"
      className="flex items-center justify-center bg-white pt-16"
    >
      <div className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-3">Projects</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              period={project.period}
              description={project.description}
              subDescription={project.subDescription}
              tech={project.tech}
              link={project.link}
              readme={project.readme}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
