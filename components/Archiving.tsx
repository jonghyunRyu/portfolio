export default function Archiving() {
  const archives = [
    {
      platform: 'GitHub',
      url: 'https://github.com/yourusername',
      description: '소스 코드 저장소입니다.',
      icon: '💻',
    },
    {
      platform: 'Blog',
      url: 'https://yourblog.com',
      description: '학습 내용을 기록하는 블로그입니다.',
      icon: '📝',
    },
    {
      platform: 'Notion',
      url: 'https://notion.so',
      description: '프로젝트 문서와 학습 자료를 정리합니다.',
      icon: '📚',
    },
  ];

  return (
    <section id="archiving" className="flex items-center justify-center bg-white pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-3">Archiving</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {archives.map((archive, index) => (
            <a
              key={index}
              href={archive.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-50 rounded-3xl border border-slate-200 p-8 hover:shadow-2xl hover:border-slate-300 transition-all hover:-translate-y-2 text-center"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{archive.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{archive.platform}</h3>
              <p className="text-slate-600 leading-relaxed">{archive.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
