import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { DoppelrandCard } from "../ui/DoppelrandCard";
import { Sparkles, Eye, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export const SmileMakeoverFeature: React.FC = () => {
  const aestheticTreatments = [
    {
      title: "Handcrafted Porcelain Veneers",
      desc: "Ultra-thin, custom-layered ceramic shells bonded to front teeth to refine spacing, chips, or stubborn discoloration while conserving natural enamel.",
      tag: "Permanent Aesthetics",
    },
    {
      title: "Biomimetic Composite Bonding",
      desc: "Artistic, single-visit tooth sculpting to seamlessly close gaps (diastema) and repair chipped enamel edges without removing healthy tooth structure.",
      tag: "Single Appointment",
    },
    {
      title: "Supervised Enamel-Safe Whitening",
      desc: "pH-buffered clinical brightening that lifts deep coffee, tea, and age chromogens without causing permanent tooth sensitivity or enamel erosion.",
      tag: "Radiant Refresh",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-ivory-100/50 border-t border-ivory-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 md:pb-20">
          <div className="max-w-2xl">
            <div className="mb-4">
              <Badge variant="champagne" icon={<Sparkles className="w-3.5 h-3.5 text-champagne-600" />}>
                ORGANIC AESTHETIC DENTISTRY
              </Badge>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-950 font-medium tracking-tight leading-[1.08]">
              Thoughtful Smile Design. Beautifully Natural Results.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans">
              We reject unnatural, chalky white veneers. Our aesthetic philosophy respects your individual lip line, skin complexion, and facial proportions to create a harmonious smile that looks undeniably authentic.
            </p>
          </div>
        </div>

        {/* 2-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3 Curated Aesthetic Solutions (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {aestheticTreatments.map((item, index) => (
              <DoppelrandCard
                key={item.title}
                outerRadius="2rem"
                tone="ivory"
                outerPadding="sm"
                hoverEffect
                innerClassName="!p-6 sm:!p-7 flex flex-col justify-between"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-olive-950 font-medium">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-champagne-700 font-semibold px-2.5 py-0.5 rounded-full bg-champagne-500/10 self-start sm:self-auto">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-olive-900 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-champagne-600" />
                  <span>Conservative enamel preservation guaranteed</span>
                </div>
              </DoppelrandCard>
            ))}

            <div className="pt-4 flex items-center gap-4">
              <Button
                href="/treatments/smile-makeover"
                variant="primary"
                size="md"
                withArrow
              >
                Explore Smile Makeover Guide
              </Button>
              <Button
                href="/contact?treatment=Cosmetic+Smile+Makeover#book"
                variant="outline"
                size="md"
              >
                Book Aesthetic Consultation
              </Button>
            </div>
          </div>

          {/* Right Column: Editorial Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-[2.5rem] p-2 bg-olive-900/[0.04] ring-1 ring-olive-900/[0.08] shadow-diffusion-lg">
              <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden bg-ivory-100 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
                  alt="Natural smile design and aesthetic tooth shade calibration at Olive Dental Care Bardoli"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center filter saturate-[0.95]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/85 via-olive-950/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-charcoal-900">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-600 block mb-1">
                    ETHICAL AESTHETICS
                  </span>
                  <h4 className="font-serif text-lg font-medium text-olive-950">
                    No False Before-and-After Claims
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                    We do not publish artificial AI transformations. Every patient is unique, and all treatment plans are customized after clinical examination.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
