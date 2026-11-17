export interface GalleryItem {
  id: string;
  title: string;
  category: "Clinic Environment" | "Clinical Technology" | "Sterilization Standards" | "Patient Experience";
  description: string;
  image: string;
  aspectRatio?: string;
  badge: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "suite-1",
    title: "Tranquil Consultation & Diagnostic Suite",
    category: "Clinic Environment",
    description:
      "A calm, private consultation space designed with warm organic wood tones, natural lighting, and zero clinical anxiety.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    badge: "Consultation Suite",
  },
  {
    id: "tech-1",
    title: "Ergonomic Treatment Operatory",
    category: "Clinical Technology",
    description:
      "Modern patient chair with pressure-relieving memory cushioning and silent brushless rotary endodontic equipment.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    badge: "Operatory",
  },
  {
    id: "steril-1",
    title: "Class-B Autoclave & Multi-Stage Sterilization",
    category: "Sterilization Standards",
    description:
      "Strict international hospital-grade infection control protocols with vacuum autoclaving and individually sealed sterile instrument cassettes.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    badge: "Hygiene Protocol",
  },
  {
    id: "care-1",
    title: "Natural Smile Aesthetics & Shade Calibration",
    category: "Patient Experience",
    description:
      "Meticulous clinical shade taking in natural daylight spectrums to ensure invisible restorations that harmonize with your features.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    badge: "Smile Design",
  },
  {
    id: "care-2",
    title: "Human-Centred Dental Consultation",
    category: "Patient Experience",
    description:
      "Dr. Himanshu Shah explains diagnosis using high-magnification intraoral visuals so you understand every recommendation fully before proceeding.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    badge: "Patient-First Care",
  },
  {
    id: "tech-2",
    title: "Precision Digital Imaging & Diagnostics",
    category: "Clinical Technology",
    description:
      "Ultra-low radiation digital radiography ensuring accurate root length measurement and minimally invasive interventions.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    badge: "Precision Tools",
  },
];
