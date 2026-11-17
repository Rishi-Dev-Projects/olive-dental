import React from "react";
import type { Metadata } from "next";
import { REVIEWS, REVIEW_METRICS } from "@/data/reviews";
import { CLINIC_INFO } from "@/data/clinic";
import { Badge } from "@/components/ui/Badge";
import { DoppelrandCard } from "@/components/ui/DoppelrandCard";
import { Button } from "@/components/ui/Button";
import {
  Star,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Heart,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Reviews & Experiences | 5.0★ Olive Dental Care Bardoli",
  description:
    "Read verified patient reviews for Olive Dental Care Bardoli. Highest rated 5.0★ dental practice on Google praised for gentle treatments, immaculate hygiene, and clear explanations.",
  alternates: {
    canonical: "https://olivedentalcarebardoli.com/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <div className="bg-ivory-50 pt-8 sm:pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 pb-14 md:pb-20">
          <Badge variant="olive">VERIFIED PATIENT SATISFACTION</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-olive-950 leading-[1.06]">
            Genuine Patient Experiences & Reviews
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-sans font-light">
            Every smile story reflects our core commitment: thoughtful, painless dentistry paired with complete medical transparency.
          </p>
        </div>

        {/* Rating Overview Banner */}
        <div className="mb-14 rounded-[2.5rem] p-2 bg-olive-900/[0.04] ring-1 ring-olive-900/[0.08]">
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-white p-8 sm:p-12 border border-slate-200/60 shadow-diffusion grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-champagne-600 font-semibold block">
                OVERALL CLINICAL RATING
              </span>
              <div className="flex items-baseline justify-center md:justify-start gap-3">
                <span className="font-serif text-6xl font-bold text-olive-950">5.0</span>
                <span className="text-sm font-mono text-charcoal-500">out of 5.0</span>
              </div>
              <div className="flex justify-center md:justify-start text-amber-400 gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-mono text-charcoal-500">
                {REVIEW_METRICS.displayCount} on Google Business
              </p>
            </div>

            <div className="md:col-span-5 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-charcoal-700 font-semibold block">
                PATIENT FEEDBACK HIGHLIGHTS
              </span>
              <div className="space-y-2 text-xs font-mono">
                {REVIEW_METRICS.attributes.map((attr) => (
                  <div key={attr.label} className="flex items-center justify-between text-charcoal-700">
                    <span>{attr.label}</span>
                    <span className="font-semibold text-olive-900">{attr.rating}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-3">
              <a
                href={CLINIC_INFO.social.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-olive-900 text-ivory-50 text-xs font-medium hover:bg-olive-800 transition-colors shadow-sm text-center"
              >
                <span>View Google Listing</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Button
                href="/contact#book"
                variant="outline"
                size="sm"
                className="w-full text-xs text-center"
              >
                Book Your Visit
              </Button>
            </div>

          </div>
        </div>

        {/* Detailed Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <DoppelrandCard
              key={rev.id}
              outerRadius="2rem"
              tone="white"
              outerPadding="sm"
              hoverEffect
              innerClassName="!p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-olive-900/10 text-olive-950 font-serif font-bold text-sm flex items-center justify-center">
                      {rev.author[0]}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-olive-950">
                        {rev.author}
                      </h4>
                      <span className="text-[11px] font-sans text-charcoal-500">
                        {rev.treatmentType}
                      </span>
                    </div>
                  </div>

                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-charcoal-700 leading-relaxed font-sans italic mb-6">
                  &ldquo;{rev.reviewText}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-mono text-charcoal-400">
                <span className="text-champagne-800 font-sans font-medium px-2.5 py-0.5 rounded-full bg-champagne-500/10 text-[10.5px]">
                  {rev.highlightTag}
                </span>
                <span className="text-emerald-700 font-sans font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Google Verified
                </span>
              </div>
            </DoppelrandCard>
          ))}
        </div>

      </div>
    </div>
  );
}
