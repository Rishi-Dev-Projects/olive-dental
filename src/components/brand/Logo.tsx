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
  const toothPrimary = isLight ? "#FDFBF7" : "#1C2713";
  const leafGreen = isLight ? "#A6BF8E" : "#4B6434";
  const oliveGold = isLight ? "#E2CFB4" : "#C5A880";
  const textColor = isLight ? "text-ivory-50" : "text-olive-950";

  // Dedicated Dental Clinic Emblem:
  // An organic synthesis of a modern tooth silhouette integrated with an olive branch and golden olive accent
  const LogoMark = (
    <div
      className={`relative flex items-center justify-center flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-transform duration-300 group-hover:scale-105 ${
        isLight
          ? "bg-white/10 ring-1 ring-white/20"
          : "bg-olive-900/[0.04] ring-1 ring-olive-900/[0.12] shadow-sm"
      }`}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 sm:w-6.5 sm:h-6.5"
        aria-hidden="true"
      >
        {/* Soft background aura */}
        <circle
          cx="24"
          cy="24"
          r="21"
          fill={isLight ? "rgba(255, 255, 255, 0.05)" : "rgba(75, 100, 52, 0.08)"}
        />

        {/* The Tooth Contour - Modern, gentle restorative profile */}
        <path
          d="M17 15C13.5 15 11 18.5 11 23C11 28.5 13.5 35 17 37C18.8 38 20.5 36 21.5 32C22.2 29.5 23 27 24 27C25 27 25.8 29.5 26.5 32C27.5 36 29.2 38 31 37C34.5 35 37 28.5 37 23C37 18.5 34.5 15 31 15C28 15 25.5 17 24 18.5C22.5 17 20 15 17 15Z"
          fill={toothPrimary}
          opacity={isLight ? 0.95 : 0.9}
        />

        {/* Primary Olive Leaf Flourish (Sweeping from crown) */}
        <path
          d="M23.5 19C24 13 28 8.5 34 8C34.5 11.5 32 15.5 27 18C25.5 18.8 24.2 19 23.5 19Z"
          fill={leafGreen}
        />

        {/* Secondary Olive Leaf */}
        <path
          d="M27.5 15C30.5 12 35.5 11.5 38 13C37.5 15.8 34.2 18 31 17.5C29.5 17.2 28.2 16.2 27.5 15Z"
          fill={oliveGold}
          opacity="0.9"
        />

        {/* Small Golden Olive Fruit */}
        <circle cx="28.5" cy="11.5" r="2.2" fill={oliveGold} />

        {/* Inner Gentle Enamel Arc / Smile Line */}
        <path
          d="M18 24C20.5 27 27.5 27 30 24"
          stroke={isLight ? "#1C2713" : "#FDFBF7"}
          strokeWidth="1.6"
          strokeLinecap="round"
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
        aria-label="Olive Dental Care Homepage"
      >
        {LogoMark}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group select-none min-w-0 ${className}`}
      aria-label="Olive Dental Care Homepage"
    >
      {LogoMark}
      <span
        className={`font-serif text-[16px] sm:text-[18px] md:text-[19px] font-semibold tracking-tight whitespace-nowrap leading-none transition-colors duration-200 ${textColor}`}
      >
        Olive Dental Care
      </span>
    </Link>
  );
};
