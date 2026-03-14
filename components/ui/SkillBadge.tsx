import type { ReactNode } from "react";

interface SkillBadgeProps {
  icon?: ReactNode;
  label: string;
}

export default function SkillBadge({ icon, label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-800 hover:border-slate-300 hover:shadow-sm transition-all">
      {icon && (
        <span className="text-base leading-none flex items-center">{icon}</span>
      )}
      {label}
    </span>
  );
}
