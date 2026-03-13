"use client";

import { useState } from "react";
import Button from "../ui/Button";
import ProjectModal from "./ProjectModal";
import ReadmeModal from "./ReadmeModal";

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  subDescription?: string;
  tech: string[];
  link?: string;
  readme?: string;
  index: number;
}

export default function ProjectCard({
  title,
  period,
  description,
  subDescription,
  tech,
  link,
  readme,
  index,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReadmeOpen, setIsReadmeOpen] = useState(false);

  return (
    <>
      <div className="group bg-slate-50 rounded-3xl border border-slate-200 p-8 hover:shadow-2xl hover:border-slate-300 transition-all hover:-translate-y-2 min-h-[400px] flex flex-col">
        <div className="w-14 h-14 bg-slate-700 rounded-2xl mb-5 flex items-center justify-center text-white font-bold text-xl">
          {index + 1}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>

        <p className="text-sm text-slate-500 mb-4">{period}</p>

        <p className="text-base text-slate-800 mb-2 leading-relaxed">
          {description}
        </p>
        {subDescription && (
          <p className="text-sm text-slate-600 mb-5 leading-relaxed">
            {subDescription}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 bg-slate-200 text-slate-700 rounded-lg text-sm font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={() => setIsModalOpen(true)}
            className="group-hover:gap-2"
            icon={
              <span className="ml-1 group-hover:translate-x-1 transition-transform">
                →
              </span>
            }
          >
            자세히 보기
          </Button>
          {readme && (
            <Button
              variant="dark"
              size="md"
              onClick={() => setIsReadmeOpen(true)}
              aria-label="View README"
              icon={
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
            >
              README
            </Button>
          )}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        period={period}
        description={description}
        subDescription={subDescription}
        tech={tech}
        link={link}
        readme={readme}
      />

      {readme && (
        <ReadmeModal
          isOpen={isReadmeOpen}
          onClose={() => setIsReadmeOpen(false)}
          title={title}
          readme={readme}
        />
      )}
    </>
  );
}
