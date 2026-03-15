"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
}

export default function ImageModal({
  isOpen,
  onClose,
  title,
  images,
}: ImageModalProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrent(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, prev, next]);

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
        <div className="bg-slate-900 p-6 flex justify-between items-center rounded-t-3xl shrink-0">
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-slate-700 text-white rounded-lg text-sm font-semibold">
              {current + 1} / {images.length}
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors text-white"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="relative flex items-center justify-center p-6 overflow-hidden">
          {images.length > 1 && (
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 z-10 p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <picture>
            <img
              src={images[current]}
              alt={`${title} - ${current + 1}`}
              className="max-w-full max-h-[70vh] object-contain rounded-xl"
            />
          </picture>

          {images.length > 1 && (
            <button
              type="button"
              onClick={next}
              className="absolute right-4 z-10 p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex justify-center gap-2 pb-6">
            {images.map((_, idx) => (
              <button
                type="button"
                key={images[idx]}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === current ? "bg-slate-900" : "bg-slate-300"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
