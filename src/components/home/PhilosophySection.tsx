import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { DoppelrandCard } from "../ui/DoppelrandCard";
import { Button } from "../ui/Button";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Heart,
  Eye,
  FileCheck,
} from "lucide-react";

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-ivory-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Architectural Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-[2.5rem] p-2 bg-olive-900/[0.04] ring-1 ring-olive-900/[0.08] shadow-diffusion-lg">
              <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden bg-ivory-100 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
                  alt="Doctor consulting with patient using high-magnification intraoral visuals at Olive Dental Care"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center filter saturate-[0.92]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-charcoal-900">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-600 block mb-1">
                    OUR CORE PRINCIPLE
                  </span>
                  <h4 className="font-serif text-lg font-medium text-olive-950">
                    Patient Autonomy & Clear Choices
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                    We educate and guide. You always make the final informed decision for your health.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <Badge variant="olive">HUMAN-CENTRED CLINICAL ETHOS</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-950 font-medium tracking-tight leading-[1.08]">
                Where Clinical Modernism Meets Genuine Human Empathy
              </h2>
            </div>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans font-light">
              Dental care should never feel intimidating or transactional. At Olive Dental Care, we designed every touchpoint—from our calming interior acoustics to our gentle diagnostic discussions—to nurture trust and eliminate clinical anxiety.
            </p>

            {/* 3 Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-5 rounded-2xl bg-ivory-100/70 border border-ivory-200/80 space-y-2">
                <div className="w-8 h-8 rounded-full bg-olive-900/10 text-olive-800 flex items-center justify-center">
                  <Eye className="w-4 h-4 text-champagne-700" />
                </div>
                <h4 className="font-serif text-base font-semibold text-olive-950">
                  Intraoral Visuals
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  See what we see. We photograph and project your teeth on high-resolution screens so you understand the underlying condition clearly.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-ivory-100/70 border border-ivory-200/80 space-y-2">
                <div className="w-8 h-8 rounded-full bg-olive-900/10 text-olive-800 flex items-center justify-center">
                  <FileCheck className="w-4 h-4 text-champagne-700" />
                </div>
                <h4 className="font-serif text-base font-semibold text-olive-950">
                  Transparent Treatment Plans
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  No hidden fees or unexpected procedures. We discuss all costs, clinical alternatives, and timelines upfront.
                </p>
              </div>
            </div>

            {/* Quote Band */}
            <div className="p-5 rounded-2xl bg-olive-900/[0.03] border-l-2 border-champagne-500 text-xs sm:text-sm text-charcoal-700 font-sans italic leading-relaxed">
              &ldquo;The foundation of good dentistry is listening. When patients understand why a treatment is recommended, anxiety disappears and healthy habits thrive.&rdquo;
              <span className="block not-italic font-mono text-[11px] text-olive-900 font-semibold mt-2">
                — Olive Dental Care Clinical Philosophy
              </span>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Button
                href="/about"
                variant="primary"
                size="md"
                withArrow
              >
                Read Our Complete Story
              </Button>
              <Button
                href="/contact#book"
                variant="outline"
                size="md"
              >
                Meet the Team
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
