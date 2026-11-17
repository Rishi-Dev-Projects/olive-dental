import React from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/data/clinic";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
  Calendar,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92dvh] flex items-center pt-8 sm:pt-12 pb-16 md:pb-24 overflow-hidden bg-ivory-50">
      {/* Background Architectural Subtle Accents */}
      <div className="absolute top-0 right-0 w-[55vw] h-[75vh] bg-gradient-to-b from-olive-100/35 via-olive-50/20 to-transparent rounded-bl-[8rem] pointer-events-none -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-champagne-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Conversion Hierarchy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            
            {/* Practice Verification Tag */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="olive" icon={<Sparkles className="w-3.5 h-3.5 text-champagne-600" />}>
                BARDOLI’S ACCLAIMED DENTAL STUDIO
              </Badge>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-mono tracking-wider bg-white border border-slate-200/80 text-charcoal-700 shadow-sm">
                <span className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="font-semibold text-charcoal-900">5.0</span>
                <span className="text-charcoal-400">(190+ Google Reviews)</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-tight text-olive-950 leading-[1.06]">
                Where Every Smile Finds Its{" "}
                <span className="italic font-normal text-olive-800 underline decoration-champagne-400/60 decoration-wavy decoration-1 underline-offset-8">
                  Confidence.
                </span>
              </h1>
              <p className="font-sans text-base sm:text-lg md:text-xl text-charcoal-600 leading-relaxed max-w-2xl font-light">
                {CLINIC_INFO.subheadline}
              </p>
            </div>

            {/* Primary & Secondary Action Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <Button
                href="/contact#book"
                variant="primary"
                size="lg"
                withArrow
                className="w-full sm:w-auto shadow-diffusion"
              >
                Book an Appointment
              </Button>
              <Button
                href="/treatments"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Treatments
              </Button>
            </div>

            {/* Rapid Trust Verification Strip */}
            <div className="pt-6 border-t border-ivory-200/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-charcoal-700">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-olive-900/5 text-olive-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-olive-950 block">Hospital-Grade</span>
                  <span className="text-charcoal-500 text-[11.5px]">Strict multi-stage sterilization</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-olive-900/5 text-olive-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-champagne-600" />
                </div>
                <div>
                  <span className="font-semibold text-olive-950 block">Platinum Plaza</span>
                  <span className="text-charcoal-500 text-[11.5px]">Above Prime Bank, Bardoli</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-olive-900/5 text-olive-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-olive-950 block">Mon – Sat: 9 AM–8 PM</span>
                  <span className="text-charcoal-500 text-[11.5px]">Unhurried consultations</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Double-Bezel Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Outer Machine Bezel Wrapper */}
            <div className="rounded-[2.5rem] p-2 bg-olive-900/[0.04] ring-1 ring-olive-900/[0.08] shadow-diffusion-lg">
              <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden bg-ivory-100 aspect-[4/5] sm:aspect-[4/4.8]">
                {/* High-Resolution Editorial Architectural Photography */}
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                  alt="Tranquil, modern consultation environment at Olive Dental Care Bardoli"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center filter saturate-[0.95]"
                />
                
                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-olive-950/20 to-transparent" />

                {/* Floating Top Status Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-[11px] font-mono text-olive-950 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>OPEN TODAY UNTIL 8:00 PM</span>
                  </div>
                </div>

                {/* Floating Bottom Card Over Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-charcoal-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-champagne-600 block">
                        CLINICAL ETHOS
                      </span>
                      <h4 className="font-serif text-lg font-medium text-olive-950">
                        Gentle, Unhurried Dentistry
                      </h4>
                      <p className="text-xs text-charcoal-600 mt-0.5">
                        Transparent diagnosis & conservative tooth preservation.
                      </p>
                    </div>
                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="w-10 h-10 rounded-full bg-olive-900 text-ivory-50 flex items-center justify-center flex-shrink-0 hover:bg-olive-800 transition-colors shadow-sm"
                      aria-label="Direct Phone Consultation"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Accent Floating Badge Offset on Desktop */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-diffusion items-center gap-3.5 z-10 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-champagne-500/15 border border-champagne-500/30 flex items-center justify-center flex-shrink-0 text-champagne-700">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-sm font-semibold text-olive-950">
                  Full Mouth Rehabilitation
                </p>
                <p className="text-[11px] text-charcoal-500">
                  Comprehensive bite & functional reconstruction
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
