import React from "react";
import Link from "next/link";
import { Logo } from "../brand/Logo";
import { CLINIC_INFO } from "@/data/clinic";
import {
  Phone,
  Clock,
  MapPin,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const treatmentLinks = [
    { label: "Full Mouth Rehabilitation", href: "/treatments/full-mouth-rehabilitation" },
    { label: "Gentle Root Canal Treatment", href: "/treatments/root-canal-treatment" },
    { label: "Smile Makeovers & Aesthetics", href: "/treatments/smile-makeover" },
    { label: "Teeth Cleaning & Scaling", href: "/treatments/teeth-cleaning-scaling" },
    { label: "Precision Dental Crowns", href: "/treatments/dental-crowns" },
    { label: "Wisdom Tooth Removal", href: "/treatments/wisdom-tooth-removal" },
    { label: "Tooth-Colored Restorations", href: "/treatments#restorative" },
    { label: "Children's Dental Care", href: "/treatments#pediatric" },
  ];

  const quickLinks = [
    { label: "About Clinic Philosophy", href: "/about" },
    { label: "Meet Dr. Himanshu Shah", href: "/dentist" },
    { label: "Smile Gallery & Space Tour", href: "/gallery" },
    { label: "Patient Reviews & Ratings", href: "/reviews" },
    { label: "Book Consultation", href: "/contact#book" },
    { label: "How to Find Us (Directions)", href: "/contact#location" },
  ];

  const localServiceAreas = [
    "Platinum Plaza Bardoli",
    "Sardar Patel Marg",
    "Patidarjin",
    "Arpit Bafna Society",
    "Station Road Bardoli",
    "Swaraj Ashram Area",
    "Vyara Corridor",
    "Surat Rural & District",
  ];

  return (
    <footer className="bg-olive-950 text-ivory-100 pt-20 pb-12 border-t border-olive-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Band */}
        <div className="pb-16 mb-16 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-champagne-500/10 border border-champagne-500/20 flex items-center justify-center flex-shrink-0 text-champagne-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-ivory-50">
                Hospital-Grade Sterilization
              </h4>
              <p className="text-xs text-ivory-200/70 mt-1 leading-relaxed">
                Multi-stage autoclave protocols and individually packed sterile instruments for uncompromising patient safety.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-champagne-500/10 border border-champagne-500/20 flex items-center justify-center flex-shrink-0 text-champagne-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-ivory-50">
                5.0 Google Business Rating
              </h4>
              <p className="text-xs text-ivory-200/70 mt-1 leading-relaxed">
                Praised by over 190+ patients for gentle dental procedures, clear diagnostic explanations, and compassionate care.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-champagne-500/10 border border-champagne-500/20 flex items-center justify-center flex-shrink-0 text-champagne-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-ivory-50">
                Central Bardoli Landmark
              </h4>
              <p className="text-xs text-ivory-200/70 mt-1 leading-relaxed">
                First Floor, Platinum Plaza, directly above Prime Co-operative Bank on Sardar Patel Marg with parking access.
              </p>
            </div>
          </div>
        </div>

        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Practice Identity Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Logo variant="full" theme="light" />
            <p className="text-sm font-sans text-ivory-200/80 leading-relaxed max-w-sm">
              Thoughtful, human-centred dentistry in Bardoli. We combine modern clinical technology with gentle, conservative techniques to nurture healthy, confident smiles.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ivory-200 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Olive Dental Care Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-ivory-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-champagne-400" />
                <span>Google Maps Directions</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Treatments Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-champagne-400 mb-5">
              DENTAL TREATMENTS
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {treatmentLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-ivory-200/75 hover:text-champagne-300 transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-champagne-400 mb-5">
              THE PRACTICE
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-ivory-200/75 hover:text-champagne-300 transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-champagne-400 mb-1">
              VISIT & ENQUIRE
            </h4>

            <div className="flex items-start gap-3 text-sm text-ivory-200/85">
              <MapPin className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-1" />
              <address className="not-italic leading-relaxed text-xs">
                {CLINIC_INFO.address.line1},<br />
                {CLINIC_INFO.address.landmark},<br />
                {CLINIC_INFO.address.locality},<br />
                {CLINIC_INFO.address.city}, Gujarat {CLINIC_INFO.address.postalCode}
              </address>
            </div>

            <div className="flex items-start gap-3 text-sm text-ivory-200/85">
              <Clock className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="text-ivory-100 font-medium">{CLINIC_INFO.hours.regular}</p>
                <p className="text-ivory-300/70">{CLINIC_INFO.hours.sunday}</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-champagne-500/15 border border-champagne-400/30 text-champagne-300 hover:bg-champagne-500/25 transition-all text-xs font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Line: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Local SEO Service Area Strip */}
        <div className="pt-8 pb-8 border-t border-white/10 text-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-champagne-400/90 flex-shrink-0">
              Serving Patients Across:
            </span>
            <div className="flex flex-wrap gap-2 text-[11.5px] text-ivory-200/70">
              {localServiceAreas.map((area, index) => (
                <span key={area} className="inline-flex items-center gap-2">
                  <span>{area}</span>
                  {index < localServiceAreas.length - 1 && (
                    <span className="text-white/20">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Legal & Medical Disclaimer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory-200/50">
          <p>© {currentYear} {CLINIC_INFO.name}, Bardoli. All rights reserved.</p>
          <p className="text-[11px] max-w-xl text-center md:text-right">
            Medical Disclaimer: Content on this website is for educational and appointment enquiry purposes only. Individual dental outcomes vary; clinical recommendations are made only after personal diagnostic evaluation by the dental surgeon.
          </p>
        </div>
      </div>
    </footer>
  );
};
