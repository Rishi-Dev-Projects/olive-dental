import React from "react";
import type { Metadata } from "next";
import { CLINIC_INFO } from "@/data/clinic";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import { DoppelrandCard } from "@/components/ui/DoppelrandCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Phone,
  Clock,
  MapPin,
  MessageSquare,
  Navigation,
  Train,
  Building,
  HelpCircle,
  Car,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Appointments | Olive Dental Care Bardoli",
  description:
    "Book your dental appointment at Olive Dental Care Bardoli. Located at Platinum Plaza, Sardar Patel Marg, above Prime Co-operative Bank. Call +91 88661 34064.",
  alternates: {
    canonical: "https://olivedentalcarebardoli.com/contact",
  },
};

export default function ContactPage() {
  const contactFaqs = [
    {
      q: "Do I need to book an appointment before visiting?",
      a: "Yes, we strongly recommend booking in advance. This ensures Dr. Himanshu Shah has dedicated, unhurried time for your consultation and allows our staff to perform comprehensive operatory sterilization before your arrival.",
    },
    {
      q: "What should I bring to my first consultation?",
      a: "Please bring any previous dental X-rays, medical records, or a list of current medications you take. If you have specific dental insurance coverage or past dental history, bring those details along.",
    },
    {
      q: "Is parking available at Platinum Plaza?",
      a: "Yes. Platinum Plaza provides convenient vehicular parking in front and around the plaza for two-wheelers and four-wheelers.",
    },
    {
      q: "What payment methods are accepted at the clinic?",
      a: "We accept all major UPI apps (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and cash for your convenience.",
    },
  ];

  return (
    <div className="bg-ivory-50 pt-8 sm:pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 pb-14 md:pb-20">
          <Badge variant="olive">APPOINTMENTS & CLINIC LOCATION</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-olive-950 leading-[1.06]">
            Connect with Olive Dental Care
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-sans font-light">
            We look forward to welcoming you at Platinum Plaza, Sardar Patel Marg, Bardoli. Schedule your consultation online, message via WhatsApp, or call directly.
          </p>
        </div>

        {/* 2-Column Grid: Form (7 cols) + Visiting Guide (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Appointment Form */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>

          {/* Right Column: Practical Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <DoppelrandCard
              outerRadius="2rem"
              tone="olive-dark"
              outerPadding="sm"
              innerClassName="!p-8 space-y-6 text-ivory-50"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-300 block mb-1">
                  DIRECT CLINICAL LINE
                </span>
                <h3 className="font-serif text-2xl font-medium text-ivory-50">
                  Speak Directly with Us
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-sans">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="p-4 rounded-xl bg-white/10 border border-white/10 flex items-center gap-3.5 hover:bg-white/15 transition-colors"
                >
                  <Phone className="w-5 h-5 text-champagne-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-ivory-200/70 block">Telephone Enquiries</span>
                    <span className="font-semibold text-ivory-50 text-base">{CLINIC_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                    "Hello Olive Dental Care, I would like to enquire about a dental appointment. Please share the available timings."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/10 border border-white/10 flex items-center gap-3.5 hover:bg-white/15 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-ivory-200/70 block">WhatsApp Fast Response</span>
                    <span className="font-semibold text-ivory-50 text-base">Chat on WhatsApp</span>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-ivory-200/80 space-y-1 font-mono">
                <p className="text-champagne-300 font-semibold uppercase text-[10px] tracking-wider">
                  CLINIC OPERATING HOURS:
                </p>
                <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                <p className="text-ivory-300/70">Sunday: By Appointment / Emergency</p>
              </div>
            </DoppelrandCard>

            {/* Exact Landmark Card */}
            <DoppelrandCard
              outerRadius="2rem"
              tone="white"
              outerPadding="sm"
              innerClassName="!p-8 space-y-5"
            >
              <div className="flex items-center gap-2 text-olive-950 font-serif font-medium text-xl">
                <MapPin className="w-5 h-5 text-champagne-600" />
                <span>Bardoli Clinic Landmark</span>
              </div>

              <div className="space-y-1 text-xs sm:text-sm text-charcoal-700 font-sans leading-relaxed">
                <p className="font-semibold text-olive-950">
                  Shop No. 309, First Floor, Platinum Plaza
                </p>
                <p className="text-champagne-800 font-medium">
                  Above Prime Co-operative Bank, Sardar Patel Marg
                </p>
                <p className="text-charcoal-500">
                  Patidarjin, Arpit Bafna Society, Bardoli, Gujarat 394601
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2.5 text-xs text-charcoal-600">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-champagne-600 flex-shrink-0" />
                  <span>1.2 km from Bardoli Railway Station</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-champagne-600 flex-shrink-0" />
                  <span>Ample parking in Platinum Plaza courtyard</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href={CLINIC_INFO.social.googleMaps}
                  isExternal
                  variant="primary"
                  size="sm"
                  withArrow
                  className="w-full text-xs"
                >
                  Open in Google Maps
                </Button>
              </div>
            </DoppelrandCard>

          </div>

        </div>

        {/* Practical FAQs Section */}
        <div className="mt-20 pt-16 border-t border-ivory-300/80">
          <div className="max-w-2xl mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-600 font-semibold block mb-1">
              PATIENT GUIDANCE
            </span>
            <h2 className="font-serif text-3xl font-medium text-olive-950">
              Frequently Asked Visiting Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2"
              >
                <h4 className="font-serif text-base font-medium text-olive-950 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-champagne-600 flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed pl-6 font-sans">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
