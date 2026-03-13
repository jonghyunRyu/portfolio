"use client";

import { useEffect } from "react";

interface ReadmeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  readme: string;
}

export default function ReadmeModal({
  isOpen,
  onClose,
  title,
  readme,
}: ReadmeModalProps) {
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
        className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="document"
      >
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center rounded-t-3xl z-10">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-slate-700 text-white rounded-lg text-sm font-semibold">
              README
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
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

        <div className="p-8">
          <div className="prose prose-slate max-w-none">
            <pre className="bg-slate-50 rounded-xl p-6 border border-slate-200 text-slate-800 whitespace-pre-wrap font-mono text-sm leading-relaxed overflow-x-auto">
              {readme}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
