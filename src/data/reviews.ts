export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  treatmentType?: string;
  reviewText: string;
  source: "Google Business Review";
  verified: boolean;
  highlightTag: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "K. Patel",
    rating: 5,
    date: "Recent Patient",
    treatmentType: "Consultation & Dental Care",
    reviewText:
      "Dr. Himanshu explains every single step so calmly before starting treatment. The clinic is exceptionally clean, modern, and hygienic. I used to be very anxious about visiting a dentist, but the gentle approach here made all the difference.",
    source: "Google Business Review",
    verified: true,
    highlightTag: "Calm & Clear Explanation",
  },
  {
    id: "rev-2",
    author: "B. Chaudhary",
    rating: 5,
    date: "Recent Patient",
    treatmentType: "Root Canal & Crown Restoration",
    reviewText:
      "Very professional dental clinic in Bardoli. The treatment was virtually painless, and the doctor gave honest, transparent advice about what was truly necessary without pushing extra procedures. Highly recommended.",
    source: "Google Business Review",
    verified: true,
    highlightTag: "Painless & Transparent",
  },
  {
    id: "rev-3",
    author: "P. Shah",
    rating: 5,
    date: "Recent Patient",
    treatmentType: "Full Mouth Dental Rehabilitation",
    reviewText:
      "Went for a comprehensive dental issue that other clinics were rushing through. Dr. Shah took the time to study the bite, explain the timeline, and completed the work with utmost precision. Chewing is comfortable again.",
    source: "Google Business Review",
    verified: true,
    highlightTag: "Comprehensive Care",
  },
  {
    id: "rev-4",
    author: "M. Desai",
    rating: 5,
    date: "Recent Patient",
    treatmentType: "Teeth Cleaning & Gum Care",
    reviewText:
      "Super hygienic environment at Platinum Plaza. The equipment is very modern, and the staff treats patients with genuine warmth and respect. Booking an appointment was seamless.",
    source: "Google Business Review",
    verified: true,
    highlightTag: "Immaculate Hygiene",
  },
  {
    id: "rev-5",
    author: "R. Sharma",
    rating: 5,
    date: "Recent Patient",
    treatmentType: "Aesthetic Restoration",
    reviewText:
      "Extremely polite doctor who answers all your doubts patiently. The clinic has a calm, positive atmosphere that immediately puts you at ease. Truly the best dental experience in Bardoli.",
    source: "Google Business Review",
    verified: true,
    highlightTag: "Patient-First Approach",
  },
];

export const REVIEW_METRICS = {
  score: 5.0,
  scale: 5,
  displayCount: "190+ Verified Reviews",
  sourceUrl: "https://maps.google.com/?q=Olive+Dental+Care+Platinum+Plaza+Bardoli+Gujarat",
  attributes: [
    { label: "Hygiene & Sterilization", rating: "5.0 / 5.0" },
    { label: "Doctor's Explanation", rating: "5.0 / 5.0" },
    { label: "Patient Comfort & Care", rating: "5.0 / 5.0" },
    { label: "Appointment Punctuality", rating: "5.0 / 5.0" },
  ],
};
