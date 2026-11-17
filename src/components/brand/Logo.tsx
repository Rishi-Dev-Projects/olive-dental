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
  const subtextColor = isLight ? "text-ivory-200/80" : "text-charcoal-500";

  // The custom Olive & Dove emblem:
  // An organic olive sprig whose dual leaves and stem sweep upward in a gentle ascending flight arc (dove silhouette & smile curve)
  const LogoMark = (
    <div className="relative flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-olive-900/5 ring-1 ring-olive-900/10">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        aria-hidden="true"
      >
        {/* Soft radial glow / base circle */}
        <circle cx="24" cy="24" r="22" fill={isLight ? "rgba(255,255,255,0.08)" : "rgba(73,98,51,0.08)"} />
        
        {/* Harmonious Olive Stem & Ascending Dove Wing Curve */}
        <path
          d="M12 33C14 28 18 20 27 15C32 12.2 37 12 37 12C37 12 35.5 16 33 19C29.5 23.2 24 27 18 30C15 31.5 13 32.5 12 33Z"
          fill={accentColor}
          opacity="0.9"
        />
        
        {/* Secondary Upper Olive Leaf / Wing Tip */}
        <path
          d="M21 18C23 13.5 28 10 33 8.5C34 11 33.5 14 31 16.5C28.5 19 25 20.5 21 18Z"
          fill={metallicGold}
        />
        
        {/* Lower Curving Leaf completing the gentle Smile Arc */}
        <path
          d="M16 29C20 33 28 34 35 31C32 33.5 26 35.5 20 34C17.5 33.4 16 31 16 29Z"
          fill={primaryColor}
        />
        
        {/* Olive Fruit / Golden Droplet of Care */}
        <circle cx="16.5" cy="23.5" r="3.2" fill={metallicGold} />
        <ellipse cx="15.8" cy="22.8" rx="1" ry="0.6" fill="#FFFFFF" opacity="0.6" />
        
        {/* Small Graceful Accent Leaf */}
        <path
          d="M28 26C31 24.5 35 24 38 25C36 27 33 28 29.5 27.5C28.5 27.3 28 26.5 28 26Z"
          fill={accentColor}
          opacity="0.8"
        />
      </svg>
    </div>
  );

  if (variant === "mark") {
    return (
      <Link
        href="/"
        className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
        aria-label="Olive Dental Care Bardoli Homepage"
      >
        {LogoMark}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group select-none ${className}`}
      aria-label="Olive Dental Care Bardoli Homepage"
    >
      {LogoMark}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif text-lg tracking-[0.08em] font-semibold leading-tight transition-colors duration-300 ${textColor}`}
          >
            OLIVE
          </span>
          <span
            className={`text-sm tracking-[0.2em] font-light uppercase ${textColor} opacity-85`}
          >
            DENTAL CARE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-[9.5px] tracking-[0.22em] uppercase font-mono ${subtextColor}`}
          >
            BARDOLI
          </span>
          <span className="w-1 h-1 rounded-full bg-champagne-500" />
          <span
            className={`text-[9.5px] tracking-[0.16em] uppercase font-sans font-medium ${subtextColor}`}
          >
            SMILE STUDIO
          </span>
        </div>
      </div>
    </Link>
  );
};
