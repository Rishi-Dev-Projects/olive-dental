"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS } from "@/data/gallery";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

export const PracticeGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Clinic Environment",
    "Clinical Technology",
    "Sterilization Standards",
    "Patient Experience",
  ];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 md:py-32 bg-ivory-50 border-t border-ivory-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 md:pb-16">
          <div className="max-w-2xl">
            <div className="mb-4">
              <Badge variant="olive">CLINICAL ENVIRONMENT & TECHNOLOGY</Badge>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-950 font-medium tracking-tight leading-[1.08]">
              Designed for Serenity, Ergonomics & Meticulous Hygiene
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed font-sans">
              Step inside our modern clinic at Platinum Plaza, Bardoli. Experience calming natural materials, hospital-grade sterilization protocols, and contemporary dental technology.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-olive-900 text-ivory-50 shadow-sm"
                  : "bg-white text-charcoal-700 hover:text-olive-950 border border-slate-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Gallery Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                className={`group rounded-[2rem] p-1.5 bg-olive-900/[0.03] ring-1 ring-olive-900/[0.07] transition-all duration-300 hover:shadow-diffusion ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="relative rounded-[calc(2rem-0.375rem)] overflow-hidden bg-ivory-100 aspect-[16/10] sm:aspect-[16/9]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center filter saturate-[0.92] transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-950/85 via-olive-950/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-olive-950 font-semibold shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Caption Text */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-olive-950/80 backdrop-blur-md border border-white/10 text-ivory-50">
                    <h3 className="font-serif text-base sm:text-lg font-medium text-ivory-50">
                      {item.title}
                    </h3>
                    <p className="text-xs text-ivory-200/80 mt-1 line-clamp-2 font-sans font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 text-center">
          <Button
            href="/gallery"
            variant="outline"
            size="md"
            withArrow
          >
            View Complete Clinic Space Tour
          </Button>
        </div>

      </div>
    </section>
  );
};
