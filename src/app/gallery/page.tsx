import React from "react";
import type { Metadata } from "next";
import { PracticeGallery } from "@/components/home/PracticeGallery";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/data/clinic";
import { ShieldCheck, Sparkles, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinic Gallery & Virtual Space Tour | Olive Dental Care Bardoli",
  description:
    "Explore our modern dental clinic at Platinum Plaza, Bardoli: tranquil consultation suites, ergonomic operatories, and hospital-grade sterilization equipment.",
  alternates: {
    canonical: "https://olivedentalcarebardoli.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-ivory-50 pt-8 sm:pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 pb-10">
          <Badge variant="olive">PRACTICE ENVIRONMENT & SPACES</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-olive-950 leading-[1.06]">
            A Calming Sanctuary for Modern Dental Wellness
          </h1>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-sans font-light">
            Take a virtual tour through Olive Dental Care at Platinum Plaza, Bardoli. Designed with warm organic textures, acoustic comfort, and hospital-grade sterilization.
          </p>
        </div>

        {/* Ethical Transparency Note */}
        <div className="mb-12 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4 text-xs text-charcoal-600">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-semibold text-olive-950 block">Our Ethical Photography Policy:</span>
            <p>
              We believe healthcare marketing should be truthful. In compliance with medical advertising ethics, we do not fabricate exaggerated AI &ldquo;before and after&rdquo; results. Our gallery showcases our authentic clinical spaces, technological equipment, and sterilization infrastructure.
            </p>
          </div>
        </div>

        {/* Gallery Component */}
        <PracticeGallery />

        {/* Bottom Booking CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-[2.5rem] bg-olive-950 text-ivory-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium">
              Experience the Practice in Person
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed">
              We welcome you to visit Olive Dental Care at Platinum Plaza, above Prime Bank, Sardar Patel Marg, Bardoli.
            </p>
          </div>
          <Button
            href="/contact#book"
            variant="gold"
            size="lg"
            withArrow
            className="flex-shrink-0"
          >
            Book an Appointment
          </Button>
        </div>

      </div>
    </div>
  );
}
