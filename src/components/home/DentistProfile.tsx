import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinic";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { DoppelrandCard } from "../ui/DoppelrandCard";
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export const DentistProfile: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual: Editorial Portrait Composition (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-[2.5rem] p-2 bg-olive-900/[0.04] ring-1 ring-olive-900/[0.08] shadow-diffusion-lg">
              <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden bg-ivory-100 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80"
                  alt="Dr. Himanshu Shah - Lead Dental Surgeon at Olive Dental Care Bardoli"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-top filter saturate-[0.92]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-transparent to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-charcoal-900">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-600 block mb-0.5">
                    PRACTICE LEAD
                  </span>
                  <h4 className="font-serif text-xl font-medium text-olive-950">
                    Dr. Himanshu Shah
                  </h4>
                  <p className="text-xs text-charcoal-500 font-sans mt-0.5">
                    Lead Dental Surgeon & Clinical Director
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Philosophy & Practice Commitment (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <Badge variant="olive">CLINICAL LEADERSHIP & PHILOSOPHY</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-950 font-medium tracking-tight leading-[1.08]">
                Dentistry Guided by Empathy, Clarity & Unhurried Care
              </h2>
            </div>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-sans font-light">
              At Olive Dental Care, Dr. Himanshu Shah approaches every consultation with a fundamental conviction: <em>patients should feel heard, respected, and completely comfortable before a single dental instrument is lifted.</em>
            </p>

            {/* Core Practitioner Commitments */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-olive-900/10 text-olive-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-olive-700" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-olive-950">
                    Transparent Step-by-Step Guidance
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-0.5 leading-relaxed font-sans">
                    You are never rushed into sudden treatments. We show you exactly what is happening in your mouth and explain all valid treatment options.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-olive-900/10 text-olive-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-olive-700" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-olive-950">
                    Painless & Anxiety-Free Protocols
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-0.5 leading-relaxed font-sans">
                    We utilize gentle topical gels and modern local anesthesia techniques so that even complex procedures feel calm and manageable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-olive-900/10 text-olive-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-olive-700" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-olive-950">
                    Dedicated Appointment Punctuality
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-0.5 leading-relaxed font-sans">
                    By seeing patients strictly through planned appointment windows, we ensure you do not spend hours waiting in a crowded waiting lounge.
                  </p>
                </div>
              </div>
            </div>

            {/* Consultation Note Callout */}
            <div className="p-4 rounded-2xl bg-ivory-100/80 border border-ivory-300/80 text-xs text-charcoal-700 font-sans flex items-start gap-3">
              <Calendar className="w-4 h-4 text-champagne-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Appointment Policy:</strong> To maintain strict sterilization cycles between patients and guarantee dedicated consultation time, we recommend scheduling your visit in advance.
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/contact#book"
                variant="primary"
                size="md"
                withArrow
              >
                Schedule Consultation
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="md"
              >
                Learn More About Clinic
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
