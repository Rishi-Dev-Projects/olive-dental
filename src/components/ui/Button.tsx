import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  arrowIcon?: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  withArrow = false,
  arrowIcon,
  icon,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: "text-xs py-2 px-4 gap-2",
    md: "text-sm py-3 px-6 gap-3",
    lg: "text-base py-3.5 px-8 gap-3.5",
  };

  const iconCircleSizes = {
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-8 h-8",
  };

  const variantStyles = {
    primary:
      "bg-olive-900 text-ivory-50 border border-olive-800 shadow-diffusion hover:bg-olive-800 hover:border-olive-700 active:scale-[0.98]",
    secondary:
      "bg-olive-100/70 text-olive-950 border border-olive-200/80 hover:bg-olive-200/80 active:scale-[0.98]",
    outline:
      "bg-transparent text-olive-950 border border-olive-900/20 hover:border-olive-900/60 hover:bg-olive-900/5 active:scale-[0.98]",
    gold:
      "bg-champagne-500 text-charcoal-950 border border-champagne-400 font-medium hover:bg-champagne-400 shadow-sm active:scale-[0.98]",
    ghost:
      "bg-transparent text-charcoal-700 hover:text-olive-950 hover:bg-olive-900/5 active:scale-[0.98]",
  };

  const circleBgStyles = {
    primary: "bg-white/15 text-ivory-50 group-hover:bg-white/25",
    secondary: "bg-olive-900/10 text-olive-950 group-hover:bg-olive-900/15",
    outline: "bg-olive-900/5 text-olive-950 group-hover:bg-olive-900/15",
    gold: "bg-charcoal-950/10 text-charcoal-950 group-hover:bg-charcoal-950/20",
    ghost: "bg-charcoal-900/10 text-charcoal-900",
  };

  const baseStyles =
    "group inline-flex items-center justify-center rounded-full font-sans font-medium transition-all duration-300 select-none disabled:opacity-50 disabled:pointer-events-none";

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="tracking-[0.02em]">{children}</span>
      {withArrow && (
        <span
          className={`flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${iconCircleSizes[size]} ${circleBgStyles[variant]}`}
        >
          {arrowIcon || <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />}
        </span>
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};
