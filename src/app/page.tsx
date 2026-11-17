import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { TreatmentDirectory } from "@/components/home/TreatmentDirectory";
import { FullMouthRehabFeature } from "@/components/home/FullMouthRehabFeature";
import { SmileMakeoverFeature } from "@/components/home/SmileMakeoverFeature";
import { DentistProfile } from "@/components/home/DentistProfile";
import { PatientReviews } from "@/components/home/PatientReviews";
import { PracticeGallery } from "@/components/home/PracticeGallery";
import { AppointmentAndMapSection } from "@/components/home/AppointmentAndMapSection";

export default function HomePage() {
  return (
    <>
      {/* 01. Bespoke Editorial Hero Section */}
      <Hero />

      {/* 02. Verified Trust & Core Pillars */}
      <TrustSection />

      {/* 03. Organic Modernism & Practice Philosophy */}
      <PhilosophySection />

      {/* 04. Comprehensive Clinical Treatment Directory */}
      <TreatmentDirectory />

      {/* 05. Advanced Full Mouth Rehabilitation Spotlight */}
      <FullMouthRehabFeature />

      {/* 06. Natural Smile Makeover & Aesthetic Dentistry */}
      <SmileMakeoverFeature />

      {/* 07. Practitioner Profile: Dr. Himanshu Shah */}
      <DentistProfile />

      {/* 08. Patient Experiences & Real Google Feedback Quotes */}
      <PatientReviews />

      {/* 09. Space Tour & Sterilization Standards Gallery */}
      <PracticeGallery />

      {/* 10. Interactive Appointment Conversion & Bardoli Landmark Location */}
      <AppointmentAndMapSection />
    </>
  );
}
