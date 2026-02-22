export default function About() {
  const personalInfo = [
    { label: '이름', value: '[이름]' },
    { label: '생년월일', value: '00.00.00' },
    { label: '연락처', value: '010-0000-0000' },
    { label: '이메일', value: 'your.email@example.com' },
    { label: '학력', value: '[대학교] [전공]' },
    { label: '주소지', value: '[지역]' },
  ];

  return (
    <section id="about" className="flex items-center justify-center pt-16 bg-slate-50">
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
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center py-3 border-b border-slate-100 last:border-0">
                  <span className="font-semibold text-slate-600 w-24 text-sm">{info.label}</span>
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
            <p className="text-slate-100 mb-4 leading-relaxed">
              안녕하세요! 프론트엔드 개발자를 꿈꾸는 [이름]입니다.
            </p>
            <p className="text-slate-200 mb-4 leading-relaxed">
              사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하기 위해 노력합니다.
            </p>
            <p className="text-slate-200 leading-relaxed">
              React, Next.js, TypeScript를 활용한 모던 웹 개발에 관심이 많으며,
              지속적인 학습을 통해 성장하는 개발자가 되고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
