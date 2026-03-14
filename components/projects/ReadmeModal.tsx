"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
        className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="document"
      >
        <div className="bg-slate-900 border-b border-slate-200 p-6 flex justify-between items-center rounded-t-3xl z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-slate-700 text-white rounded-lg text-sm font-semibold">
              README.md
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-slate-500 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X color="white" />
          </button>
        </div>

        <div className="px-8 overflow-y-auto scrollbar-hide">
          <article
            className="prose prose-md prose-slate max-w-none 
              prose-headings:text-slate-900 prose-headings:mt-6 prose-headings:mb-3
              prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:my-3
              prose-a:text-slate-600 prose-a:underline 
              hover:prose-a:text-slate-900 prose-strong:text-slate-900 
              prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 
              prose-code:rounded prose-code:text-slate-100 prose-code:text-xs 
              prose-code:before:content-none prose-code:after:content-none 
              prose-pre:bg-slate-800 prose-pre:text-slate-100 prose-pre:border
              prose-pre:border-slate-700 prose-pre:rounded-xl prose-pre:my-3 prose-pre:text-xs
              prose-ul:text-slate-700 prose-ul:my-3
              prose-ol:text-slate-700 prose-ol:my-3
              prose-li:marker:text-slate-400 prose-li:my-1
              prose-blockquote:border-slate-300 prose-blockquote:text-slate-600 
              prose-hr:border-slate-200 prose-hr:my-5
              prose-img:rounded-xl 
              prose-table:text-xs prose-th:text-slate-900 prose-td:text-slate-700"
          >
            <Markdown remarkPlugins={[remarkGfm]}>{readme}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
}
