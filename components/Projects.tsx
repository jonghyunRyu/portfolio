export default function Projects() {
  const projects = [
    {
      title: '프로젝트 1',
      description: '프로젝트에 대한 간단한 설명입니다.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: '프로젝트 2',
      description: '프로젝트에 대한 간단한 설명입니다.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: '프로젝트 3',
      description: '프로젝트에 대한 간단한 설명입니다.',
      tech: ['Vue.js', 'Firebase', 'CSS'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="flex items-center justify-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-3">Projects</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-50 rounded-3xl border border-slate-200 p-6 hover:shadow-2xl hover:border-slate-300 transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-slate-700 rounded-2xl mb-4 flex items-center justify-center text-white font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium group-hover:gap-2 transition-all"
              >
                자세히 보기
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
