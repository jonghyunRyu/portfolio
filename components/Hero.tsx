'use client';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,116,139,0.1),transparent_50%)]" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-2 bg-slate-700/50 backdrop-blur-sm text-slate-200 rounded-full text-sm font-medium border border-slate-600">
          Frontend Developer
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          안녕하세요!
          <br />
          <span className="bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">
            [이름]
          </span>
          입니다
        </h1>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          사용자 경험을 최우선으로 생각하며,
          <br />
          아름답고 효율적인 웹을 만드는 개발자입니다
        </p>
        <button
          onClick={scrollToAbout}
          className="group px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 animate-gentle-bounce border border-slate-600"
        >
          더 알아보기
          <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
