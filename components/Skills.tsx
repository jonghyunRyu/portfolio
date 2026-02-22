export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
    },
  ];

  return (
    <section id="skills" className="flex items-center justify-center pt-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-3">Skills</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-2xl transition-all hover:border-slate-300">
              <div className="flex items-center justify-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center text-slate-800 font-medium hover:bg-slate-100 hover:border-slate-300 transition-all">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
