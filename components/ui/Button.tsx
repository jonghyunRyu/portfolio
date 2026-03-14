import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-xl";

  const variantStyles = {
    primary:
      "bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900",
    secondary:
      "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800",
    dark: "bg-slate-700 hover:bg-slate-600 text-white hover:scale-105",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-4 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
