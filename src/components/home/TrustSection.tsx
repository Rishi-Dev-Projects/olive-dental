import React from "react";
import { CLINIC_INFO } from "@/data/clinic";
import { REVIEW_METRICS } from "@/data/reviews";
import { DoppelrandCard } from "../ui/DoppelrandCard";
import { Badge } from "../ui/Badge";
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  HeartHandshake,
  Microscope,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-champagne-600" />,
      title: "Complete Diagnostic Transparency",
      description:
        "Every clinical observation is demonstrated to you using high-magnification intraoral visuals. We discuss options, timelines, and costs openly before any procedure begins.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-champagne-600" />,
      title: "Gentle & Anxiety-Free Touch",
      description:
        "From modern topical numbing gels to slow-delivery local anesthesia and peaceful pacing, we eliminate dental anxiety so every appointment is comfortable.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-champagne-600" />,
      title: "Hospital-Grade Sterilization Protocols",
      description:
        "Multi-cycle Class-B autoclaving, ultrasonic chemical immersion, and pre-sealed sterile instrument pouches opened strictly in your presence.",
    },
    {
      icon: <Microscope className="w-5 h-5 text-champagne-600" />,
      title: "Conservative Biology-First Approach",
      description:
        "We believe in preserving authentic natural tooth enamel, vital pulp tissue, and original bone structure whenever clinically possible rather than unnecessary cuts.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-ivory-100/60 border-y border-ivory-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 md:pb-20">
          <div className="max-w-2xl">
            <div className="mb-4">
              <Badge variant="olive">PATIENT CONFIDENCE & CREDIBILITY</Badge>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-950 font-medium tracking-tight leading-[1.1]">
              Rooted in Clinical Precision. Defined by Human Care.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans">
              Patients across Bardoli and South Gujarat trust Olive Dental Care for honest advice, meticulous hygiene, and treatment plans crafted for lifelong oral health.
            </p>
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Main Card: Google Business Rating & Sentiment Box (5 cols) */}
          <div className="lg:col-span-5">
            <DoppelrandCard
              outerRadius="2.5rem"
              tone="olive-dark"
              outerPadding="md"
              className="h-full flex flex-col justify-between"
              innerClassName="!p-8 sm:!p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-champagne-400">
                    VERIFIED GOOGLE REVIEWS
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs text-ivory-100 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Public Listing
                  </span>
                </div>

                <div className="py-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-6xl sm:text-7xl font-bold tracking-tight text-ivory-50">
                      5.0
                    </span>
                    <div className="flex flex-col">
                      <div className="flex text-amber-400 gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-mono text-champagne-300">
                        {REVIEW_METRICS.displayCount}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-ivory-200/85 mt-4 leading-relaxed font-light">
                    Every review reflects genuine patient feedback on gentle procedures, clear explanations by Dr. Himanshu Shah, and pristine clinical cleanliness at Platinum Plaza.
                  </p>
                </div>

                {/* Sentiment Attribute Breakdown */}
                <div className="space-y-3 pt-6 border-t border-white/10 text-xs font-mono">
                  {REVIEW_METRICS.attributes.map((attr) => (
                    <div key={attr.label} className="flex items-center justify-between text-ivory-200/80">
                      <span>{attr.label}</span>
                      <span className="text-champagne-300 font-semibold">{attr.rating}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={CLINIC_INFO.social.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full bg-white/10 border border-white/15 text-xs text-ivory-50 hover:bg-white/20 transition-all group"
                >
                  <span>Read Public Patient Reviews on Google</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </DoppelrandCard>
          </div>

          {/* Right Grid: 4 Clinical Pillars (7 cols, 2x2 grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => (
              <DoppelrandCard
                key={pillar.title}
                outerRadius="2rem"
                tone="ivory"
                outerPadding="sm"
                hoverEffect
                className="h-full"
                innerClassName="!p-6 sm:!p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-olive-900/5 border border-olive-900/10 flex items-center justify-center mb-5">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-olive-950 mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </DoppelrandCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
