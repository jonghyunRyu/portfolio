import { projects } from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex items-center justify-center bg-white pt-16"
    >
      <div className="max-w-[1400px] mx-auto px-4 py-12">
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
              actions={project.actions}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
