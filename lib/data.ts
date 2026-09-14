export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  image: string;
  badge?: string;
  pastelTag?: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface WhyCard {
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Industry {
  name: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface ExtraService {
  name: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "cctv",
    title: "CCTV Camera Systems",
    description: "HD CCTV cameras, recording systems, remote monitoring and complete installation for homes, offices, factories, shops and commercial properties.",
    bullets: ["Protect what matters with reliable surveillance", "24/7 HD CCTV & Smartphone Monitoring", "Homes, offices, factories & shops"],
    icon: "cctv",
    image: "/mastech-cctv-surveillance.jpg",
    badge: "Surveillance",
    pastelTag: "bg-[#e1f3fe] text-[#1f6c9f] border-[#cbe9fd]",
  },
  {
    id: "solar",
    title: "Solar Systems",
    description: "We provide complete solar system solutions including consultation, installation and maintenance for residential and commercial requirements.",
    bullets: ["Reduce your electricity bills with smart solar", "Net-Metering & Tier-1 Bifacial Solar", "Residential & Commercial Engineering"],
    icon: "solar",
    image: "/mastech-solar-rooftop.jpg",
    badge: "Solar Power",
    pastelTag: "bg-[#fbf3db] text-[#956400] border-[#f5e6b7]",
  },
  {
    id: "walkthrough",
    title: "Walk Through Gates",
    description: "Professional walk-through metal detector gate solutions for offices, malls, factories, events and other commercial locations.",
    bullets: ["Advanced security screening for high-security areas", "Pinpoint Multi-Zone Detection", "Offices, malls, factories & events"],
    icon: "walkthrough",
    image: "/mastech-walkthrough-gate.jpg",
    badge: "Access Screening",
    pastelTag: "bg-[#edf3ec] text-[#346538] border-[#d2e4d0]",
  },
  {
    id: "barrier",
    title: "Automatic Barrier Gate Systems",
    description: "Automatic barrier gate solutions designed for parking areas, offices, factories, residential communities and commercial buildings.",
    bullets: ["Smart entry and exit control for modern properties", "Rapid cycle boom barrier motors", "Parking, plazas & residential communities"],
    icon: "barrier",
    image: "/mastech-barrier-gate.jpg",
    badge: "Vehicle Control",
    pastelTag: "bg-[#edf3ec] text-[#346538] border-[#d2e4d0]",
  },
  {
    id: "fencing",
    title: "Electric Fencing",
    description: "Electric fencing solutions designed to help secure homes, warehouses, factories, farms and other sensitive areas.",
    bullets: ["Strong perimeter security for your property", "High-voltage monitored deterrent pulse", "Homes, warehouses, factories & farms"],
    icon: "fencing",
    image: "/mastech-electric-fence.jpg",
    badge: "Perimeter Defense",
    pastelTag: "bg-[#fdebec] text-[#9f2f2d] border-[#fbd4d6]",
  },
  {
    id: "elevator",
    title: "Elevator Systems",
    description: "Elevator installation, modernization, maintenance and after-sales support for residential and commercial buildings.",
    bullets: ["Safe, smooth and reliable vertical transportation", "Passenger & freight elevator engineering", "Modernization & scheduled maintenance"],
    icon: "elevator",
    image: "/mastech-elevator-lift.jpg",
    badge: "Vertical Transit",
    pastelTag: "bg-[#fbf3db] text-[#956400] border-[#f5e6b7]",
  },
  {
    id: "escalator",
    title: "Escalator Systems",
    description: "Installation, maintenance and servicing solutions for malls, offices, commercial buildings and other high-traffic environments.",
    bullets: ["Professional escalator solutions for modern spaces", "High-traffic commercial engineering", "Safety sensors & emergency braking"],
    icon: "escalator",
    image: "/mastech-escalator-system.jpg",
    badge: "Commercial Escalators",
    pastelTag: "bg-[#f7f6f3] text-[#787774] border-[#eaeaea]",
  },
  {
    id: "electrical",
    title: "Electrical & Engineering Services",
    description: "Professional electrical and engineering services designed around safety, performance and long-term reliability.",
    bullets: ["Reliable engineering from installation to maintenance", "Commercial & industrial distribution panels", "Certified electrical safety standards"],
    icon: "electrical",
    image: "/mastech-electrical-panel.jpg",
    badge: "Engineering Works",
    pastelTag: "bg-[#e1f3fe] text-[#1f6c9f] border-[#cbe9fd]",
  },
];

export const extraServices: ExtraService[] = [
  { name: "Networking & IT infrastructure", icon: "network" },
  { name: "Fire alarm & fire-fighting systems", icon: "fire" },
  { name: "Anti-terrorism equipment", icon: "shield" },
  { name: "Smart home security systems", icon: "home" },
  { name: "Commercial roller shutters", icon: "shutter" },
  { name: "Automatic gates & access control", icon: "gate" },
];

export const whyCards: WhyCard[] = [
  {
    title: "Quality You Can Trust",
    description: "We focus on reliable products and professional workmanship.",
    icon: "star",
    image: "/mastech-brand-board.jpg",
  },
  {
    title: "Professional Installation",
    description: "Our solutions are installed with attention to safety, performance and quality.",
    icon: "wrench",
    image: "/mastech-electrical-panel.jpg",
  },
  {
    title: "After-Sales Support",
    description: "We provide ongoing technical assistance and maintenance support.",
    icon: "headset",
    image: "/images/projects/cctv_project_1789142462803.jpg",
  },
  {
    title: "Competitive Prices",
    description: "Practical and cost-effective solutions for different project requirements.",
    icon: "shield",
    image: "/mastech-hardware-hero.jpg",
  },
  {
    title: "Complete Solutions",
    description: "From consultation and site survey to installation and maintenance — we handle the complete process.",
    icon: "badge",
    image: "/hero-industrial.jpg",
  },
  {
    title: "Certified Engineers & Warranty",
    description: "Certified electrical safety standards and 1-year comprehensive on-site warranty.",
    icon: "shield",
    image: "/mastech-cctv-surveillance.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Raza",
    role: "Factory Manager",
    company: "Industrial Zone, Islamabad",
    text: "Mas Tech installed our complete CCTV and electric fencing system. The team was professional, punctual and the quality of work is outstanding. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sara Khan",
    role: "Homeowner",
    company: "F-7 Sector, Islamabad",
    text: "We got our solar system from Mas Tech and the savings on electricity bills are incredible. The installation was clean and they explained everything clearly.",
    rating: 5,
  },
  {
    name: "Bilal Malik",
    role: "Operations Director",
    company: "Shopping Mall, Rawalpindi",
    text: "They installed our walk-through gates, barrier system and CCTV all at once. Zero downtime, excellent coordination. After-sales support is top class.",
    rating: 5,
  },
];

export interface OfficeLocation {
  city: string;
  type: string;
  address: string;
  details?: string;
}

export const companyInfo = {
  name: "Mas Tech Engineering",
  tagline: "Smart Solutions, Strong Security, Bright Future",
  phones: [
    { display: "0321-2103576", raw: "+923212103576", intl: "+92-321-2103576", label: "Primary Helpline & WhatsApp" },
    { display: "0336-9222274", raw: "+923369222274", intl: "+92-336-9222274", label: "Engineering Desk & WhatsApp" },
  ],
  email: "mastechengineering@outlook.com",
  offices: {
    headOffice: {
      city: "Karachi",
      type: "Head Office",
      address: "Suit No. # 7-8, Mina Avenue, Shahrah-e-Faisal, Karachi.",
    },
    branchOffice: {
      city: "Islamabad",
      type: "Branch Office",
      address: "Suit No. # 203., J1 Tower, B-Block, Faisal Town, Islamabad.",
    },
  },
  workingHours: "Saturday – Thursday, 9:00 am – 7:00 pm",
};

export const processSteps: ProcessStep[] = [
  { num: "01", title: "Free Site Survey", description: "An engineer visits your site to understand the layout and your security needs — completely free of charge." },
  { num: "02", title: "Quotation & Design", description: "You get a clear, itemised quotation with the right system for your budget. No hidden costs." },
  { num: "03", title: "Professional Install", description: "Our engineers install and commission the system with minimal disruption to your daily operations." },
  { num: "04", title: "Ongoing Support", description: "One year of warranty plus a direct line for maintenance, servicing and technical support." },
];

export const industries: Industry[] = [
  { name: "Homes & Residences", icon: "home", description: "Smart security and solar solutions for residential properties of every size." },
  { name: "Corporate Offices", icon: "office", description: "Access control, CCTV and networking for modern office buildings." },
  { name: "Factories", icon: "factory", description: "Industrial-grade perimeter security and electrical systems for manufacturing plants." },
  { name: "Shopping Malls", icon: "mall", description: "Walk-through gates, escalators, elevators and full surveillance for high-traffic retail." },
  { name: "Commercial Buildings", icon: "building", description: "Complete engineering packages for mixed-use and commercial real estate." },
  { name: "Industrial Projects", icon: "industrial", description: "Large-scale engineering and security installations for industrial complexes." },
];
