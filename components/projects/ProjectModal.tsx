"use client";

import { useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  period: string;
  description: string;
  subDescription?: string;
  tech: string[];
  link?: string;
  readme?: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  period,
  description,
  subDescription,
  tech,
  link,
  readme,
}: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="document"
      >
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-start rounded-t-3xl">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
            <p className="text-sm text-slate-500">{period}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              프로젝트 설명
            </h3>
            <p className="text-slate-800 leading-relaxed mb-2">{description}</p>
            {subDescription && (
              <p className="text-slate-600 leading-relaxed">{subDescription}</p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {link && (
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">링크</h3>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                프로젝트 보기
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}

          {readme && (
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">README</h3>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
                  {readme}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
