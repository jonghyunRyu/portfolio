'use client';

import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'archiving'];
      
      // 페이지 최상단에 있으면 아무것도 활성화하지 않음
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      // 페이지 하단에 거의 도달했는지 확인
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // 하단에서 100px 이내면 마지막 섹션 활성화
      if (scrollHeight - scrollTop - clientHeight < 100) {
        setActiveSection('archiving');
        return;
      }

      // 각 섹션의 위치를 확인
      const sectionPositions = sections.map(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          return { id, offsetTop };
        }
        return null;
      }).filter(Boolean);

      // 현재 스크롤 위치 (화면 상단에서 1/3 지점)
      const scrollPosition = window.scrollY + (window.innerHeight / 3);

      // 역순으로 확인하여 현재 보이는 섹션 찾기
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        const section = sectionPositions[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(section.id);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'archiving', label: 'Archiving' },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end py-2"
            aria-label={`Go to ${section.label}`}
          >
            <span
              className={`absolute right-12 bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeSection === section.id
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              {section.label}
            </span>
            <div
              className={`w-8 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'h-1 bg-slate-700'
                  : 'h-1 bg-slate-300 group-hover:bg-slate-500'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

