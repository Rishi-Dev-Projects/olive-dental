import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { DoppelrandCard } from "@/components/ui/DoppelrandCard";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/data/clinic";
import {
  ShieldCheck,
  HeartHandshake,
  Microscope,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Olive Dental Care | Dental Clinic in Bardoli",
  description:
    "Learn about Olive Dental Care's patient-first philosophy, hospital-grade sterilization protocols, and gentle dental approach at Platinum Plaza, Sardar Patel Marg, Bardoli.",
  alternates: {
    canonical: "https://olivedentalcarebardoli.com/about",
  },
};

export default function AboutPage() {
  const sterilizationSteps = [
    {
      step: "01",
      title: "Ultrasonic Chemical Decontamination",
      desc: "Immediate immersion in multi-enzymatic disinfectant solutions with ultrasonic sound wave cavitation to dislodge micro-debris.",
    },
    {
      step: "02",
      title: "Instrument Inspection & Packing",
      desc: "Fine inspection under magnification, followed by hermetic sealing in individual medical-grade sterilization pouches with chemical indicators.",
    },
    {
      step: "03",
      title: "Class-B Vacuum Autoclaving",
      desc: "High-pressure fractionated vacuum autoclaving at 134°C, meeting international hospital standards to eliminate 100% of bacterial spores and viruses.",
    },
    {
      step: "04",
      title: "Sterile Pouch Opened In Front of You",
      desc: "Instruments remain completely sterile inside vacuum seals until they are opened in the operatory directly in the patient's presence.",
    },
  ];

  return (
    <div className="bg-ivory-50 pt-8 sm:pt-12 pb-24">
      {/* Editorial Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-3xl space-y-4">
          <Badge variant="olive">PRACTICE STORY & ETHOS</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-olive-950 leading-[1.06]">
            Thoughtful Dental Care, Rooted in Bardoli.
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-sans font-light">
            Olive Dental Care was founded on a simple yet enduring premise: that dentistry should be calm, transparent, and completely centered around the dignity and comfort of the human being in the chair.
          </p>
        </div>

        {/* Hero Architectural Image Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 rounded-[2.5rem] p-2 bg-olive-900/[0.04] ring-1 ring-olive-900/[0.08]">
            <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden bg-ivory-100 aspect-[16/9]">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
                alt="Tranquil consultation environment at Olive Dental Care Bardoli"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center filter saturate-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory-50">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-300 block mb-1">
                  OUR SANCTUARY
                </span>
                <p className="font-serif text-xl sm:text-2xl font-medium">
                  A modern, tranquil clinical environment free from sensory stress.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 rounded-[2.5rem] p-2 bg-olive-900/[0.04] ring-1 ring-olive-900/[0.08]">
            <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden bg-ivory-100 aspect-[4/5] md:aspect-auto md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                alt="Medical-grade sterilization technology at Olive Dental Care"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center filter saturate-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory-50">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-300 block mb-1">
                  UNCOMPROMISING SAFETY
                </span>
                <p className="font-serif text-lg font-medium">
                  Class-B Autoclaves & individual sterile barrier packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Tenets */}
      <section className="py-20 bg-ivory-100/60 border-y border-ivory-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <Badge variant="olive">OUR FOUNDATIONAL TENETS</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl text-olive-950 font-medium tracking-tight mt-3">
              How We Practice Everyday Dentistry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DoppelrandCard
              outerRadius="2rem"
              tone="ivory"
              innerClassName="!p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-olive-900/5 border border-olive-900/10 flex items-center justify-center mb-6 text-champagne-700">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-olive-950 mb-3">
                  1. Deep Listening First
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed font-sans">
                  We believe true diagnosis starts by understanding your personal concerns, past dental fears, and lifestyle priorities. You are never an anonymous chart on a clipboard.
                </p>
              </div>
            </DoppelrandCard>

            <DoppelrandCard
              outerRadius="2rem"
              tone="ivory"
              innerClassName="!p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-olive-900/5 border border-olive-900/10 flex items-center justify-center mb-6 text-champagne-700">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-olive-950 mb-3">
                  2. Biology Over Artificiality
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed font-sans">
                  Whenever a tooth can be saved, restored, or preserved naturally, we choose that path. We practice conservative micro-dentistry rather than aggressive, irreversible cutting.
                </p>
              </div>
            </DoppelrandCard>

            <DoppelrandCard
              outerRadius="2rem"
              tone="ivory"
              innerClassName="!p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-olive-900/5 border border-olive-900/10 flex items-center justify-center mb-6 text-champagne-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-olive-950 mb-3">
                  3. Pure Transparency
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed font-sans">
                  No hidden costs, no unnecessary add-ons. We explain why each step is recommended, share clear visual evidence, and provide itemized estimates before proceeding.
                </p>
              </div>
            </DoppelrandCard>
          </div>
        </div>
      </section>

      {/* Hospital-Grade Sterilization Deep Dive */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="olive">PATIENT SAFETY PROTOCOL</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-950 font-medium tracking-tight leading-[1.08]">
              Our 4-Stage Infection Control Protocol
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans">
              Clinical hygiene is never an afterthought. We implement multi-barrier sterilization protocols matching international hospital guidelines to ensure complete peace of mind for every family member.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 text-xs text-charcoal-600 space-y-1">
              <span className="font-semibold text-olive-950 block">Our Promise:</span>
              <p>Every handpiece, bur, mirror, and probe undergoes computerized vacuum autoclaving between each patient appointment.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {sterilizationSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-5 hover:border-olive-300 transition-colors"
              >
                <span className="text-sm font-mono font-bold text-champagne-700 bg-champagne-500/10 px-3 py-1.5 rounded-xl flex-shrink-0">
                  {step.step}
                </span>
                <div>
                  <h4 className="font-serif text-lg font-medium text-olive-950 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Location & Appointment Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-[2.5rem] p-8 sm:p-12 bg-olive-950 text-ivory-50 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-champagne-400">
              EXPERIENCE THOUGHTFUL DENTISTRY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium">
              Ready for a Calm, Comfortable Dental Consultation?
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed">
              Dr. Himanshu Shah and our team look forward to welcoming you at Platinum Plaza, Sardar Patel Marg, Bardoli.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full sm:w-auto">
            <Button
              href="/contact#book"
              variant="gold"
              size="lg"
              withArrow
              className="w-full sm:w-auto"
            >
              Book an Appointment
            </Button>
            <Button
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto !text-ivory-50 !border-white/20 hover:!bg-white/10"
            >
              Call Clinic
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
