export interface TreatmentItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Rehabilitation & Surgery" | "Cosmetics & Aesthetics" | "Preventive & General" | "Specialized Care";
  shortDescription: string;
  fullOverview: string;
  indications: string[];
  symptoms: string[];
  procedureSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: string[];
  patientTips: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  duration: string;
  isFeatured?: boolean;
}

export const TREATMENTS: TreatmentItem[] = [
  {
    id: "full-mouth-rehabilitation",
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    subtitle: "Comprehensive Functional & Aesthetic Bite Reconstruction",
    category: "Rehabilitation & Surgery",
    shortDescription:
      "A tailored restorative blueprint to rebuild severely worn, collapsed, missing, or broken teeth, restoring natural chewing balance, jaw comfort, and smile aesthetics.",
    fullOverview:
      "Full Mouth Rehabilitation (FMR) is an individualized multidisciplinary approach combining prosthodontics, restorative dentistry, and occlusal science. Designed for patients facing multiple compromised teeth, loss of vertical facial height, chronic chewing discomfort, or severe enamel attrition, FMR restores the entire stomatognathic system into physiological harmony.",
    indications: [
      "Severe generalized attrition or enamel erosion from acidity or bruxism",
      "Multiple missing, broken, or heavily decayed teeth",
      "Collapsed bite and reduced facial lower height",
      "Temporomandibular joint (TMJ) muscular tension from uneven dental contacts",
      "Longstanding inability to chew food comfortably on both sides",
    ],
    symptoms: [
      "Teeth appearing progressively shorter or chipped",
      "Generalized sensitivity when chewing warm or cold foods",
      "Jaw muscle fatigue when eating hearty foods",
      "Difficulty chewing properly leading to dietary limitations",
    ],
    procedureSteps: [
      {
        step: "Phase 1",
        title: "Comprehensive Occlusal & Clinical Diagnostics",
        description:
          "High-definition photography, diagnostic study models, digital bite relationship recording, and periodontal stability evaluation.",
      },
      {
        step: "Phase 2",
        title: "Wax-Up Simulation & Functional Testing",
        description:
          "Pre-visualization of the target bite height and smile contours using temporary prototypes, allowing the patient to test chewing comfort and phonetics before final restorations.",
      },
      {
        step: "Phase 3",
        title: "Foundational Restorations & Periodontal Health",
        description:
          "Stabilizing underlying teeth, performing gentle endodontic or conservative periodontal therapy as necessary.",
      },
      {
        step: "Phase 4",
        title: "Precision Ceramic & Zirconia Restorations",
        description:
          "Fabrication and meticulous bonding of micro-etched zirconia or lithium disilicate crowns and onlays calibrated to the balanced bite relationship.",
      },
    ],
    benefits: [
      "Restores effortless, balanced chewing across all teeth",
      "Re-establishes natural facial proportions and youthful lip support",
      "Protects remaining tooth structures from catastrophic fracture",
      "Long-term structural stability designed with biocompatible ceramics",
    ],
    patientTips: [
      "Schedule a dedicated diagnostic session where Dr. Himanshu Shah will photograph and review your bite step-by-step.",
      "Bring any previous dental records or X-rays to help evaluate long-term wear patterns.",
      "Wear a custom protective nightguard post-rehabilitation if you have nocturnal clenching habits.",
    ],
    faq: [
      {
        question: "How long does a Full Mouth Rehabilitation take?",
        answer:
          "Because every case is uniquely planned, the timeline typically ranges between 3 to 8 weeks depending on whether phased healing or bite adjustment is required. Treatment is paced comfortably to ensure complete phonetic and chewing adaptation at each stage.",
      },
      {
        question: "Is Full Mouth Rehabilitation painful?",
        answer:
          "At Olive Dental Care, we prioritize gentle local anesthesia and gradual, conservative preparations. You will never leave without comfortable protective temporary restorations in place.",
      },
      {
        question: "How do I know if I need Full Mouth Rehabilitation or just single crowns?",
        answer:
          "If wear or loss of teeth has altered how your back teeth meet, or if individual repairs keep chipping due to excessive bite forces, a comprehensive full-mouth evaluation is the standard of care to stop progressive damage.",
      },
    ],
    duration: "Phased over 3–6 comfortable appointments",
    isFeatured: true,
  },
  {
    id: "root-canal-treatment",
    slug: "root-canal-treatment",
    title: "Gentle Root Canal Treatment",
    subtitle: "Modern Rotary Endodontics for Pain Relief & Natural Tooth Preservation",
    category: "Rehabilitation & Surgery",
    shortDescription:
      "Precise, comfortable root canal therapy using rotary nickel-titanium instrumentation and apex locators to eliminate infection while saving your natural tooth structure.",
    fullOverview:
      "When deep tooth decay, hairline fractures, or trauma reach the internal pulp tissue containing nerves and blood vessels, irreversible inflammation causes persistent throbbing pain. Modern root canal treatment at Olive Dental Care gently removes diseased tissue, disinfects the microscopic canal anatomy, and seals the space three-dimensionally, immediately halting infection without requiring tooth extraction.",
    indications: [
      "Deep dental caries extending into the dental pulp",
      "Lingering throbbing pain, especially when lying down at night",
      "Sharp pain radiating to the jaw, ear, or temple upon biting",
      "Swelling or small gum boil (pimple) near the root tip",
      "Discoloration of a tooth following physical injury or trauma",
    ],
    symptoms: [
      "Persistent ache aggravated by hot teas or warm foods",
      "Severe sensitivity that does not subside after removing the cold stimulus",
      "Pain when chewing or touching the affected tooth",
    ],
    procedureSteps: [
      {
        step: "Step 1",
        title: "Comfort & Profound Local Anesthesia",
        description:
          "Gentle administration of targeted anesthetic to ensure the entire tooth and surrounding tissues are completely numb and relaxed.",
      },
      {
        step: "Step 2",
        title: "Micro-Access & Canal Disinfection",
        description:
          "Creating a conservative conservative access cavity and cleaning infected pulp canals using flexible rotary NiTi instruments and warm ultrasonic irrigation.",
      },
      {
        step: "Step 3",
        title: "Hermetic 3D Canal Sealing (Obturation)",
        description:
          "Filling the sterile canal conduits with biocompatible gutta-percha and bioceramic sealer to prevent bacterial re-entry.",
      },
      {
        step: "Step 4",
        title: "Structural Core & Protective Crown",
        description:
          "Rebuilding the lost tooth volume with a bonded core buildup, followed by a custom ceramic or zirconia crown to restore full chewing resistance.",
      },
    ],
    benefits: [
      "Immediately relieves acute toothache and stops bone infection",
      "Preserves your authentic natural tooth root in the jawbone",
      "Prevents neighboring teeth from shifting out of alignment",
      "Completed in one or two comfortable, unhurried appointments",
    ],
    patientTips: [
      "Avoid chewing hard foods on the treated side until the final protective crown is placed.",
      "Take prescribed mild anti-inflammatory medication as directed to keep tissues calm during healing.",
    ],
    faq: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "No. With modern local anesthetics and contemporary rotary instruments, a root canal feels very similar to receiving a standard dental filling. In fact, the procedure is what relieves the intense pain caused by the infected nerve.",
      },
      {
        question: "Can a root canal be completed in a single visit?",
        answer:
          "Many non-complicated cases with localized pulpitis can be comfortably finished in a single 45-to-60 minute sitting. Cases with active peri-apical infection may receive an intermediate soothing medication to ensure thorough biological disinfection.",
      },
      {
        question: "Is a dental crown always necessary after a root canal?",
        answer:
          "For back chewing teeth (molars and premolars), a crown is essential because a non-vital tooth loses natural moisture elasticity and requires circumferential reinforcement to prevent horizontal fractures under heavy chewing loads.",
      },
    ],
    duration: "45–60 minutes (Single or 2 visits)",
    isFeatured: true,
  },
  {
    id: "smile-makeover",
    slug: "smile-makeover",
    title: "Smile Makeovers & Cosmetic Dentistry",
    subtitle: "Harmonious, Conservative Aesthetic Dentistry Tailored to Your Face",
    category: "Cosmetics & Aesthetics",
    shortDescription:
      "Subtle, natural smile transformations using hand-layered porcelain veneers, composite artistry, and gum line recontouring to enhance symmetry and self-confidence.",
    fullOverview:
      "A smile makeover at Olive Dental Care is not about artificial, unnaturally opaque white blocks. We follow an organic modernism philosophy: respecting your facial proportions, lips, complexion, and individual character to design a radiant, authentic smile that feels effortlessly yours.",
    indications: [
      "Discolored, tetracycline-stained, or fluorosis-affected enamel resistant to whitening",
      "Gaps, spacing (diastema), or mild overlapping between front teeth",
      "Chipped, uneven, or jagged incisal edges",
      "Asymmetric gum line or worn-down front smile curve",
      "Old, discolored, or mismatched composite fillings",
    ],
    symptoms: [
      "Hesitation to smile openly in photographs or social interactions",
      "Noticing visible shadows or dark spaces when speaking",
      "Dissatisfaction with the color or shape of front teeth",
    ],
    procedureSteps: [
      {
        step: "1. Smile Analysis",
        title: "Facial Esthetic Assessment & Digital Photography",
        description:
          "Detailed capture of your smile dynamics, speech phonetics, lip movement, and tooth display at rest and in full smile.",
      },
      {
        step: "2. Aesthetic Mockup",
        title: "Direct In-Mouth Trial (Mock-Up)",
        description:
          "Previewing the proposed shapes and lengths directly on your teeth using temporary resin before any dental work is performed.",
      },
      {
        step: "3. Minimal Preparation",
        title: "Enamel-Preserving Micro-Preparation",
        description:
          "Ultra-conservative contouring confined strictly to the outer enamel layer (often as thin as 0.3mm to 0.5mm).",
      },
      {
        step: "4. Handcrafted Bonding",
        title: "Individual Ceramic Layering & Light Curing",
        description:
          "Bonding custom ceramic veneers or composite resins using high-strength adhesive protocols for seamless, invisible margins.",
      },
    ],
    benefits: [
      "Naturally brighter, balanced smile without looking fake or oversized",
      "Ultra-conservative enamel preservation approach",
      "High stain resistance against tea, coffee, and spices",
      "Reinforces chipped or weakened front enamel edges",
    ],
    patientTips: [
      "Bring photos of smiles you admire to help communicate your aesthetic preferences during consultation.",
      "Maintain twice-daily gentle brushing with non-abrasive toothpaste to keep ceramic luster pristine.",
    ],
    faq: [
      {
        question: "Will my smile look artificial or too white?",
        answer:
          "Never. Dr. Himanshu Shah selects multi-tonal ceramics featuring natural enamel translucency, subtle mamelons, and gentle incisal halos that reflect light just like healthy organic teeth.",
      },
      {
        question: "How long do porcelain veneers last?",
        answer:
          "With proper oral hygiene and routine bi-annual dental checkups, high-quality bonded porcelain veneers routinely last 10 to 15+ years.",
      },
    ],
    duration: "2 to 3 appointments",
    isFeatured: true,
  },
  {
    id: "teeth-cleaning-scaling",
    slug: "teeth-cleaning-scaling",
    title: "Teeth Cleaning & Ultrasonic Scaling",
    subtitle: "Gentle Gum Care, Calculus Removal & Preventive Oral Health",
    category: "Preventive & General",
    shortDescription:
      "Thorough yet gentle removal of stubborn calculus, bacterial plaque, and superficial stains using fine ultrasonic tips to maintain strong pink gums and fresh breath.",
    fullOverview:
      "Even with meticulous daily brushing and flossing, saliva minerals harden plaque into rock-hard calculus (tartar) over time. Left untreated, subgingival calculus harbors bacteria that trigger chronic gingivitis, bleeding gums, bad breath, and gradual bone resorption. Professional ultrasonic scaling safely dislodges deposits without scratching tooth enamel.",
    indications: [
      "Bleeding gums when brushing or biting into apples",
      "Visible yellowish or dark brown tartar accumulation behind lower front teeth",
      "Persistent morning bad breath or unpleasant taste",
      "Routine 6-month preventive maintenance for all family members",
    ],
    symptoms: [
      "Puffy, reddish gum margins",
      "Gum tenderness when eating hard foods",
      "Feeling roughness on the tongue when touching the back of front teeth",
    ],
    procedureSteps: [
      {
        step: "Examination",
        title: "Periodontal Tissue & Gum Health Evaluation",
        description: "Checking gum pocket depths, tissue tone, and identifying areas of plaque retention.",
      },
      {
        step: "Ultrasonic Scaling",
        title: "Micron-Vibration Plaque & Tartar Disruption",
        description:
          "Fine piezoelectric water-cooled tips glide effortlessly over tooth surfaces to dislodge hardened calculus safely.",
      },
      {
        step: "Stain Removal",
        title: "Gentle Micro-Polishing",
        description:
          "Polishing paste removes extrinsic tea, coffee, and food stains, leaving enamel ultra-smooth to resist future plaque buildup.",
      },
      {
        step: "Hygiene Guidance",
        title: "Personalized Home Care Coaching",
        description:
          "Demonstrating tailored interdental brushing or flossing techniques adapted to your specific tooth anatomy.",
      },
    ],
    benefits: [
      "Stops gum bleeding and restores healthy, firm pink gingiva",
      "Prevents irreversible bone loss caused by untreated periodontitis",
      "Instantly removes extrinsic stains and refreshes oral breath",
      "Comfortable procedure completed in a relaxing single appointment",
    ],
    patientTips: [
      "Mild transient sensitivity to cold drinks may occur for 24-48 hours after removing heavy tartar; this is completely normal as gums heal.",
      "Schedule routine cleaning every 6 months to avoid heavy calculus accumulation.",
    ],
    faq: [
      {
        question: "Does teeth cleaning make teeth loose or cause gaps?",
        answer:
          "This is a common myth. Scaling does not loosen teeth. When heavy tartar deposits that were artificially bridging inflamed teeth are removed, you may feel natural anatomical spaces that were previously plugged with infected bacteria. Cleaning actually saves your teeth from falling out.",
      },
      {
        question: "Does scaling damage tooth enamel?",
        answer:
          "No. Ultrasonic tips vibrate at safe frequencies that break brittle tartar deposits without abrading hard mineralized tooth enamel.",
      },
    ],
    duration: "30–45 minutes",
    isFeatured: true,
  },
  {
    id: "dental-crowns",
    slug: "dental-crowns",
    title: "Precision Dental Crowns & Bridges",
    subtitle: "Custom Zirconia & Ceramic Restorations for Maximum Chewing Strength",
    category: "Rehabilitation & Surgery",
    shortDescription:
      "Biocompatible, metal-free zirconia and aesthetic ceramic crowns custom-milled to cap, protect, and restore fractured or root-canal-treated teeth.",
    fullOverview:
      "When a tooth has lost substantial structural volume due to extensive decay, previous large fillings, or root canal therapy, a dental crown acts as a protective 360-degree helmet. At Olive Dental Care, we utilize high-translucency monolithic zirconia and lithium disilicate materials that match your natural tooth shade while withstanding immense masticatory forces.",
    indications: [
      "Reinforcing teeth following root canal treatment",
      "Restoring severely cracked, fractured, or heavily filled teeth",
      "Replacing old worn metal crowns with dark gum margins",
      "Bridging small gaps where a single tooth is missing",
    ],
    symptoms: [
      "Sharp pain when releasing bite on hard nuts or crusty bread",
      "Large portion of tooth broken off leaving a sharp edge",
      "Food constantly packing into a deeply hollowed tooth",
    ],
    procedureSteps: [
      {
        step: "Preparation",
        title: "Gentle Tooth Shaping with Clear Margins",
        description: "Careful, conservative contouring to establish smooth chamfer margins for seamless fit.",
      },
      {
        step: "Digital Impression",
        title: "Precision Impression & Shade Matching",
        description: "Capturing exact tooth dimensions and calibrating the color shade to your adjacent natural teeth.",
      },
      {
        step: "Temporary Protection",
        title: "Comfortable Provisional Crown",
        description: "Protecting the prepared tooth while the definitive restoration is crafted in the dental laboratory.",
      },
      {
        step: "Bonding",
        title: "Meticulous Cementation & Occlusal Verification",
        description: "Securing the crown with resin cement and finely polishing the bite for perfect chewing balance.",
      },
    ],
    benefits: [
      "Restores 100% full chewing efficiency without fear of tooth fracture",
      "Metal-free materials eliminate dark gray lines at the gum border",
      "Exceptional longevity and wear compatibility with opposing natural teeth",
      "Imperceptible color integration with neighboring dentition",
    ],
    patientTips: [
      "Brush and floss normally around your crown margins to maintain gum health.",
      "Visit for a 6-month checkup to verify the integrity of the crown margins.",
    ],
    faq: [
      {
        question: "What is the difference between Zirconia and Metal-Ceramic crowns?",
        answer:
          "Zirconia is 100% metal-free, biocompatible, and virtually unbreakable. Traditional metal-ceramic crowns have a dark metal substructure that can reveal an unsightly gray line over time if gums recede, whereas Zirconia maintains a warm, lifelike appearance.",
      },
      {
        question: "Can I chew sticky foods with my new crown?",
        answer:
          "Once bonded with modern permanent resin cements, your crown functions just like a natural healthy tooth. We simply recommend standard care such as avoiding chewing non-food objects like ice or bottle caps.",
      },
    ],
    duration: "2 visits over 4–6 days",
    isFeatured: false,
  },
  {
    id: "wisdom-tooth-removal",
    slug: "wisdom-tooth-removal",
    title: "Wisdom Tooth Removal & Minor Oral Surgery",
    subtitle: "Atraumatic Extraction Protocols for Impacted Third Molars",
    category: "Rehabilitation & Surgery",
    shortDescription:
      "Gentle, surgical removal of painful, impacted, or tilted wisdom teeth to eliminate recurring infections, swelling, and protect adjacent molars from decay.",
    fullOverview:
      "Wisdom teeth (third molars) frequently lack adequate jaw space to erupt naturally into normal alignment, remaining partially buried beneath gum tissue or tilted sideways against the second molar. This creates a food trap that breeds painful pericoronitis infections, cyst formation, and root resorption. Our clinic emphasizes gentle, atraumatic surgical techniques designed to minimize tissue disturbance, swelling, and downtime.",
    indications: [
      "Painful, swollen gum flap over a partially erupted lower wisdom tooth (pericoronitis)",
      "Food entrapment between wisdom tooth and adjacent healthy molar causing decay",
      "Deeply horizontal, mesioangular, or vertical bony impaction seen on dental X-rays",
      "Orthodontic recommendation to prevent lower front crowding",
    ],
    symptoms: [
      "Difficulty opening your mouth fully (trismus)",
      "Pounding pain radiating to ear, jaw angle, or throat",
      "Bad odor and tenderness at the very back of the mouth",
    ],
    procedureSteps: [
      {
        step: "1. Radiographic Assessment",
        title: "Mapping Canal & Root Anatomy",
        description: "Evaluating exact root curvature and proximity to the inferior alveolar nerve for maximum safety.",
      },
      {
        step: "2. Profound Anesthesia",
        title: "Gentle Local Numbing",
        description: "Ensuring complete numbness so you only feel gentle pressure, never sharp pain.",
      },
      {
        step: "3. Atraumatic Sectioning",
        title: "Micro-Sectioning of the Crown",
        description:
          "Dividing the tooth into small segments allows removal through a minimal opening with minimal bone removal.",
      },
      {
        step: "4. Hemostatic Dressing",
        title: "Gentle Suture & Cold Pack Protocol",
        description: "Placing fine dissolvable sutures to protect the blood clot and providing detailed recovery care.",
      },
    ],
    benefits: [
      "Permanent relief from recurring pericoronal infections and jaw swelling",
      "Protects the irreplaceable second molar from root decay and bone loss",
      "Gentle technique significantly reduces post-operative swelling and discomfort",
      "Smooth recovery with detailed, written post-operative instructions",
    ],
    patientTips: [
      "Bite gently on the sterile gauze pack for 45 minutes following extraction.",
      "Eat soft, cool foods like curd, yogurt, ice cream, and khichdi for the first 24 hours.",
      "Avoid using drinking straws, spitting vigorously, or smoking for 48 hours to preserve the healing blood clot.",
    ],
    faq: [
      {
        question: "Does wisdom tooth extraction hurt during the procedure?",
        answer:
          "No. We utilize effective local anesthetic blocks that completely eliminate pain sensation. You will be aware of some gentle vibration or pressure, but no pain.",
      },
      {
        question: "How many days does recovery take?",
        answer:
          "Most patients resume regular office work and daily routines within 24 to 48 hours. Any mild post-procedure swelling typically resolves over 3 to 4 days with simple prescribed medications.",
      },
    ],
    duration: "30–50 minutes per tooth",
    isFeatured: false,
  },
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    title: "Professional Teeth Whitening",
    subtitle: "Safe, Enamel-Safe Radiant Brightening for Natural Luster",
    category: "Cosmetics & Aesthetics",
    shortDescription:
      "Clinically supervised in-office whitening that lifts years of tea, coffee, and age-related stains safely without harming delicate tooth structure.",
    fullOverview:
      "Unlike abrasive over-the-counter charcoal scrubs or unmonitored home kits that can cause permanent enamel abrasion and acute dentinal hypersensitivity, professional whitening at Olive Dental Care utilizes pH-buffered carbamide and hydrogen peroxide formulas. The active oxygen molecules gently penetrate the micro-porosities of enamel and dentin to dissolve stubborn dark chromogens from within.",
    indications: [
      "Teeth yellowed or stained from daily tea, coffee, or spices",
      "Special occasions such as weddings, public speaking, or graduations",
      "Natural age-related darkening of tooth enamel",
    ],
    symptoms: [
      "Feeling teeth look dull, yellowish, or shadowed in natural daylight",
    ],
    procedureSteps: [
      {
        step: "Step 1",
        title: "Pre-Whitening Polish & Shade Baseline",
        description: "Measuring your current baseline shade using a calibrated dental shade guide.",
      },
      {
        step: "Step 2",
        title: "Protective Gingival Barrier",
        description: "Carefully painting a light-cured barrier over gums to prevent any gel contact with soft tissues.",
      },
      {
        step: "Step 3",
        title: "Active Gel Application & Activation",
        description: "Applying the active brightening formula in gentle 15-minute cycles under clinical supervision.",
      },
      {
        step: "Step 4",
        title: "Desensitizing Fluoride Therapy",
        description: "Applying a nourishing desensitizing remineralization paste to seal tubules and ensure comfort.",
      },
    ],
    benefits: [
      "Noticeably brighter, refreshed smile in a single 45-minute appointment",
      "Safe and non-abrasive: preserves natural enamel integrity",
      "Supervised by a dental surgeon to eliminate gum irritation",
      "Custom shade matching for a natural, authentic aesthetic",
    ],
    patientTips: [
      "Follow the 'white diet' (avoid turmeric, dark curries, tea, and coffee) for the first 48 hours post-whitening.",
      "Brush gently with a sensitivity-relief toothpaste for 3 days post-treatment.",
    ],
    faq: [
      {
        question: "Does teeth whitening weaken enamel?",
        answer:
          "No. Professional dental whitening formulas do not remove or etch enamel; they simply break down organic pigment chains within the mineral matrix.",
      },
      {
        question: "How long do the whitening results last?",
        answer:
          "Results typically last between 1 to 2 years, depending on your dietary habits (tea/coffee intake) and routine oral hygiene maintenance.",
      },
    ],
    duration: "45–60 minutes",
    isFeatured: false,
  },
  {
    id: "restorative-dentistry",
    slug: "restorative-dentistry",
    title: "Tooth-Colored Fillings & Restorations",
    subtitle: "Biomimetic Composite Artistry for Invisible Cavity Repair",
    category: "Preventive & General",
    shortDescription:
      "Durable, mercury-free composite resins color-matched to your enamel for natural repairs of cavities, micro-cracks, and worn margins.",
    fullOverview:
      "Modern dentistry has transitioned entirely away from dark, unsightly amalgam fillings that require aggressive removal of healthy tooth structure. At Olive Dental Care, we practice biomimetic restorative dentistry using nanohybrid composite resins that chemically bond directly to tooth enamel and dentin, conserving maximum natural tooth structure.",
    indications: [
      "Dental decay or dark pits on chewing surfaces of teeth",
      "Replacement of failing, leaking, or discolored old restorations",
      "Repair of small chips, notches, or abfraction lesions at the gumline",
    ],
    symptoms: [
      "Food catching between specific teeth after every meal",
      "Brief sweet or cold sensitivity when eating sweets",
      "Rough spot felt by the tongue",
    ],
    procedureSteps: [
      {
        step: "Diagnosis",
        title: "Visual & Tactile Detection",
        description: "Identifying cavity boundaries with conservative magnification.",
      },
      {
        step: "Gentle Debridement",
        title: "Micro-Preparation",
        description: "Removing only the softened, infected dentin while preserving all healthy surrounding enamel.",
      },
      {
        step: "Layered Placement",
        title: "Anatomical Layering",
        description: "Sculpting the resin in fine increments to recreate natural dental grooves and cusps.",
      },
      {
        step: "Polishing",
        title: "High-Shine Luster Polish",
        description: "Smoothing margins to feel silky to the tongue and resist plaque adhesion.",
      },
    ],
    benefits: [
      "Completely invisible: blends seamlessly into your natural tooth shade",
      "Conserves healthy tooth structure thanks to chemical adhesive bonding",
      "100% metal-free, biocompatible, and mercury-free",
      "Immediate full functional use: eat right after treatment",
    ],
    patientTips: [
      "Address small cavities early before decay reaches the sensitive inner pulp.",
      "Floss daily between restored teeth to keep adjacent surfaces clean.",
    ],
    faq: [
      {
        question: "How long does a composite filling last?",
        answer:
          "High-grade modern composite restorations typically last 7 to 10+ years with good oral hygiene and routine dental examinations.",
      },
    ],
    duration: "25–40 minutes per tooth",
    isFeatured: false,
  },
  {
    id: "orthodontics-braces",
    slug: "orthodontics-braces",
    title: "Orthodontic Consultations & Alignment",
    subtitle: "Modern Braces & Clear Aligners for Balanced Occlusion",
    category: "Specialized Care",
    shortDescription:
      "Targeted alignment solutions for crowded teeth, spacing, and irregular bites to improve oral hygiene access, chewing function, and facial harmony.",
    fullOverview:
      "Straight teeth are about much more than appearance. Malaligned, overlapping teeth harbor plaque in hard-to-reach pockets, predisposing you to localized gum disease, asymmetric tooth wear, and jaw strain. We evaluate and guide patients through customized orthodontic treatment options including aesthetic ceramic brackets and clear aligner systems.",
    indications: [
      "Crowded or overlapping front teeth",
      "Gaps or irregular spacing between teeth",
      "Overbite, underbite, or crossbite affecting chewing",
      "Difficulty cleaning between tight or rotated teeth",
    ],
    symptoms: [
      "Frequent cheek biting when eating",
      "Uneven wear noticeable on front or canine teeth",
      "Self-consciousness when smiling in public",
    ],
    procedureSteps: [
      {
        step: "Consultation",
        title: "Digital Orthodontic Diagnostics",
        description: "Photographic series, bite evaluation, and discussion of patient lifestyle and goals.",
      },
      {
        step: "Treatment Plan",
        title: "Tailored Alignment Strategy",
        description: "Selecting between discreet ceramic braces, traditional brackets, or clear aligners.",
      },
      {
        step: "Monitoring",
        title: "Comfortable Periodic Adjustments",
        description: "Gentle biological tooth movement guided through periodic 4-to-6 week checkups.",
      },
      {
        step: "Retention",
        title: "Retention for Lifelong Stability",
        description: "Custom retainers to ensure your newly aligned teeth remain permanently in position.",
      },
    ],
    benefits: [
      "Significantly improves ease of daily brushing and flossing",
      "Prevents premature tooth wear caused by misaligned bite contacts",
      "Creates natural facial balance and broad, confident smile arc",
      "Discreet options available for working professionals and teens",
    ],
    patientTips: [
      "Maintain diligent oral hygiene using special orthodontic brushes around brackets.",
      "Wear your prescribed retainers diligently following active alignment.",
    ],
    faq: [
      {
        question: "Can adults undergo orthodontic treatment?",
        answer:
          "Yes, absolutely. Healthy teeth can be moved at any age. A substantial portion of orthodontic patients today are adults seeking aesthetic alignment or pre-restorative space correction.",
      },
    ],
    duration: "Varies from 6 to 18 months",
    isFeatured: false,
  },
  {
    id: "pediatric-dentistry",
    slug: "pediatric-dentistry",
    title: "Children's Dental Care",
    subtitle: "Gentle, Positive Dental Experiences for Lifelong Healthy Smiles",
    category: "Specialized Care",
    shortDescription:
      "Compassionate, fear-free dental visits for children focusing on preventive fluoride therapy, pit and fissure sealants, and cavity management in a warm setting.",
    fullOverview:
      "Early childhood dental experiences shape how a person views dental care for the rest of their life. At Olive Dental Care, we take extra time to build trust with young patients using 'tell-show-do' methods, gentle reassurance, and friendly communication. Milk teeth maintain critical space for permanent adult teeth, making early preservation vital.",
    indications: [
      "First dental checkup at age 1 or when the first tooth appears",
      "Cavities in baby molars causing pain or eating difficulties",
      "Deep grooves on chewing teeth requiring protective dental sealants",
      "Preventive fluoride varnish application to strengthen developing enamel",
    ],
    symptoms: [
      "Child avoiding chewing on one side of the mouth",
      "Dark spots or chalky white patches visible on teeth",
      "Complaints of food getting stuck or mild pain after sweet snacks",
    ],
    procedureSteps: [
      {
        step: "Friendly Intro",
        title: "The Friendly Welcome",
        description: "Introducing the child to the dental chair and gentle instruments in a fun, non-threatening manner.",
      },
      {
        step: "Checkup",
        title: "Gentle Visual Examination",
        description: "Checking tooth eruption sequences, bite harmony, and early enamel demineralization.",
      },
      {
        step: "Protection",
        title: "Fluoride Therapy & Sealants",
        description: "Painless application of protective mineral coatings to shield deep grooves from decay.",
      },
      {
        step: "Parent Tips",
        title: "Parent Guidance on Diet & Brushing",
        description: "Empowering parents with age-appropriate brushing techniques and snack guidance.",
      },
    ],
    benefits: [
      "Prevents early childhood tooth decay and toothache",
      "Maintains essential space in the jaw for permanent adult teeth",
      "Builds positive, fear-free attitudes toward oral health",
      "Helps parents manage nighttime bottle habits and thumb sucking",
    ],
    patientTips: [
      "Never use dental visits as a threat or punishment; present appointments as a fun, positive routine.",
      "Help your child brush twice daily until age 7 or 8 when fine motor skills develop fully.",
    ],
    faq: [
      {
        question: "Why should baby teeth be treated if they fall out anyway?",
        answer:
          "Baby teeth are crucial for chewing nutrition, speech development, and guiding permanent teeth into proper alignment. An infected baby tooth can damage the permanent tooth bud developing right beneath it and cause premature space loss.",
      },
    ],
    duration: "20–30 minutes",
    isFeatured: false,
  },
];
