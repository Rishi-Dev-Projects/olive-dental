import React from "react";

interface DoppelrandCardProps {
  children: React.ReactNode;
  className?: string;
  outerClassName?: string;
  innerClassName?: string;
  tone?: "ivory" | "white" | "olive-dark" | "sage-subtle";
  outerPadding?: "sm" | "md" | "lg";
  outerRadius?: "2rem" | "2.5rem" | "1.5rem";
  hoverEffect?: boolean;
}

export const DoppelrandCard: React.FC<DoppelrandCardProps> = ({
  children,
  className = "",
  outerClassName = "",
  innerClassName = "",
  tone = "ivory",
  outerPadding = "md",
  outerRadius = "2rem",
  hoverEffect = false,
}) => {
  const paddingMap = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
  };

  const radiusMap = {
    "1.5rem": {
      outer: "rounded-[1.5rem]",
      inner: "rounded-[calc(1.5rem-0.375rem)]",
    },
    "2rem": {
      outer: "rounded-[2rem]",
      inner: "rounded-[calc(2rem-0.5rem)]",
    },
    "2.5rem": {
      outer: "rounded-[2.5rem]",
      inner: "rounded-[calc(2.5rem-0.625rem)]",
    },
  };

  const toneMap = {
    ivory: {
      outer:
        "bg-olive-900/[0.03] ring-1 ring-olive-900/[0.08] border border-olive-900/[0.04]",
      inner:
        "bg-ivory-50/90 text-charcoal-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_32px_-12px_rgba(28,39,19,0.06)] border border-ivory-200/60",
    },
    white: {
      outer:
        "bg-olive-900/[0.02] ring-1 ring-charcoal-900/[0.06] border border-charcoal-900/[0.03]",
      inner:
        "bg-white text-charcoal-900 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_15px_35px_-15px_rgba(28,39,19,0.05)] border border-slate-200/50",
    },
    "olive-dark": {
      outer:
        "bg-olive-950/90 ring-1 ring-white/10 border border-white/5",
      inner:
        "bg-olive-900 text-ivory-50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_20px_40px_-15px_rgba(0,0,0,0.4)] border border-olive-800/60",
    },
    "sage-subtle": {
      outer:
        "bg-sage-500/10 ring-1 ring-sage-500/20 border border-sage-500/10",
      inner:
        "bg-ivory-50 text-charcoal-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_25px_-10px_rgba(75,98,66,0.08)] border border-sage-200/70",
    },
  };

  const { outer: outerRad, inner: innerRad } = radiusMap[outerRadius];
  const selectedTone = toneMap[tone];

  return (
    <div
      className={`group transition-all duration-500 ${outerRad} ${paddingMap[outerPadding]} ${selectedTone.outer} ${
        hoverEffect ? "hover:scale-[1.008] hover:shadow-diffusion-lg" : ""
      } ${outerClassName} ${className}`}
    >
      <div
        className={`w-full h-full p-6 md:p-8 transition-colors duration-500 ${innerRad} ${selectedTone.inner} ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};
