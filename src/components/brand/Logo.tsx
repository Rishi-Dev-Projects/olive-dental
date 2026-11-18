import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "full" | "compact" | "mark";
  theme?: "dark" | "light" | "monochrome";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "full",
  theme = "dark",
}) => {
  const isLight = theme === "light";
  const primaryColor = isLight ? "#FDFBF7" : "#1C2713";
  const accentColor = isLight ? "#D4BC9B" : "#496233";
  const metallicGold = isLight ? "#E2CFB4" : "#C5A880";
  const textColor = isLight ? "text-ivory-50" : "text-olive-950";

  // Refined, minimalist Olive & Dove emblem
  const LogoMark = (
    <div
      className={`relative flex items-center justify-center flex-shrink-0 w-9 h-9 rounded-full ${
        isLight ? "bg-white/10 ring-1 ring-white/15" : "bg-olive-900/5 ring-1 ring-olive-900/10"
      }`}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        aria-hidden="true"
      >
        {/* Soft base circle */}
        <circle cx="24" cy="24" r="21" fill={isLight ? "rgba(255,255,255,0.06)" : "rgba(73,98,51,0.07)"} />

        {/* Stem & Dove Wing Arc */}
        <path
          d="M12 33C14 28 18 20 27 15C32 12.2 37 12 37 12C37 12 35.5 16 33 19C29.5 23.2 24 27 18 30C15 31.5 13 32.5 12 33Z"
          fill={accentColor}
          opacity="0.9"
        />

        {/* Upper Leaf / Wing Tip */}
        <path
          d="M21 18C23 13.5 28 10 33 8.5C34 11 33.5 14 31 16.5C28.5 19 25 20.5 21 18Z"
          fill={metallicGold}
        />

        {/* Gentle Smile Arc */}
        <path
          d="M16 29C20 33 28 34 35 31C32 33.5 26 35.5 20 34C17.5 33.4 16 31 16 29Z"
          fill={primaryColor}
        />

        {/* Olive Fruit Accent */}
        <circle cx="16.5" cy="23.5" r="3" fill={metallicGold} />
      </svg>
    </div>
  );

  if (variant === "mark") {
    return (
      <Link
        href="/"
        className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
        aria-label="Olive Dental Care Homepage"
      >
        {LogoMark}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group select-none ${className}`}
      aria-label="Olive Dental Care Homepage"
    >
      {LogoMark}
      <span
        className={`font-serif text-lg sm:text-[19px] font-medium tracking-tight leading-none transition-colors duration-200 ${textColor}`}
      >
        Olive Dental Care
      </span>
    </Link>
  );
};
