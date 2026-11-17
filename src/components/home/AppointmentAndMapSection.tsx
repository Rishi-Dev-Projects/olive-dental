import React from "react";
import { CLINIC_INFO } from "@/data/clinic";
import { AppointmentForm } from "../ui/AppointmentForm";
import { DoppelrandCard } from "../ui/DoppelrandCard";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Navigation,
  ShieldAlert,
  ArrowUpRight,
  Train,
  Building,
} from "lucide-react";

export const AppointmentAndMapSection: React.FC = () => {
  return (
    <section id="location" className="py-20 md:py-32 bg-ivory-100/50 border-t border-ivory-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 md:pb-20">
          <div className="max-w-2xl">
            <div className="mb-4">
              <Badge variant="olive">VISIT & APPOINTMENT CONVERSION</Badge>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-950 font-medium tracking-tight leading-[1.08]">
              Begin Your Journey to a Confident, Healthy Smile
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans">
              Schedule your consultation at our Platinum Plaza clinic. We ensure an unhurried diagnosis where your comfort is always first.
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Form (7 cols) + Bardoli Location & Directions (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Interactive Appointment Form */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>

          {/* Right: Clinic Landmark & Practical Visiting Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Landmark & Address Card */}
            <DoppelrandCard
              outerRadius="2rem"
              tone="white"
              outerPadding="sm"
              innerClassName="!p-6 sm:!p-8 space-y-5"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-600 font-semibold">
                  CLINIC LOCATION
                </span>
                <span className="text-xs font-mono text-charcoal-500">
                  Shop No. 309, 1st Floor
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-olive-950 font-medium mb-1">
                  Platinum Plaza, Bardoli
                </h3>
                <p className="text-xs font-sans text-champagne-700 font-semibold mb-3">
                  Key Landmark: Above Prime Co-operative Bank, Sardar Patel Marg
                </p>
                <address className="not-italic text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                  {CLINIC_INFO.address.full}
                </address>
              </div>

              {/* Local Travel Proximity */}
              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-charcoal-600 font-sans">
                <div className="flex items-center gap-2.5">
                  <Train className="w-4 h-4 text-champagne-600 flex-shrink-0" />
                  <span>~1.2 km from Bardoli Railway Station (4 mins by auto/car)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Building className="w-4 h-4 text-champagne-600 flex-shrink-0" />
                  <span>Central commercial hub with ample street & plaza parking</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  href={CLINIC_INFO.social.googleMaps}
                  isExternal
                  variant="primary"
                  size="sm"
                  withArrow
                  className="w-full text-xs"
                >
                  Get Google Maps Directions
                </Button>
                <Button
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  variant="outline"
                  size="sm"
                  className="w-full text-xs"
                >
                  Call +91 88661 34064
                </Button>
              </div>
            </DoppelrandCard>

            {/* Operating Hours Card */}
            <DoppelrandCard
              outerRadius="2rem"
              tone="ivory"
              outerPadding="sm"
              innerClassName="!p-6 sm:!p-7 space-y-4"
            >
              <div className="flex items-center gap-2 text-olive-950 font-serif font-medium text-lg">
                <Clock className="w-4 h-4 text-champagne-600" />
                <span>Consultation Hours</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-ivory-300/60">
                  <span className="text-charcoal-700 font-semibold">Monday – Saturday</span>
                  <span className="text-olive-900 font-bold">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-charcoal-600">
                  <span>Sunday</span>
                  <span className="text-charcoal-500">By Prior Appointment / Urgent</span>
                </div>
              </div>

              <p className="text-[11.5px] text-charcoal-500 font-sans leading-relaxed pt-1">
                Notice: We sterilize all dental operatories between patients. Please arrive 5 minutes before your scheduled slot.
              </p>
            </DoppelrandCard>

            {/* Quick 1-Click WhatsApp Enquiry Card */}
            <div className="rounded-2xl p-5 bg-emerald-50/80 border border-emerald-200/80 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-serif text-base font-semibold text-emerald-950">
                  Prefer Instant WhatsApp?
                </h4>
                <p className="text-xs text-emerald-800/80 font-sans">
                  Message our team directly on WhatsApp for quick timing enquiries.
                </p>
              </div>
              <Button
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hello Olive Dental Care, I would like to enquire about a dental appointment. Please share the available timings."
                )}`}
                isExternal
                variant="gold"
                size="sm"
                className="flex-shrink-0 text-xs"
              >
                Chat Now
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
