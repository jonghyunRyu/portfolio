export default function About() {
  const personalInfo = [
    { label: "이름", value: "류종현" },
    { label: "생년월일", value: "1995.09.03" },
    { label: "연락처", value: "010-4159-8707" },
    { label: "이메일", value: "whdgus5542@gmail.com" },
    { label: "학력", value: "가천대학교 (전자공학과)" },
    { label: "주소지", value: "경기도 성남시 분당구" },
  ];

  return (
    <section
      id="about"
      className="flex items-center justify-center pt-12 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-3">About</h2>
          <div className="w-20 h-1 bg-slate-700 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-2xl transition-all hover:border-slate-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-slate-700 rounded-full mr-3" />
              개인정보
            </h3>
            <div className="space-y-4">
              {personalInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center py-3 border-b border-slate-100 last:border-0"
                >
                  <span className="font-semibold text-slate-600 w-24 text-sm">
                    {info.label}
                  </span>
                  <span className="text-slate-900">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 hover:shadow-2xl transition-all text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-1.5 h-8 bg-white rounded-full mr-3" />
              소개
            </h3>
            <p className="text-lg font-semibold text-white mb-6 leading-relaxed">
              복잡성을 단순함으로 설계하는 프론트엔드 개발자 <br />
              류종현입니다.
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-amber-300 mb-2">
                  주도적인 아키텍처 설계
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed">
                  다수의 백엔드 개발자와 협업하며, 홀로 프론트엔드 환경을
                  구축하고 책임감 있게 프로젝트를 완주한 경험이 있습니다.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-amber-300 mb-2">
                  근거 있는 기술 선택
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed">
                  React, TypeScript, Tailwind CSS를 활용하며, 단순한 도구 사용을
                  넘어 렌더링 및 메모리 최적화를 고민합니다.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-amber-300 mb-2">
                  직관적인 데이터 시각화
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed">
                  대시보드 및 3D UI 적용 프로젝트를 통해 복잡한 데이터를 사용자
                  친화적이고 인터랙티브하게 풀어내는 데 강점이 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
