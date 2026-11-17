import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { TREATMENTS } from "@/data/treatments";
import { Badge } from "@/components/ui/Badge";
import { DoppelrandCard } from "@/components/ui/DoppelrandCard";
import { Button } from "@/components/ui/Button";
import { Clock, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Treatments in Bardoli | Olive Dental Care",
  description:
    "Explore comprehensive dental treatments at Olive Dental Care Bardoli: Full Mouth Rehabilitation, Root Canal Treatment, Dental Crowns, Cosmetic Dentistry, and Gentle Gum Care.",
  alternates: {
    canonical: "https://olivedentalcarebardoli.com/treatments",
  },
};

export default function TreatmentsPage() {
  return (
    <div className="bg-ivory-50 pt-8 sm:pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 pb-14 md:pb-20">
          <Badge variant="olive">CLINICAL SERVICES & TREATMENTS</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-olive-950 leading-[1.06]">
            Comprehensive Dental Services in Bardoli
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-sans font-light">
            Every procedure at Olive Dental Care is planned with conservative biology, transparent communication, and patient comfort as our guiding standards.
          </p>
        </div>

        {/* Treatment Directory List */}
        <div className="space-y-8">
          {TREATMENTS.map((treatment, index) => (
            <div
              key={treatment.id}
              id={treatment.slug}
              className="rounded-[2.5rem] p-2 bg-olive-900/[0.03] ring-1 ring-olive-900/[0.08]"
            >
              <div className="rounded-[calc(2.5rem-0.5rem)] bg-white p-6 sm:p-10 border border-slate-200/60 shadow-diffusion">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Title, Subtitle, Overview (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-700 font-semibold px-3 py-1 rounded-full bg-champagne-500/10">
                        {treatment.category}
                      </span>
                      <span className="text-xs font-mono text-charcoal-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-champagne-600" />
                        {treatment.duration}
                      </span>
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-medium text-olive-950">
                        {treatment.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-champagne-700 font-sans mt-0.5 font-medium">
                        {treatment.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                      {treatment.fullOverview}
                    </p>

                    {/* Common Indications */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-700 font-semibold block mb-2">
                        Common Indications & Patient Concerns:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {treatment.indications.map((ind, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-charcoal-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-olive-700 mt-1.5 flex-shrink-0" />
                            <span>{ind}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Benefits, Action Cluster (5 cols) */}
                  <div className="lg:col-span-5 bg-ivory-50/80 rounded-2xl p-6 border border-ivory-200/80 space-y-5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-olive-900 font-semibold block">
                      KEY CLINICAL BENEFITS
                    </span>

                    <ul className="space-y-2.5">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-charcoal-700 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-ivory-300/60 flex flex-col sm:flex-row gap-3">
                      <Button
                        href={`/treatments/${treatment.slug}`}
                        variant="primary"
                        size="sm"
                        withArrow
                        className="w-full text-xs"
                      >
                        Read Deep-Dive Guide
                      </Button>
                      <Button
                        href={`/contact?treatment=${encodeURIComponent(treatment.title)}#book`}
                        variant="outline"
                        size="sm"
                        className="w-full text-xs"
                      >
                        Enquire for Visit
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Disclaimer Callout */}
        <div className="mt-16 p-8 rounded-[2rem] bg-olive-950 text-ivory-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-400">
              CLINICAL INTEGRITY
            </span>
            <h3 className="font-serif text-2xl font-medium">
              Every Patient Receives an Individualized Clinical Assessment
            </h3>
            <p className="text-xs text-ivory-200/80 leading-relaxed font-sans font-light">
              We do not prescribe one-size-fits-all treatments. Suitability, procedure duration, and customized care options are finalized following a personal examination by Dr. Himanshu Shah.
            </p>
          </div>
          <Button
            href="/contact#book"
            variant="gold"
            size="lg"
            withArrow
            className="flex-shrink-0"
          >
            Schedule Assessment
          </Button>
        </div>

      </div>
    </div>
  );
}
