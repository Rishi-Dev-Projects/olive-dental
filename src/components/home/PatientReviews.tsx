import React from "react";
import { REVIEWS, REVIEW_METRICS } from "@/data/reviews";
import { CLINIC_INFO } from "@/data/clinic";
import { DoppelrandCard } from "../ui/DoppelrandCard";
import { Badge } from "../ui/Badge";
import { Star, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const PatientReviews: React.FC = () => {
  return (
    <section className="py-16 md:py-28 bg-ivory-100/60 border-t border-ivory-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 md:pb-16">
          <div className="max-w-2xl">
            <div className="mb-3">
              <Badge variant="olive">AUTHENTIC PATIENT SENTIMENT</Badge>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-950 font-medium tracking-tight leading-[1.08]">
              Stories of Comfort, Gentle Care & Renewed Confidence
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans">
              Real feedback from patients who visited Olive Dental Care at Platinum Plaza Bardoli. We take pride in our 5.0 Google Business score earned through genuine care.
            </p>
          </div>
        </div>

        {/* 2-Column Asymmetric Grid - Normal natural flow, no sticky overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Overall Credibility Score Box (4 cols) */}
          <div className="lg:col-span-4 w-full">
            <DoppelrandCard
              outerRadius="2rem"
              tone="olive-dark"
              outerPadding="sm"
              innerClassName="!p-6 sm:!p-7 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-300 font-medium">
                  GOOGLE VERIFIED
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  Live Reviews
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-ivory-50">
                    5.0
                  </span>
                  <span className="text-sm font-mono text-champagne-300">/ 5.0</span>
                </div>
                <div className="flex text-amber-400 gap-1 my-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-mono text-ivory-200/80">
                  Based on {REVIEW_METRICS.displayCount} on Google Business
                </p>
              </div>

              <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed font-sans font-light">
                Patients consistently highlight Dr. Himanshu’s calm explanations, painless procedures, and the clinic’s hospital-grade hygiene standards.
              </p>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.social.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-full bg-champagne-500 text-charcoal-950 text-xs font-medium hover:bg-champagne-400 transition-colors"
                >
                  <span>Verify on Google Reviews</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </DoppelrandCard>
          </div>

          {/* Right Column: Staggered Verified Patient Review Cards (8 cols) */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-5">
            {REVIEWS.map((rev) => (
              <DoppelrandCard
                key={rev.id}
                outerRadius="1.5rem"
                tone="white"
                outerPadding="sm"
                hoverEffect
                innerClassName="!p-5 sm:!p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-olive-900/10 text-olive-950 font-serif font-semibold text-xs flex items-center justify-center">
                      {rev.author[0]}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm sm:text-base font-semibold text-olive-950 leading-tight">
                        {rev.author}
                      </h4>
                      <span className="text-[11px] font-sans text-charcoal-500">
                        {rev.treatmentType}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-olive-50 text-olive-800 border border-olive-200/60">
                      {rev.highlightTag}
                    </span>
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans italic">
                  &ldquo;{rev.reviewText}&rdquo;
                </p>

                <div className="mt-3 pt-2.5 flex items-center justify-between text-[11px] font-mono text-charcoal-400 border-t border-slate-50">
                  <span>Source: {rev.source}</span>
                  <span className="text-emerald-700 font-sans font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Patient
                  </span>
                </div>
              </DoppelrandCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
