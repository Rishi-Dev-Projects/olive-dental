"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TREATMENTS, TreatmentItem } from "@/data/treatments";
import { Badge } from "../ui/Badge";
import { DoppelrandCard } from "../ui/DoppelrandCard";
import { ArrowUpRight, Clock, ShieldCheck, Check } from "lucide-react";

export const TreatmentDirectory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Rehabilitation & Surgery",
    "Cosmetics & Aesthetics",
    "Preventive & General",
    "Specialized Care",
  ];

  const filteredTreatments =
    selectedCategory === "All"
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === selectedCategory);

  return (
    <section className="py-20 md:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 md:pb-16">
          <div className="max-w-2xl">
            <div className="mb-4">
              <Badge variant="olive">CLINICAL EXCELLENCE DIRECTORY</Badge>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-950 font-medium tracking-tight leading-[1.08]">
              Comprehensive Care for Lifelong Dental Health
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans">
              Each clinical service is delivered with conservative techniques, transparent diagnostic guidance, and biocompatible materials.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-olive-900 text-ivory-50 shadow-sm"
                  : "bg-white text-charcoal-700 hover:text-olive-950 border border-slate-200/80 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Treatment Grid (2 unequal columns: 7 and 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment, index) => {
            const isFeatured = treatment.isFeatured;
            return (
              <div
                key={treatment.id}
                className={`flex flex-col ${
                  isFeatured && index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <DoppelrandCard
                  outerRadius="2rem"
                  tone={isFeatured && index === 0 ? "olive-dark" : "white"}
                  outerPadding="sm"
                  hoverEffect
                  className="h-full flex flex-col justify-between"
                  innerClassName={`!p-7 sm:!p-8 flex flex-col justify-between h-full ${
                    isFeatured && index === 0 ? "" : "bg-white"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-[0.2em] ${
                          isFeatured && index === 0
                            ? "text-champagne-300"
                            : "text-champagne-700 font-semibold"
                        }`}
                      >
                        {treatment.category}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full ${
                          isFeatured && index === 0
                            ? "bg-white/10 text-ivory-100"
                            : "bg-olive-900/5 text-charcoal-600"
                        }`}
                      >
                        <Clock className="w-3 h-3 text-champagne-500" />
                        {treatment.duration}
                      </span>
                    </div>

                    <div>
                      <h3
                        className={`font-serif text-xl sm:text-2xl font-medium tracking-tight mb-2 ${
                          isFeatured && index === 0
                            ? "text-ivory-50"
                            : "text-olive-950"
                        }`}
                      >
                        {treatment.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm leading-relaxed font-sans ${
                          isFeatured && index === 0
                            ? "text-ivory-200/80"
                            : "text-charcoal-600"
                        }`}
                      >
                        {treatment.shortDescription}
                      </p>
                    </div>

                    {/* Indications Preview */}
                    <div className="pt-2">
                      <span
                        className={`text-[10px] uppercase font-mono tracking-wider block mb-2 ${
                          isFeatured && index === 0
                            ? "text-ivory-300/60"
                            : "text-charcoal-400"
                        }`}
                      >
                        Common Indications:
                      </span>
                      <ul className="space-y-1.5">
                        {treatment.indications.slice(0, 2).map((ind, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-xs ${
                              isFeatured && index === 0
                                ? "text-ivory-200/90"
                                : "text-charcoal-700"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                                isFeatured && index === 0
                                  ? "bg-champagne-400"
                                  : "bg-olive-600"
                              }`}
                            />
                            <span className="line-clamp-1">{ind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className={`inline-flex items-center gap-1.5 text-xs font-mono tracking-wider transition-colors ${
                        isFeatured && index === 0
                          ? "text-champagne-300 hover:text-white"
                          : "text-olive-900 font-semibold hover:text-olive-700"
                      }`}
                    >
                      <span>CLINICAL OVERVIEW</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/contact?treatment=${encodeURIComponent(treatment.title)}#book`}
                      className={`text-xs px-3.5 py-1.5 rounded-full font-sans transition-colors ${
                        isFeatured && index === 0
                          ? "bg-white/10 hover:bg-white/20 text-ivory-100"
                          : "bg-ivory-100 hover:bg-ivory-200 text-charcoal-800"
                      }`}
                    >
                      Enquire
                    </Link>
                  </div>
                </DoppelrandCard>
              </div>
            );
          })}
        </div>

        {/* Informative Note on Clinic Confirmation */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-charcoal-600">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-olive-900/5 text-olive-800 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span>
              <strong>Clinical Examination First:</strong> Treatment suitability, precise step timelines, and pricing depend entirely on individualized clinical diagnosis by Dr. Himanshu Shah.
            </span>
          </div>
          <Link
            href="/contact#book"
            className="text-olive-800 hover:text-olive-950 font-semibold underline flex-shrink-0 font-sans"
          >
            Schedule a Diagnostic Assessment →
          </Link>
        </div>

      </div>
    </section>
  );
};
