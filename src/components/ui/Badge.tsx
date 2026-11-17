import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "olive" | "champagne" | "outline" | "ivory";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "olive",
  className = "",
  icon,
}) => {
  const variantStyles = {
    olive:
      "bg-olive-900/5 text-olive-800 border border-olive-900/10 shadow-sm",
    champagne:
      "bg-champagne-500/10 text-champagne-700 border border-champagne-500/20 shadow-sm",
    outline:
      "bg-transparent text-charcoal-700 border border-charcoal-200/80",
    ivory:
      "bg-ivory-50/90 text-olive-950 border border-ivory-200 shadow-sm backdrop-blur-sm",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] uppercase tracking-[0.2em] font-sans font-medium transition-colors ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="opacity-80 -ml-0.5">{icon}</span>}
      {children}
    </span>
  );
};
