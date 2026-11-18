"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../brand/Logo";
import { CLINIC_INFO } from "@/data/clinic";
import { Phone, ArrowRight, Menu, X, Clock } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
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

  // Clean, focused navigation links (uncluttered & spacious)
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Our Dentist", href: "/dentist" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Clinical Utility Bar - Clean & Informative */}
      <div className="bg-olive-950 text-ivory-200 text-xs py-2 px-4 font-sans border-b border-olive-900/60">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2.5 text-[11.5px] text-ivory-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Platinum Plaza, Sardar Patel Marg, Bardoli</span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="hidden md:inline text-ivory-300/70">Mon–Sat: 9 AM–8 PM</span>
          </div>

          <div className="flex items-center gap-4 text-[11.5px]">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-medium text-champagne-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-champagne-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sober, Spacious Floating Header */}
      <header className="sticky top-3 sm:top-4 z-40 px-3 sm:px-6 w-full max-w-6xl mx-auto transition-all duration-300">
        <div
          className={`flex items-center justify-between rounded-full px-5 sm:px-7 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-md"
              : "bg-white/90 backdrop-blur-sm border border-stone-200/70 shadow-sm"
          }`}
        >
          {/* Simple, Sober Brand Logo */}
          <Logo variant="full" />

          {/* Desktop Navigation Links - Relaxed Spacing, Sober Typography */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13.5px] tracking-[0.01em] transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-olive-950 font-semibold"
                      : "text-charcoal-700 hover:text-olive-950 font-normal"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-olive-800 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact#book"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-olive-900 text-ivory-50 text-xs sm:text-[13px] font-medium px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-200 hover:bg-olive-800 active:scale-[0.98] shadow-sm tracking-wide whitespace-nowrap"
            >
              Book Appointment
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-stone-100 text-charcoal-800 hover:bg-stone-200 transition-colors focus:outline-none flex-shrink-0"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Clean Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-olive-950 text-ivory-50">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <Logo variant="full" theme="light" />
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-champagne-400 mb-3 block">
                NAVIGATION
              </span>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between py-3 px-3 rounded-lg text-base font-serif transition-colors ${
                      isActive
                        ? "bg-white/10 text-champagne-300 font-medium"
                        : "text-ivory-100 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <div className="text-xs text-ivory-300/70 space-y-1">
                <p>First Floor, Platinum Plaza, Sardar Patel Marg, Bardoli</p>
                <p>Mon–Sat: 9:00 AM – 8:00 PM</p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white/10 text-ivory-50 text-xs font-medium hover:bg-white/20 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Call Clinic</span>
                </a>
                <Link
                  href="/contact#book"
                  className="inline-flex items-center justify-center py-2.5 px-3 rounded-full bg-champagne-500 text-charcoal-950 text-xs font-semibold hover:bg-champagne-400 transition-colors text-center"
                >
                  Book Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
