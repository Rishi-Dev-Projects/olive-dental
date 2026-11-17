import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinic";
import { Badge } from "@/components/ui/Badge";
import { DoppelrandCard } from "@/components/ui/DoppelrandCard";
import { Button } from "@/components/ui/Button";
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Phone,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Dentist | Dr. Himanshu Shah | Olive Dental Care Bardoli",
  description:
    "Meet Dr. Himanshu Shah, Lead Dental Surgeon at Olive Dental Care Bardoli. Gentle, patient-focused dental care, transparent diagnosis, and unhurried appointments at Platinum Plaza.",
  alternates: {
    canonical: "https://olivedentalcarebardoli.com/dentist",
  },
};

export default function DentistPage() {
  const commitments = [
    {
      title: "Unhurried, Dedicated Time",
      desc: "We space our clinical schedule deliberately so Dr. Shah can spend unhurried time reviewing your diagnosis, answering questions, and explaining every phase.",
    },
    {
      title: "Gentle, Pain-Free Anesthesia",
      desc: "Fear of pain is the #1 reason patients avoid the dentist. We utilize advanced numbing gels and micro-delivery local anesthesia so procedures remain completely comfortable.",
    },
    {
      title: "Visual Diagnostic Evidence",
      desc: "You will never be asked to accept a diagnosis blindly. We display high-magnification intraoral photographs of your teeth on the operatory screen before discussing treatments.",
    },
    {
      title: "Conservative Biology-First Ethos",
      desc: "Our priority is preserving your natural tooth enamel and bone. We avoid unnecessary crowns or extractions whenever conservative restorative methods can save the tooth.",
    },
  ];

  return (
    <div className="bg-ivory-50 pt-8 sm:pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 pb-14 md:pb-20">
          <Badge variant="olive">CLINICAL LEADERSHIP & PRACTITIONER PROFILE</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-olive-950 leading-[1.06]">
            Meet Dr. Himanshu Shah
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-sans font-light">
            Lead Dental Surgeon and Clinical Director of Olive Dental Care. Practicing patient-centred, conservative dentistry with empathy and precision in Bardoli.
          </p>
        </div>

        {/* 2-Column Split: Editorial Visual (5 cols) + Philosophy (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Quick Facts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[2.5rem] p-2 bg-olive-900/[0.04] ring-1 ring-olive-900/[0.08] shadow-diffusion-lg">
              <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden bg-ivory-100 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80"
                  alt="Dr. Himanshu Shah - Lead Dental Surgeon at Olive Dental Care Bardoli"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-top filter saturate-[0.92]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950/85 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-charcoal-900">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-600 block mb-0.5">
                    CLINICAL DIRECTOR
                  </span>
                  <h3 className="font-serif text-xl font-medium text-olive-950">
                    Dr. Himanshu Shah
                  </h3>
                  <p className="text-xs text-charcoal-500 font-sans mt-0.5">
                    Lead Dental Surgeon • Olive Dental Care
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Practice Details Card */}
            <DoppelrandCard
              outerRadius="2rem"
              tone="white"
              outerPadding="sm"
              innerClassName="!p-6 space-y-4 text-xs font-mono"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-charcoal-500">Practice Location</span>
                <span className="text-olive-950 font-semibold">Platinum Plaza, Bardoli</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-charcoal-500">Consultation Timings</span>
                <span className="text-olive-950 font-semibold">Mon–Sat: 9 AM–8 PM</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-charcoal-500">Google Business Rating</span>
                <span className="text-amber-600 font-semibold">5.0 ★ (190+ Reviews)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-charcoal-500">Scheduling Policy</span>
                <span className="text-olive-900 font-semibold">By Prior Appointment</span>
              </div>
            </DoppelrandCard>
          </div>

          {/* Right Column: Bio, Vision & Commitments (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-champagne-700 font-semibold block">
                THE PRACTITIONER’S PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-olive-950 tracking-tight leading-[1.1]">
                &ldquo;Dentistry must be honest, comfortable, and grounded in conservative science.&rdquo;
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans font-light">
                For Dr. Himanshu Shah, clinical dentistry is an art of trust. In an era where dental clinics frequently over-prescribe aggressive treatments, Olive Dental Care stands firmly for conservative tooth preservation, patient education, and gentle care.
              </p>
            </div>

            {/* Clinical Commitments Grid */}
            <div className="space-y-4 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-800 font-semibold block mb-2">
                Core Standards of Every Consultation:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {commitments.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-1.5"
                  >
                    <h4 className="font-serif text-base font-semibold text-olive-950">
                      {item.title}
                    </h4>
                    <p className="text-xs text-charcoal-600 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Note on Qualifications and Verification */}
            <div className="p-5 rounded-2xl bg-ivory-100/70 border border-ivory-300/80 text-xs text-charcoal-700 font-sans leading-relaxed space-y-2">
              <div className="flex items-center gap-2 text-olive-950 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Practice & Registered Professional</span>
              </div>
              <p>
                Dr. Himanshu Shah oversees all clinical procedures at Olive Dental Care in Platinum Plaza, Bardoli. In alignment with our commitment to medical ethics, we do not fabricate exaggerated qualifications or artificial awards. Our greatest credential is the genuine feedback and trust of over 190+ verified local patients.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/contact#book"
                variant="primary"
                size="lg"
                withArrow
              >
                Schedule Consultation with Dr. Shah
              </Button>
              <Button
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                isExternal
                variant="outline"
                size="lg"
              >
                Message on WhatsApp
              </Button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
