import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TREATMENTS, TreatmentItem } from "@/data/treatments";
import { CLINIC_INFO } from "@/data/clinic";
import { Badge } from "@/components/ui/Badge";
import { DoppelrandCard } from "@/components/ui/DoppelrandCard";
import { Button } from "@/components/ui/Button";
import { AppointmentForm } from "@/components/ui/AppointmentForm";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Sparkles,
  Phone,
} from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  if (!treatment) return {};

  return {
    title: `${treatment.title} in Bardoli | Olive Dental Care`,
    description: `${treatment.shortDescription} Visit Olive Dental Care at Platinum Plaza, Sardar Patel Marg, Bardoli for personalized clinical care.`,
    alternates: {
      canonical: `https://olivedentalcarebardoli.com/treatments/${slug}`,
    },
    openGraph: {
      title: `${treatment.title} in Bardoli | Olive Dental Care`,
      description: treatment.shortDescription,
      url: `https://olivedentalcarebardoli.com/treatments/${slug}`,
      type: "article",
    },
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  // Schema for MedicalProcedure
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.title,
    description: treatment.fullOverview,
    procedureType: "https://schema.org/PercutaneousProcedure",
    howPerformed: treatment.procedureSteps.map((s) => s.title).join(", "),
    followup: treatment.patientTips.join(". "),
    provider: {
      "@type": "Dentist",
      name: CLINIC_INFO.name,
      telephone: CLINIC_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC_INFO.address.line1,
        addressLocality: CLINIC_INFO.address.city,
        addressRegion: CLINIC_INFO.address.state,
        postalCode: CLINIC_INFO.address.postalCode,
        addressCountry: "IN",
      },
    },
  };

  return (
    <div className="bg-ivory-50 pt-6 sm:pt-10 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono text-charcoal-500 pb-8"
        >
          <Link href="/" className="hover:text-olive-950 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-charcoal-400" />
          <Link href="/treatments" className="hover:text-olive-950 transition-colors">
            Treatments
          </Link>
          <ChevronRight className="w-3 h-3 text-charcoal-400" />
          <span className="text-olive-950 font-semibold truncate">
            {treatment.title}
          </span>
        </nav>

        {/* Hero Section of Treatment */}
        <div className="max-w-4xl space-y-4 pb-12 sm:pb-16">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="olive">{treatment.category}</Badge>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white border border-slate-200/80 text-charcoal-700">
              <Clock className="w-3.5 h-3.5 text-champagne-600" />
              Duration: {treatment.duration}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-medium tracking-tight text-olive-950 leading-[1.08]">
            {treatment.title} in Bardoli
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl text-champagne-800 font-medium">
            {treatment.subtitle}
          </p>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans font-light max-w-3xl pt-2">
            {treatment.fullOverview}
          </p>
        </div>

        {/* Asymmetrical 2-Column Content Layout (7 cols content + 5 cols booking sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Clinical Body (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* 01. Indications and Symptoms */}
            <div className="rounded-[2rem] p-1.5 bg-olive-900/[0.03] ring-1 ring-olive-900/[0.08]">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 sm:p-8 border border-slate-200/60 shadow-sm space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-600 font-semibold block mb-1">
                    CLINICAL DIAGNOSTICS
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-olive-950">
                    When is this Treatment Recommended?
                  </h3>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-charcoal-700 font-semibold block">
                    Common Clinical Indications:
                  </span>
                  <ul className="space-y-2">
                    {treatment.indications.map((ind, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {treatment.symptoms && treatment.symptoms.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-rose-700 font-semibold flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Warning Symptoms You May Experience:
                    </span>
                    <ul className="space-y-1.5">
                      {treatment.symptoms.map((sym, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-600 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* 02. Step-by-Step Procedure Walkthrough */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-600 font-semibold block mb-1">
                  PROCEDURAL BLUEPRINT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-olive-950">
                  Step-by-Step Clinical Walkthrough
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                  At Olive Dental Care, we demystify every phase of care so you always know what to expect.
                </p>
              </div>

              <div className="space-y-4">
                {treatment.procedureSteps.map((stepItem, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4 hover:border-olive-300 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-xl bg-olive-900/5 text-olive-900 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 border border-olive-900/10">
                      0{idx + 1}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-champagne-700 font-semibold uppercase tracking-wider">
                          {stepItem.step}
                        </span>
                      </div>
                      <h4 className="font-serif text-base sm:text-lg font-medium text-olive-950">
                        {stepItem.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-sans">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 03. Patient Care & Recovery Tips */}
            <div className="p-6 sm:p-8 rounded-2xl bg-ivory-100/70 border border-ivory-300/80 space-y-4">
              <div className="flex items-center gap-2 text-olive-950 font-serif font-medium text-lg">
                <Sparkles className="w-5 h-5 text-champagne-600" />
                <span>Patient Tips for Healing & Longevity</span>
              </div>
              <ul className="space-y-2.5">
                {treatment.patientTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-600 mt-2 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 04. Frequently Asked Questions */}
            {treatment.faq && treatment.faq.length > 0 && (
              <div className="space-y-6 pt-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-600 font-semibold block mb-1">
                    PATIENT CLARIFICATIONS
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-olive-950">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-3">
                  {treatment.faq.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2"
                    >
                      <h4 className="font-serif text-base font-medium text-olive-950 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-champagne-600 flex-shrink-0 mt-0.5" />
                        <span>{q.question}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed pl-6 font-sans">
                        {q.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Booking Form & Doctor Note (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            
            {/* Interactive Form Pre-Configured for this Treatment */}
            <AppointmentForm initialTreatment={treatment.title} />

            {/* Doctor Commitment Box */}
            <DoppelrandCard
              outerRadius="2rem"
              tone="ivory"
              outerPadding="sm"
              innerClassName="!p-6 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-olive-900/10 text-olive-900 font-serif font-bold text-base flex items-center justify-center flex-shrink-0">
                  H
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-olive-950">
                    Dr. Himanshu Shah
                  </h4>
                  <p className="text-[11px] font-sans text-charcoal-500">
                    Lead Dental Surgeon • Olive Dental Care
                  </p>
                </div>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed font-sans italic border-t border-ivory-300/60 pt-3">
                &ldquo;We will never pressure you into an unnecessary procedure. During your consultation, we examine the tooth in detail and explain the most conservative, biologically sound option.&rdquo;
              </p>
            </DoppelrandCard>

            {/* Direct Calling Quick Link */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between text-xs font-mono">
              <span className="text-charcoal-600">Need immediate advice?</span>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="text-olive-900 font-semibold hover:underline flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-champagne-600" />
                <span>+91 88661 34064</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
