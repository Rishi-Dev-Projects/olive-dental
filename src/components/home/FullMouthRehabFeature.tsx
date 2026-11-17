import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  Sparkles,
  Layers,
  Activity,
  CheckCircle2,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const FullMouthRehabFeature: React.FC = () => {
  const roadmapSteps = [
    {
      phase: "Phase 01",
      title: "Comprehensive Occlusal Diagnostics",
      desc: "Detailed photographic series, digital face-bow records, and studying jaw joint (TMJ) balance.",
    },
    {
      phase: "Phase 02",
      title: "Diagnostic Wax-Up & Mockup Trial",
      desc: "Previewing new bite height and tooth length in your mouth before any permanent work is started.",
    },
    {
      phase: "Phase 03",
      title: "Foundational Restorations & Health",
      desc: "Stabilizing periodontal gums, resolving active tooth decay, and gentle endodontic care as needed.",
    },
    {
      phase: "Phase 04",
      title: "Precision Zirconia & Ceramic Placement",
      desc: "Bonding custom-milled monolithic restorations calibrated to your balanced chewing movement.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-olive-950 text-ivory-50 relative overflow-hidden">
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-olive-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Architecture (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-[2.5rem] p-2 bg-white/5 ring-1 ring-white/10 shadow-2xl">
              <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden bg-olive-900 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision dental operatory and restoration equipment at Olive Dental Care"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center filter brightness-[0.92] contrast-[1.05]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-olive-950/30 to-transparent" />

                {/* Floating Bottom Info Pill */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-olive-900/90 backdrop-blur-md border border-white/15">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-300 block mb-1">
                    CLINICAL ARCHITECTURE
                  </span>
                  <h4 className="font-serif text-lg font-medium text-ivory-50">
                    Occlusal Balance & Chewing Harmony
                  </h4>
                  <p className="text-xs text-ivory-200/80 mt-1 leading-relaxed">
                    Personalized restoration for patients with collapsed bite, extensive tooth wear, or multiple broken teeth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content & Roadmap (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <Badge variant="champagne" icon={<Layers className="w-3.5 h-3.5 text-champagne-600" />}>
                SPECIALIZED ADVANCED REHABILITATION
              </Badge>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.08] text-ivory-50">
                Full Mouth Rehabilitation: Rebuilding Function, Comfort & Balance
              </h2>
              <p className="text-sm sm:text-base text-ivory-200/80 leading-relaxed font-sans font-light">
                When years of nocturnal teeth grinding, acid erosion, or multiple missing teeth cause your bite to collapse, repairing teeth one-by-one often results in recurring breakage. Full Mouth Rehabilitation is a cohesive, scientifically planned transformation that re-establishes your natural chewing height and facial balance.
              </p>
            </div>

            {/* Phased Roadmap Timeline */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-champagne-400 block mb-3">
                THE 4-PHASE CLINICAL PROTOCOL
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {roadmapSteps.map((item) => (
                  <div
                    key={item.phase}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono text-champagne-400 uppercase tracking-wider">
                        {item.phase}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-medium text-ivory-50 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-ivory-200/70 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/treatments/full-mouth-rehabilitation"
                variant="gold"
                size="md"
                withArrow
              >
                Read Comprehensive Guide
              </Button>
              <Button
                href="/contact?treatment=Full+Mouth+Rehabilitation#book"
                variant="outline"
                size="md"
                className="!text-ivory-50 !border-white/20 hover:!bg-white/10"
              >
                Schedule Bite Evaluation
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
