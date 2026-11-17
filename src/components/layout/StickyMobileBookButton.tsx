"use client";

import React from "react";
import { CLINIC_INFO } from "@/data/clinic";
import { Phone, Calendar, MessageSquare } from "lucide-react";

export const StickyMobileBookButton: React.FC = () => {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden pointer-events-none">
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-olive-950/95 backdrop-blur-xl border border-white/20 shadow-2xl pointer-events-auto max-w-md mx-auto">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white/10 text-ivory-50 text-xs font-medium hover:bg-white/20 transition-colors"
          aria-label="Call Olive Dental Care"
        >
          <Phone className="w-3.5 h-3.5 text-champagne-400" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
            "Hello Olive Dental Care, I would like to enquire about a dental appointment. Please share the available timings."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-emerald-600/90 text-white text-xs font-medium hover:bg-emerald-500 transition-colors"
          aria-label="WhatsApp Enquiry"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href="/contact#book"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-champagne-500 text-charcoal-950 text-xs font-semibold hover:bg-champagne-400 transition-colors shadow-sm"
          aria-label="Book Appointment"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </a>
      </div>
    </div>
  );
};
