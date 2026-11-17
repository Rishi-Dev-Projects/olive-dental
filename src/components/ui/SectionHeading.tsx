import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "right" | "split";
  theme?: "light" | "dark";
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
  action,
}) => {
  const isDark = theme === "dark";
  const titleColor = isDark ? "text-ivory-50" : "text-olive-950";
  const subtitleColor = isDark ? "text-ivory-200/80" : "text-charcoal-600";

  if (align === "split") {
    return (
      <div
        className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 md:pb-16 ${className}`}
      >
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="mb-4">
              <Badge variant={isDark ? "champagne" : "olive"}>{eyebrow}</Badge>
            </div>
          )}
          <h2
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-medium tracking-tight leading-[1.08] ${titleColor}`}
          >
            {title}
          </h2>
        </div>
        <div className="max-w-md flex flex-col items-start lg:items-end gap-5">
          {subtitle && (
            <p className={`text-base md:text-lg font-sans leading-relaxed ${subtitleColor}`}>
              {subtitle}
            </p>
          )}
          {action && <div className="pt-1">{action}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-3xl pb-10 md:pb-14 ${className}`}>
      {eyebrow && (
        <div className="mb-4">
          <Badge variant={isDark ? "champagne" : "olive"}>{eyebrow}</Badge>
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg font-sans leading-relaxed max-w-[65ch] ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};
