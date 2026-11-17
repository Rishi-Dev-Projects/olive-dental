"use client";

import React, { useState } from "react";
import { CLINIC_INFO } from "@/data/clinic";
import { TREATMENTS } from "@/data/treatments";
import { Button } from "./Button";
import {
  Calendar,
  Clock,
  User,
  Phone,
  FileText,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

interface AppointmentFormProps {
  initialTreatment?: string;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialTreatment = "",
  className = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: initialTreatment || "General Dental Consultation & Checkup",
    preferredDate: "",
    preferredTime: "Morning (9:30 AM – 1:00 PM)",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "Morning (9:30 AM – 1:00 PM)",
    "Afternoon (2:00 PM – 5:00 PM)",
    "Evening (5:00 PM – 8:00 PM)",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter the patient's full name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact mobile number.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please choose a preferred consultation date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format prefilled WhatsApp message
    const formattedMessage =
      `Hello Olive Dental Care (Bardoli),%0A%0A` +
      `I would like to enquire about a dental consultation:%0A` +
      `• Patient Name: ${encodeURIComponent(formData.name.trim())}%0A` +
      `• Contact Number: ${encodeURIComponent(formData.phone.trim())}%0A` +
      `• Dental Concern: ${encodeURIComponent(formData.treatment)}%0A` +
      `• Preferred Date: ${encodeURIComponent(formData.preferredDate)}%0A` +
      `• Preferred Time: ${encodeURIComponent(formData.preferredTime)}%0A` +
      (formData.message.trim()
        ? `• Additional Notes: ${encodeURIComponent(formData.message.trim())}%0A%0A`
        : `%0A`) +
      `Please confirm the available appointment timing with me. Thank you!`;

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${formattedMessage}`;

    // Record submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Open WhatsApp in new tab
      if (typeof window !== "undefined") {
        window.open(whatsappUrl, "_blank");
      }
    }, 400);
  };

  return (
    <div
      id="book"
      className={`rounded-[2rem] p-1.5 sm:p-2 bg-olive-900/[0.04] ring-1 ring-olive-900/[0.08] ${className}`}
    >
      <div className="rounded-[calc(2rem-0.5rem)] bg-white p-6 sm:p-8 md:p-10 shadow-diffusion border border-slate-200/60">
        {!submitted ? (
          <div>
            <div className="border-b border-slate-100 pb-6 mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-champagne-600 block mb-2">
                APPOINTMENT ENQUIRY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-olive-950 font-medium">
                Request a Dental Consultation
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed">
                Fill out your details below. We review every request and confirm available slots directly via WhatsApp or phone call.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="patient-name"
                  className="block text-xs font-mono uppercase tracking-wider text-charcoal-700"
                >
                  Patient Full Name <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="patient-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="e.g. Priyanshu Patel"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-charcoal-900 placeholder:text-charcoal-400 bg-ivory-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-rose-400 focus:ring-rose-200"
                        : "border-slate-200 focus:border-olive-700 focus:ring-olive-100"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Contact Phone Number */}
              <div className="space-y-2">
                <label
                  htmlFor="patient-phone"
                  className="block text-xs font-mono uppercase tracking-wider text-charcoal-700"
                >
                  Contact Mobile Number <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="patient-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    placeholder="+91 98765 43210"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-charcoal-900 placeholder:text-charcoal-400 bg-ivory-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? "border-rose-400 focus:ring-rose-200"
                        : "border-slate-200 focus:border-olive-700 focus:ring-olive-100"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Treatment Concern Select */}
              <div className="space-y-2">
                <label
                  htmlFor="treatment-select"
                  className="block text-xs font-mono uppercase tracking-wider text-charcoal-700"
                >
                  Primary Dental Concern / Treatment
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <select
                    id="treatment-select"
                    value={formData.treatment}
                    onChange={(e) =>
                      setFormData({ ...formData, treatment: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-charcoal-900 bg-ivory-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-olive-700 focus:ring-olive-100 transition-all appearance-none cursor-pointer"
                  >
                    <option value="General Dental Consultation & Checkup">
                      General Dental Consultation & Checkup
                    </option>
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                    <option value="Severe Toothache / Emergency Consultation">
                      Severe Toothache / Urgent Consultation
                    </option>
                    <option value="Other Consultation Concern">
                      Other Dental Consultation
                    </option>
                  </select>
                </div>
              </div>

              {/* Date and Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="preferred-date"
                    className="block text-xs font-mono uppercase tracking-wider text-charcoal-700"
                  >
                    Preferred Date <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="preferred-date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate)
                          setErrors({ ...errors, preferredDate: "" });
                      }}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-charcoal-900 bg-ivory-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.preferredDate
                          ? "border-rose-400 focus:ring-rose-200"
                          : "border-slate-200 focus:border-olive-700 focus:ring-olive-100"
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="preferred-time"
                    className="block text-xs font-mono uppercase tracking-wider text-charcoal-700"
                  >
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="preferred-time"
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTime: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-charcoal-900 bg-ivory-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-olive-700 focus:ring-olive-100 transition-all appearance-none cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Optional Message */}
              <div className="space-y-2">
                <label
                  htmlFor="patient-message"
                  className="block text-xs font-mono uppercase tracking-wider text-charcoal-700"
                >
                  Optional Details or Past Medical History
                </label>
                <div className="relative">
                  <textarea
                    id="patient-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe any symptoms, tooth sensitivity, or questions you would like Dr. Shah to know in advance..."
                    className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-charcoal-900 placeholder:text-charcoal-400 bg-ivory-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:border-olive-700 focus:ring-olive-100 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  withArrow
                  className="w-full justify-between !py-3.5 font-medium"
                  disabled={isSubmitting}
                >
                  <span>
                    {isSubmitting
                      ? "Preparing WhatsApp Enquiry..."
                      : "Send Enquiry via WhatsApp"}
                  </span>
                </Button>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-charcoal-500 font-sans border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  No instant charge • Clinic confirms slot
                </span>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="text-olive-800 hover:text-olive-950 underline font-medium"
                >
                  Prefer calling? Call +91 88661 34064
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Honest Confirmation State (No fake booking confirmation) */
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-champagne-600">
                ENQUIRY DISPATCHED
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-olive-950 font-medium">
                Thank You, {formData.name}
              </h3>
              <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                Your appointment request for <strong>{formData.treatment}</strong> has been prepared for dispatch to Olive Dental Care (+91 88661 34064).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ivory-100/70 border border-ivory-300/60 text-xs text-charcoal-700 max-w-md mx-auto text-left space-y-1.5 font-mono">
              <p className="text-olive-950 font-semibold mb-1 uppercase tracking-wider text-[10px]">
                Enquiry Summary:
              </p>
              <p>• Date: {formData.preferredDate}</p>
              <p>• Window: {formData.preferredTime}</p>
              <p>• Mobile: {formData.phone}</p>
              <p className="pt-2 text-[11px] font-sans text-charcoal-500 not-italic border-t border-ivory-300/40">
                Notice: The clinic will contact you via WhatsApp or telephone to confirm your scheduled consultation time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                isExternal
                variant="gold"
                size="md"
                icon={<MessageSquare className="w-4 h-4 mr-2" />}
              >
                Chat on WhatsApp Now
              </Button>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-charcoal-600 hover:text-olive-950 underline py-2 px-3"
              >
                Submit another enquiry
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
