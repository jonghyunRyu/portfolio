"use client";

import { BookOpenText, ExternalLink, Image, Play } from "lucide-react";
import { useState } from "react";
import type { ProjectAction } from "@/data/projects";
import Button from "../ui/Button";
import ImageModal from "./ImageModal";
import ReadmeModal from "./ReadmeModal";

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  subDescription: string[];
  tech: string[];
  link?: string;
  actions?: ProjectAction[];
  index: number;
}

export default function ProjectCard({
  title,
  period,
  description,
  subDescription,
  tech,
  link,
  actions = [],
  index,
}: ProjectCardProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const readmeAction = actions.find((a) => a.type === "readme");
  const githubAction = actions.find((a) => a.type === "github");
  const mediaAction = actions.find((a) => a.type === "media");
  const linkActions = actions.filter((a) => a.type === "link");
  const figmaAction = actions.find((a) => a.type === "figma");
  const imagesAction = actions.find((a) => a.type === "images");

  return (
    <>
      <div className="group max-w-xl bg-slate-50 rounded-3xl border border-slate-200 p-10 hover:shadow-2xl hover:border-slate-300 transition-all hover:-translate-y-2 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shrink-0">
            {index + 1}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500">{period}</p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-4 mb-2" />
        {description && (
          <p className="text-base font-bold mb-4">{description}</p>
        )}
        <ul className="list-disc list-outside pl-5 space-y-1.5 mb-5">
          {subDescription.map((desc) => (
            <li
              key={desc}
              className="text-sm font-medium text-slate-800 leading-relaxed"
            >
              {desc}
            </li>
          ))}
        </ul>

        {link && (
          <div className="border-l-4 border-slate-400 pl-3 mb-5">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky-600 hover:text-sky-800 hover:underline transition-colors break-all"
            >
              {link}
            </a>
          </div>
        )}

        <div className="bg-orange-50 border border-orange-300 rounded-xl p-4 mb-5">
          <p className="text-sm font-medium text-slate-800">
            {tech.join(", ")}
          </p>
        </div>

        {actions.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {readmeAction && readmeAction.type === "readme" && (
              <Button
                variant="dark"
                size="sm"
                onClick={() => setActiveModal("readme")}
                aria-label="View README"
              >
                <BookOpenText size={16} />
                README
              </Button>
            )}
            {githubAction && githubAction.type === "github" && (
              <Button
                variant="dark"
                size="sm"
                aria-label="GitHub"
                onClick={() =>
                  window.open(githubAction.url, "_blank", "noopener,noreferrer")
                }
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </Button>
            )}
            {figmaAction && figmaAction.type === "figma" && (
              <Button
                variant="dark"
                size="sm"
                aria-label="Figma"
                onClick={() =>
                  window.open(figmaAction.url, "_blank", "noopener,noreferrer")
                }
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.02c0 1.689 1.377 3.068 3.067 3.068 1.691 0 3.067-1.38 3.067-3.068v-3.02H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.098-7.509a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.354 3.02 3.019 3.02h.098c1.665 0 3.019-1.355 3.019-3.02s-1.354-3.019-3.019-3.019h-.098z" />
                </svg>
                Figma
              </Button>
            )}
            {mediaAction && mediaAction.type === "media" && (
              <Button
                variant="dark"
                size="sm"
                aria-label="영상"
                onClick={() =>
                  window.open(mediaAction.url, "_blank", "noopener,noreferrer")
                }
              >
                <Play size={18} />
                영상
              </Button>
            )}
            {imagesAction && imagesAction.type === "images" && (
              <Button
                variant="dark"
                size="sm"
                onClick={() => setActiveModal("images")}
                aria-label="이미지 보기"
              >
                <Image size={16} />
                이미지
              </Button>
            )}
            {linkActions.map((action) =>
              action.type === "link" ? (
                <Button
                  key={action.url}
                  variant="dark"
                  size="sm"
                  aria-label={action.label || "링크"}
                  onClick={() =>
                    window.open(action.url, "_blank", "noopener,noreferrer")
                  }
                >
                  <ExternalLink size={16} />
                  {action.label || "링크"}
                </Button>
              ) : null,
            )}
          </div>
        )}
      </div>

      {readmeAction && readmeAction.type === "readme" && (
        <ReadmeModal
          isOpen={activeModal === "readme"}
          onClose={() => setActiveModal(null)}
          title={title}
          readme={readmeAction.content}
        />
      )}

      {imagesAction && imagesAction.type === "images" && (
        <ImageModal
          isOpen={activeModal === "images"}
          onClose={() => setActiveModal(null)}
          title={title}
          images={imagesAction.urls}
        />
      )}
    </>
  );
}
