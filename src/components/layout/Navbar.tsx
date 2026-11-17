"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../brand/Logo";
import { Button } from "../ui/Button";
import { CLINIC_INFO } from "@/data/clinic";
import { Phone, Calendar, ArrowRight, Menu, X, Clock, MapPin } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Clinic", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Full Mouth Rehab", href: "/treatments/full-mouth-rehabilitation" },
    { label: "Our Dentist", href: "/dentist" },
    { label: "Smile Gallery", href: "/gallery" },
    { label: "Patient Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Clinical Announcement Bar */}
      <div className="bg-olive-950 text-ivory-100/90 text-xs py-2 px-4 border-b border-olive-900/60 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-champagne-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              NOW ACCEPTING APPOINTMENTS
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-ivory-200/80 text-[11.5px]">
              Platinum Plaza, Sardar Patel Marg, Bardoli
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11.5px]">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-ivory-200/70">
              <Clock className="w-3 h-3 text-champagne-400" />
              Mon–Sat: 9 AM–8 PM
            </span>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-medium text-champagne-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Island Header */}
      <header
        className={`sticky top-3 sm:top-5 z-40 transition-all duration-500 px-3 sm:px-6 w-full max-w-7xl mx-auto`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 ${
            scrolled
              ? "bg-ivory-50/95 backdrop-blur-xl border border-ivory-300/80 shadow-diffusion-lg"
              : "bg-ivory-50/90 backdrop-blur-md border border-ivory-200/70 shadow-diffusion"
          }`}
        >
          {/* Brand Logo */}
          <Logo variant="full" />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-200 tracking-wide ${
                    isActive
                      ? "bg-olive-900 text-ivory-50 shadow-sm"
                      : "text-charcoal-700 hover:text-olive-950 hover:bg-olive-900/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full bg-olive-900/5 text-olive-900 hover:bg-olive-900/10 transition-colors"
              aria-label={`Call Olive Dental Care at ${CLINIC_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <Button
              href="/contact#book"
              size="sm"
              variant="primary"
              withArrow
              className="text-xs sm:text-sm font-medium !py-2 !px-4 sm:!px-5"
            >
              <span className="hidden sm:inline">Book</span> Appointment
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full bg-olive-900/5 text-olive-950 hover:bg-olive-900/10 transition-colors focus:outline-none"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Morphing Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex flex-col bg-olive-950/98 backdrop-blur-2xl text-ivory-50 transition-opacity duration-300">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Logo variant="full" theme="light" />
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-champagne-400 mb-2">
                PRACTICE NAVIGATION
              </span>
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-lg font-serif transition-colors ${
                      isActive
                        ? "bg-white/10 text-champagne-300 font-semibold"
                        : "text-ivory-100 hover:text-white hover:bg-white/5"
                    }`}
                    style={{
                      animationDelay: `${index * 40}ms`,
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Contact card in mobile drawer */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-start gap-3 text-xs text-ivory-200/80">
                <MapPin className="w-4 h-4 text-champagne-400 flex-shrink-0 mt-0.5" />
                <span>
                  First Floor, Platinum Plaza, above Prime Bank, Sardar Patel Marg, Bardoli
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  variant="outline"
                  size="md"
                  className="flex-1 !border-white/20 !text-ivory-50 hover:!bg-white/10"
                  icon={<Phone className="w-4 h-4 mr-2" />}
                >
                  Call Clinic
                </Button>
                <Button
                  href="/contact#book"
                  variant="gold"
                  size="md"
                  className="flex-1"
                  icon={<Calendar className="w-4 h-4 mr-2" />}
                >
                  Book Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
