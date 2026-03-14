import { SiGithub, SiTistory } from "react-icons/si";

export default function Archiving() {
  const archives = [
    {
      platform: "GitHub",
      url: "https://github.com/jonghyunRyu",
      description: "소스 코드 저장소입니다.",
      icon: <SiGithub />,
    },
    {
      platform: "티스토리",
      url: "https://chobojonghyun.tistory.com/",
      description: "학습 내용을 기록하는 블로그입니다.",
      icon: <SiTistory className="text-red-500" />,
    },
  ];

  return (
    <section
      id="archiving"
      className="flex items-center justify-center bg-white py-12"
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-3">Archiving</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {archives.map((archive) => (
            <a
              key={archive.platform}
              href={archive.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-50 rounded-3xl border border-slate-200 p-8 hover:shadow-2xl hover:border-slate-300 transition-all hover:-translate-y-2 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {archive.icon}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {archive.platform}
                </h3>
              </div>
              <p className="text-sm text-sky-600 mb-3 group-hover:underline break-all">
                {archive.url.replace(/^https?:\/\//, "")}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {archive.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
