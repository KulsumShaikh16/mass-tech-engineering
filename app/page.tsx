"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatsCounter from "@/components/home/StatsCounter";
import CommandCenterVisual from "@/components/home/CommandCenterVisual";
import ClientsSection from "@/components/home/ClientsSection";
import {
  SolarIcon,
  CctvIcon,
  BarrierIcon,
  FencingIcon,
  WalkthroughIcon,
  ElevatorIcon,
  EscalatorIcon,
  ElectricalIcon,
  SupplierIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";

const brandLogos = [
  { name: "Hikvision", tag: "AI Surveillance & AcuSense" },
  { name: "Dahua", tag: "Optical Network Hardware" },
  { name: "Longi Solar", tag: "Tier-1 Photovoltaics" },
  { name: "Growatt", tag: "Smart Grid Inverters" },
  { name: "Centurion", tag: "Heavy Barrier Systems" },
  { name: "ZKTeco", tag: "Biometric Access Control" },
  { name: "Nemtek", tag: "Energized Perimeter Fencing" },
  { name: "Schneider", tag: "Industrial Switchgear" },
  { name: "Sungrow", tag: "Commercial Grid Inverters" },
  { name: "Uniview", tag: "Thermal & Smart Optics" },
  { name: "Jinko Solar", tag: "N-Type TOPCon Panels" },
  { name: "Inverex", tag: "Hybrid Power Management" },
];

const trustedClients = [
  // Defence & Military
  { name: "Pakistan Army", abbr: "PA", tag: "Defence & Security", color: "#1a3a2a", logo: "/images/clients/logo-pak-army.png" },
  { name: "Pak Army MI", abbr: "MI", tag: "Military Intelligence", color: "#1a3a2a", logo: "/images/clients/logo-pak-mi.png" },
  { name: "ISI Pak Army", abbr: "ISI", tag: "Intelligence Agency", color: "#1a3a2a", logo: "/images/clients/logo-isi.png" },
  { name: "315 Engineering Pak Army", abbr: "315", tag: "Army Engineering Corps", color: "#1a3a2a", logo: "/images/clients/logo-315-eng.png" },
  { name: "Pak Army SSD", abbr: "SSD", tag: "Army Division", color: "#1a3a2a", logo: "/images/clients/logo-pak-ssd.png" },
  { name: "Pakistan Rangers", abbr: "PR", tag: "Para-Military Force", color: "#2a3a1a", logo: "/images/clients/logo-pak-rangers.png" },
  { name: "Saad School of Army Air Defence", abbr: "SSAAD", tag: "Army Air Defence", color: "#1a2a3a", logo: "/images/clients/logo-saad-aad.png" },
  // Cantonment & Government
  { name: "Cantonment Board Malir Cantt", abbr: "CBM", tag: "Local Government", color: "#2a1a3a", logo: "/images/clients/logo-cantt-board.png" },
  { name: "Cantt Degree College", abbr: "CDC", tag: "Cantonment Education", color: "#3a2a1a", logo: "/images/clients/logo-cantt-college.png" },
  { name: "Askari 5", abbr: "A5", tag: "Army Housing Society", color: "#1a3a2a", logo: "/images/clients/logo-askari5.png" },
  { name: "Askari 4", abbr: "A4", tag: "Army Housing Society", color: "#1a3a2a", logo: "/images/clients/logo-askari.png" },
  // Education
  { name: "APSACS Cambridge", abbr: "APS", tag: "Cambridge Education", color: "#1f4068", logo: "/images/clients/logo-apsacs.png" },
  { name: "APS College", abbr: "APSC", tag: "Army Public College", color: "#1f4068", logo: "/images/clients/logo-aps-college.png" },
  { name: "APS School", abbr: "APS", tag: "Army Public School", color: "#1f4068", logo: "/images/clients/logo-aps-school.png" },
  { name: "CB School", abbr: "CBS", tag: "Cantonment School", color: "#1f4068", logo: "/images/clients/logo-cb-school.png" },
  { name: "Al Kamran School", abbr: "AKS", tag: "Private School", color: "#2a4a1a", logo: "/images/clients/logo-al-kamran.png" },
  { name: "Smart School", abbr: "SS", tag: "Educational Institute", color: "#2a4a1a", logo: "/images/clients/logo-smart-school.png" },
  { name: "Iqra Library Malir Cantt", abbr: "IQL", tag: "Public Library", color: "#3a3a1a", logo: "/images/clients/logo-iqra-library.png" },
  // Healthcare
  { name: "KIMS Medical College", abbr: "KIMS", tag: "Medical Institution", color: "#3a1a1a", logo: "/images/clients/logo-kims.png" },
  { name: "KIMS Girls Hostel", abbr: "KGH", tag: "Medical Hostel", color: "#3a1a1a", logo: "/images/clients/logo-kims-hostel.png" },
  { name: "Kohat CMH", abbr: "CMH", tag: "Combined Military Hospital", color: "#3a1a2a", logo: "/images/clients/logo-kohat-cmh.png" },
  // Religious & Community
  { name: "St. Paul Church Malir Cantt", abbr: "SPC", tag: "Community Church", color: "#3a2a1a", logo: "/images/clients/logo-st-paul.png" },
  // Commercial
  { name: "4dot Market Malir Cantt", abbr: "4M", tag: "Commercial Market", color: "#1a2a3a", logo: "/images/clients/logo-4dot-market.png" },
  { name: "Millennium Mall", abbr: "MM", tag: "Shopping Centre", color: "#1a2a3a", logo: "/images/clients/logo-mill2.png" },
  { name: "Move In Pic Hotel", abbr: "MIPH", tag: "Hospitality", color: "#2a1a2a", logo: "/images/clients/logo-movein-hotel.png" },
  { name: "Parikh Estate", abbr: "PE", tag: "Real Estate", color: "#2a2a1a", logo: "/images/clients/logo-parikh-estate.png" },
  { name: "Zameen.com", abbr: "ZC", tag: "Property Portal", color: "#1a3a3a", logo: "/images/clients/logo-zameen2.png" },
  // Petroleum & Energy
  { name: "PSO Head Office", abbr: "PSO", tag: "State Oil Company", color: "#1a1a3a", logo: "/images/clients/logo-pso.png" },
  { name: "Bilal Petroleum", abbr: "BP", tag: "Petroleum Retail", color: "#1a1a3a", logo: "/images/clients/logo-bilal2.png" },
  { name: "Byco Petroleum Windar", abbr: "BPW", tag: "Petroleum & Refinery", color: "#1a1a3a", logo: "/images/clients/logo-byco2.png" },
  { name: "AMC Pakistan", abbr: "AMC", tag: "Asset Management", color: "#2a1a3a", logo: "/images/clients/logo-amc.png" },
  // Industrial
  { name: "Safey Iron Pvt Ltd", abbr: "SIP", tag: "Iron Manufacturing", color: "#2a2a2a", logo: "/images/clients/logo-safey-iron.png" },
  { name: "Shafeeq Steel Pvt Ltd", abbr: "SSP", tag: "Steel Manufacturing", color: "#2a2a2a", logo: "/images/clients/logo-shafeeq-steel.png" },
  { name: "Adable Oils Pvt Ltd", abbr: "AOP", tag: "Oil Industry", color: "#2a2a1a", logo: "/images/clients/logo-adable-oils.png" },
  { name: "Artistic Denim", abbr: "AD", tag: "Textile Industry", color: "#1a2a2a", logo: "/images/clients/logo-artistic-denim.png" },
  { name: "Hub Salt", abbr: "HS", tag: "Salt Mining & Processing", color: "#2a3a3a", logo: "/images/clients/logo-hub-salt.png" },
  { name: "Bolan Casting Hub", abbr: "BCH", tag: "Metal Casting", color: "#3a2a2a", logo: "/images/clients/logo-bolan-casting.png" },
  { name: "The Burki Tyre", abbr: "TBT", tag: "Automotive & Tyre", color: "#1a2a1a", logo: "/images/clients/logo-burki-tyre.png" },
];

const bentoSystems = [
  {
    id: "cctv",
    title: "CCTV Camera Systems",
    hook: "Protect what matters with reliable surveillance solutions.",
    category: "Optical Surveillance",
    description:
      "HD CCTV cameras, recording systems, remote monitoring and complete installation for homes, offices, factories, shops and commercial properties.",
    specs: ["HD CCTV & 4K Recording", "Remote Mobile Monitoring", "Homes, Offices, Factories & Shops"],
    icon: CctvIcon,
    colSpan: "lg:col-span-6",
    image: "/mastech-cctv-surveillance.jpg",
    pastelTag: "bg-[#e1f3fe] text-[#1f6c9f] border-[#cbe9fd]",
    featuredBadge: "Flagship Security",
  },
  {
    id: "solar",
    title: "Solar Systems",
    hook: "Reduce your electricity bills with smart solar solutions.",
    category: "Renewable Energy",
    description:
      "We provide complete solar system solutions including consultation, installation and maintenance for residential and commercial requirements.",
    specs: ["On-Grid & Hybrid Solar", "Net-Metering Synchronization", "Residential & Commercial Installation"],
    icon: SolarIcon,
    colSpan: "lg:col-span-6",
    image: "/mastech-solar-rooftop.jpg",
    pastelTag: "bg-[#fbf3db] text-[#956400] border-[#f5e6b7]",
    featuredBadge: "Clean Energy",
  },
  {
    id: "walkthrough",
    title: "Walk Through Gates",
    hook: "Advanced security screening for high-security areas.",
    category: "Pedestrian Screening",
    description:
      "Professional walk-through metal detector gate solutions for offices, malls, factories, events and other commercial locations.",
    specs: ["Multi-Zone Pinpoint Detection", "High-Throughput Calibration", "Offices, Malls, Factories & Events"],
    icon: WalkthroughIcon,
    colSpan: "lg:col-span-6",
    image: "/mastech-walkthrough-gate.jpg",
    pastelTag: "bg-[#edf3ec] text-[#346538] border-[#d2e4d0]",
    featuredBadge: "Access Security",
  },
  {
    id: "barrier",
    title: "Automatic Barrier Gate Systems",
    hook: "Smart entry and exit control for modern properties.",
    category: "Vehicle Access Control",
    description:
      "Automatic barrier gate solutions designed for parking areas, offices, factories, residential communities and commercial buildings.",
    specs: ["High-Torque Boom Motors", "RFID & ANPR Integration", "Parking & Commercial Facilities"],
    icon: BarrierIcon,
    colSpan: "lg:col-span-6",
    image: "/mastech-barrier-gate.jpg",
    pastelTag: "bg-[#edf3ec] text-[#346538] border-[#d2e4d0]",
    featuredBadge: "Vehicle Automation",
  },
  {
    id: "fencing",
    title: "Electric Fencing",
    hook: "Strong perimeter security for your property.",
    category: "Perimeter Defense",
    description:
      "Electric fencing solutions designed to help secure homes, warehouses, factories, farms and other sensitive areas.",
    specs: ["Regulated High-Voltage Pulse", "Instant Cut & Short Siren Alerts", "Homes, Warehouses, Factories & Farms"],
    icon: FencingIcon,
    colSpan: "lg:col-span-6",
    image: "/mastech-electric-fence.jpg",
    pastelTag: "bg-[#fdebec] text-[#9f2f2d] border-[#fbd4d6]",
    featuredBadge: "Perimeter Barrier",
  },
  {
    id: "elevator",
    title: "Elevator Systems",
    hook: "Safe, smooth and reliable vertical transportation.",
    category: "Vertical Transit",
    description:
      "Elevator installation, modernization, maintenance and after-sales support for residential and commercial buildings.",
    specs: ["Passenger & Freight Elevators", "Automatic Rescue Device (ARD)", "Modernization & After-Sales Support"],
    icon: ElevatorIcon,
    colSpan: "lg:col-span-6",
    image: "/mastech-elevator-lift.jpg",
    pastelTag: "bg-[#fbf3db] text-[#956400] border-[#f5e6b7]",
    featuredBadge: "Vertical Transit",
  },
  {
    id: "escalator",
    title: "Escalator Systems",
    hook: "Professional escalator solutions for modern commercial spaces.",
    category: "Commercial Transit",
    description:
      "Installation, maintenance and servicing solutions for malls, offices, commercial buildings and other high-traffic environments.",
    specs: ["High-Traffic Commercial Engineering", "Emergency Safety Braking", "Malls, Offices & Commercial Plazas"],
    icon: EscalatorIcon,
    colSpan: "lg:col-span-6",
    image: "/mastech-escalator-system.jpg",
    pastelTag: "bg-[#f7f6f3] text-[#787774] border-[#eaeaea]",
    featuredBadge: "High-Traffic Engineering",
  },
  {
    id: "electrical",
    title: "Electrical & Engineering Services",
    hook: "Reliable engineering solutions from installation to maintenance.",
    category: "Industrial Power",
    description:
      "Professional electrical and engineering services designed around safety, performance and long-term reliability.",
    specs: ["Distribution Switchgear & Panels", "Certified Safety Standards", "Preventive Maintenance Contracts"],
    icon: ElectricalIcon,
    colSpan: "lg:col-span-6",
    image: "/mastech-electrical-panel.jpg",
    pastelTag: "bg-[#e1f3fe] text-[#1f6c9f] border-[#cbe9fd]",
    featuredBadge: "Electrical Works",
  },
  {
    id: "supplier",
    title: "General Order Supplier & Engineering Procurement",
    hook: "One-window procurement: we supply, deliver, and warranty all engineering & technical equipment.",
    category: "Turnkey Procurement & Supply",
    description:
      "All-in-one general order supplier and turnkey procurement across Pakistan. We supply, deliver and commission complete electrical, security, mechanical, IT, solar, hardware, safety gear, and custom industrial equipment for commercial projects, corporate enterprises, and government/defence organizations.",
    specs: ["One-Window Sourcing Across Pakistan", "Tender & Corporate BOQ Fulfillment", "GST/NTN Registered & Engineer Warrantied"],
    icon: SupplierIcon,
    colSpan: "lg:col-span-12",
    image: "/mastech-general-supplier.jpg",
    pastelTag: "bg-[#edf3ec] text-[#346538] border-[#d2e4d0]",
    featuredBadge: "General Order Supplier",
  },
];

const whyCards = [
  {
    num: "01",
    title: "Quality You Can Trust",
    description: "We focus on reliable products and professional workmanship.",
    image: "/mastech-brand-board.jpg",
  },
  {
    num: "02",
    title: "Professional Installation",
    description: "Our solutions are installed with attention to safety, performance and quality.",
    image: "/mastech-electrical-panel.jpg",
  },
  {
    num: "03",
    title: "After-Sales Support",
    description: "We provide ongoing technical assistance and maintenance support.",
    image: "/images/projects/cctv_project_1789142462803.jpg",
  },
  {
    num: "04",
    title: "Competitive Prices",
    description: "Practical and cost-effective solutions for different project requirements.",
    image: "/mastech-hardware-hero.jpg",
  },
  {
    num: "05",
    title: "Complete Solutions",
    description: "From consultation and site survey to installation and maintenance — we handle the complete process.",
    image: "/hero-industrial.jpg",
  },
  {
    num: "06",
    title: "Certified Engineers & Warranty",
    description: "Certified electrical safety standards and 1-year comprehensive on-site warranty.",
    image: "/mastech-cctv-surveillance.jpg",
  },
];

const executionSteps = [
  {
    num: "01",
    title: "Free On-Site Survey",
    description: "Our engineers inspect your facility, analyze electrical loads, and map blind spots.",
  },
  {
    num: "02",
    title: "Technical Blueprint & BOQ",
    description: "Receive a transparent, itemized engineering proposal with zero hidden line items.",
  },
  {
    num: "03",
    title: "Precision Installation",
    description: "Clean industrial cabling, secure structural mounting, and certified safety compliance.",
  },
  {
    num: "04",
    title: "Testing & Handover",
    description: "Full system load testing, staff operator training, and 1-year comprehensive warranty.",
  },
];

const clientReviews = [
  {
    name: "Engr. Tariq Mehmood",
    role: "Plant Operations Director",
    company: "Industrial Estate, Islamabad",
    rating: "5.0",
    text: "Mas Tech installed our commercial solar array alongside Hikvision perimeter cameras. Power bills dropped significantly, and their team resolved inspection approvals seamlessly.",
  },
  {
    name: "Malik Usman",
    role: "Facility General Manager",
    company: "Commercial Plaza, Blue Area",
    rating: "5.0",
    text: "Their automatic boom barrier and ANPR gate installation handles 1,200+ vehicles daily without a hiccup. Professional workmanship and prompt scheduled maintenance.",
  },
  {
    name: "Dr. Asad Rizvi",
    role: "Property Administrator",
    company: "Healthcare Complex, Rawalpindi",
    rating: "5.0",
    text: "From electric perimeter fencing to walk-through gate screening, Mas Tech provided comprehensive security. One trusted team, clear documentation, and prompt warranty support.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO SECTION (Editorial Utilitarian Layout) ────────────────── */}
      <section className="relative pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <CommandCenterVisual />
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. CERTIFIED HARDWARE PARTNERS (Horizontal Scroll Ribbon) ──────────────────────── */}
      <div className="border-y border-[#eaeaea] bg-white py-7 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-medium tracking-wider text-[#787774] uppercase">
                Certified Hardware &amp; Component Partners
              </span>
              <span className="hidden md:inline text-[10px] font-mono text-[#9b9a97]">
                [Scroll / Hover to Pause]
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#346538] flex items-center gap-1.5 self-start sm:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
              100% Genuine Verified Stock
            </span>
          </div>
        </div>

        {/* Horizontal Scrolling Track with Edge Gradient Masks */}
        <div className="relative w-full overflow-x-auto no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]">
          <div className="animate-marquee flex items-center gap-3.5 px-4">
            {[...brandLogos, ...brandLogos].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="w-[210px] sm:w-[230px] flex-shrink-0 py-3.5 px-4 rounded-xl bg-[#fbfbfa] border border-[#eaeaea] hover:border-[#111111] hover:bg-white transition-all duration-200 hover:shadow-[0_4px_16px_rgba(17,17,17,0.04)] flex flex-col items-center justify-center text-center cursor-default group"
              >
                <div className="text-xs sm:text-sm font-semibold text-[#111111] font-mono group-hover:text-[#111111] transition-colors">
                  {brand.name}
                </div>
                <div className="text-[10px] text-[#787774] mt-1 truncate max-w-full font-mono">
                  {brand.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. OUR SERVICES (8 Comprehensive Engineering Divisions) ───────────────── */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          
          {/* Section Heading */}
          <AnimatedSection className="mb-14 max-w-3xl">
            <div className="inline-block text-[11px] font-mono uppercase tracking-[0.16em] text-[#787774] mb-3 px-2.5 py-0.5 rounded-full border border-[#eaeaea] bg-white">
              Turnkey Solutions
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] tracking-tight mb-3">
              Our Services
            </h2>
            <p className="text-sm sm:text-base text-[#787774] leading-relaxed">
              Complete Engineering, Security &amp; General Order Supply Solutions for Homes, Offices, Factories, Government &amp; Commercial Projects.
              Every installation and equipment delivery is executed with attention to safety, performance, and long-term reliability.
            </p>
          </AnimatedSection>

          {/* Full-Scope Engineering & General Order Supply Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            {bentoSystems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <AnimatedSection key={item.id} delay={idx * 0.05} className={item.colSpan}>
                  <div className="h-full rounded-2xl bg-white border border-[#eaeaea] hover:border-[#111111] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(17,17,17,0.04)] flex flex-col justify-between group overflow-hidden">
                    <div className="flex-1 flex flex-col">
                      {/* Card Header: Icon & Category */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-lg bg-[#f7f6f3] border border-[#eaeaea] flex items-center justify-center text-[#111111] group-hover:border-[#111111] group-hover:bg-white transition-all">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        {item.featuredBadge && (
                          <span className={`text-[10px] font-mono font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.pastelTag}`}>
                            {item.featuredBadge}
                          </span>
                        )}
                      </div>

                      {/* Hardware Photograph */}
                      {item.image && (
                        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-[#eaeaea] mb-5 bg-[#fbfbfa]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 700px"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        </div>
                      )}

                      <div className="text-[11px] font-mono text-[#787774] uppercase tracking-wider mb-1">
                        {item.category}
                      </div>
                      <h3 className="font-editorial text-xl sm:text-2xl font-normal text-[#111111] mb-1.5 group-hover:text-[#2f3437] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-[#111111] mb-2.5">
                        {item.hook}
                      </p>
                      <p className="text-xs sm:text-sm text-[#787774] leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Technical Spec List */}
                      <ul className="space-y-2 border-t border-[#eaeaea] pt-4 mb-6 mt-auto">
                        {item.specs.map((spec) => (
                          <li key={spec} className="flex items-center gap-2 text-xs text-[#2f3437] font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Learn More Action Link */}
                    <Link
                      href={`/contact?service=${encodeURIComponent(item.title)}`}
                      className="button-tactile pt-4 border-t border-[#eaeaea] flex items-center justify-between text-xs font-medium text-[#111111] hover:text-[#787774] transition-colors focus-visible:outline-none"
                    >
                      <span className="font-semibold">Learn More &rarr;</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="button-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] border border-[#eaeaea] bg-white text-[#111111] text-xs font-medium hover:border-[#111111] transition-all"
            >
              <span>Explore all engineering divisions</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. COMPLETE SOLUTIONS. ONE TRUSTED PARTNER. (Value Proposition Banner) ── */}
      <section className="py-20 bg-[#f7f6f3] border-y border-[#eaeaea] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6">
              <div className="inline-block text-[11px] font-mono uppercase tracking-[0.16em] text-[#787774] mb-3 px-2.5 py-0.5 rounded-full border border-[#eaeaea] bg-white">
                Turnkey Reliability
              </div>
              <h2 className="font-editorial text-2xl sm:text-4xl font-normal text-[#111111] tracking-tight mb-4">
                Complete Solutions. One Trusted Partner.
              </h2>
              <p className="text-sm sm:text-base text-[#787774] leading-relaxed mb-6">
                Whether you need security, solar, access control, elevators, escalators or electrical engineering solutions, MAS TECH ENGINEERING provides professional solutions tailored to your requirements.
              </p>
              
              <div className="space-y-3 font-mono text-xs text-[#2f3437] pt-5 border-t border-[#eaeaea]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-[#787774]">DIRECT CALL &amp; WHATSAPP:</span>
                  <div className="flex items-center gap-2 font-semibold text-[#111111] tabular-nums">
                    <a href="tel:+923212103576" className="hover:text-[#346538] hover:underline">0321-2103576</a>
                    <span className="text-[#d0d0d0]">|</span>
                    <a href="tel:+923369222274" className="hover:text-[#346538] hover:underline">0336-9222274</a>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#787774]">QUALITY FOCUS:</span>
                  <span className="font-semibold text-[#111111]">100% Genuine Hardware &amp; Certified Labor</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#787774]">SUPPORT GUARANTEE:</span>
                  <span className="font-semibold text-[#346538]">Ongoing Technical Assistance</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="button-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#111111] hover:bg-[#2f3437] text-white font-medium text-xs transition-all"
                >
                  <span>GET A FREE QUOTATION</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://wa.me/923212103576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-white border border-[#eaeaea] hover:bg-[#fbfbfa] text-[#111111] font-medium text-xs transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl border border-[#eaeaea] bg-white p-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden group">
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black">
                  <video
                    src="/mastech_promo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="px-3.5 py-2.5 flex items-center justify-between font-mono text-[11px] text-[#787774] border-t border-[#eaeaea] mt-2">
                  <span>MAS TECH ENGINEERING · ONE TRUSTED PARTNER</span>
                  <span className="text-[#346538] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                    CERTIFIED
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE MAS TECH ENGINEERING? ───────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#eaeaea] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <AnimatedSection className="max-w-3xl mb-14">
            <div className="inline-block text-[11px] font-mono uppercase tracking-[0.16em] text-[#787774] mb-3 px-2.5 py-0.5 rounded-full border border-[#eaeaea] bg-[#f7f6f3]">
              Our Commitment
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] tracking-tight mb-3">
              Why Choose MAS TECH ENGINEERING?
            </h2>
            <p className="text-sm sm:text-base text-[#787774] leading-relaxed">
              We focus on reliable products, professional workmanship, and complete turnkey execution for residential and commercial requirements.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.06}>
                <div className="p-6 sm:p-7 rounded-2xl bg-[#fbfbfa] border border-[#eaeaea] hover:border-[#111111] hover:bg-white transition-all duration-300 hover:shadow-[0_6px_24px_rgba(17,17,17,0.04)] h-full flex flex-col justify-between group overflow-hidden">
                  <div>
                    <div className="font-mono text-base font-bold text-[#111111] mb-4 tabular-nums flex items-center justify-between">
                      <span>{card.num}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#eaeaea] group-hover:bg-[#111111] transition-colors" />
                    </div>

                    {card.image && (
                      <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#eaeaea] mb-4 bg-[#fbfbfa]">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <h3 className="font-editorial text-xl font-normal text-[#111111] mb-2.5 group-hover:text-[#2f3437] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#787774] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. 4-STEP DELIVERY PIPELINE ────────────────── */}
      <section className="py-20 lg:py-24 relative bg-[#f7f6f3]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <AnimatedSection className="max-w-2xl mb-14">
            <div className="inline-block text-[11px] font-mono uppercase tracking-[0.16em] text-[#787774] mb-3 px-2.5 py-0.5 rounded-full border border-[#eaeaea] bg-white">
              Deployment Milestones
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] tracking-tight mb-3">
              System Delivery Pipeline
            </h2>
            <p className="text-sm sm:text-base text-[#787774] leading-relaxed">
              Transparent project milestones from initial site assessment through to final warranty signoff.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {executionSteps.map((step) => (
              <AnimatedSection key={step.num} delay={parseInt(step.num) * 0.08}>
                <div className="p-6 rounded-2xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(17,17,17,0.04)] h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xl font-bold text-[#111111] tabular-nums">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-mono text-[#787774] uppercase">Phase {step.num}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-[#111111] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#787774] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ANIMATED STATS TELEMETRY ────────────────────────────────────────────── */}
      <StatsCounter />

      {/* ── 7B. TRUSTED CLIENTS DIRECTORY & SLIDER ──────────────────────────────── */}
      <ClientsSection />

      {/* ── 8. VERIFIED CLIENT TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <AnimatedSection className="max-w-2xl mb-14">
            <div className="inline-block text-[11px] font-mono uppercase tracking-[0.16em] text-[#787774] mb-3 px-2.5 py-0.5 rounded-full border border-[#eaeaea] bg-white">
              Client Feedback
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] tracking-tight mb-3">
              Verified Facility Testimonials
            </h2>
            <p className="text-sm sm:text-base text-[#787774] leading-relaxed">
              Feedback from plant managers, commercial complex administrators, and residential estates.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {clientReviews.map((r, idx) => (
              <AnimatedSection key={r.name} delay={idx * 0.08}>
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(17,17,17,0.04)] flex flex-col justify-between h-full group">
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#111111] mb-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] text-[10px] font-bold">
                        VERIFIED SLA
                      </span>
                      <span className="text-[#787774]">·</span>
                      <span className="text-[#787774] tabular-nums font-mono">{r.rating} / 5.0</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#2f3437] leading-relaxed italic mb-6">
                      &ldquo;{r.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#eaeaea] mt-auto">
                    <div className="font-semibold text-[#111111] text-sm group-hover:text-[#2f3437] transition-colors">{r.name}</div>
                    <div className="text-xs text-[#787774] font-medium">{r.role}</div>
                    <div className="text-[11px] text-[#787774] font-mono mt-0.5">{r.company}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. GET STARTED TODAY (Site Survey & Complete Button Matrix) ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 relative overflow-hidden bg-[#f7f6f3] border-t border-[#eaeaea]">
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <AnimatedSection>
            <div className="inline-block text-[11px] font-mono uppercase tracking-[0.16em] text-[#787774] mb-3 px-2.5 py-0.5 rounded-full border border-[#eaeaea] bg-white">
              MAS TECH ENGINEERING
            </div>
            
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#111111] mb-3 tracking-tight">
              Get Started Today
            </h2>

            <p className="text-base sm:text-lg text-[#2f3437] font-medium mb-3">
              Book your FREE Site Survey &amp; Quotation.
            </p>

            <p className="text-sm text-[#787774] mb-8 max-w-xl mx-auto leading-relaxed">
              Your Security Is Our Priority. Your Satisfaction Is Our Commitment.
            </p>

            {/* Direct Contact Hotline Bar */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3.5 mb-8 rounded-xl bg-white border border-[#eaeaea] shadow-sm">
              <a
                href="tel:+923212103576"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#346538] transition-colors px-3 py-1.5 rounded-lg bg-[#fbfbfa] border border-[#eaeaea]"
              >
                <span>📞 0321-2103576</span>
              </a>
              <a
                href="tel:+923369222274"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-[#111111] hover:text-[#346538] transition-colors px-3 py-1.5 rounded-lg bg-[#fbfbfa] border border-[#eaeaea]"
              >
                <span>📞 0336-9222274</span>
              </a>
              <a
                href="https://wa.me/923212103576"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-[#346538] hover:underline px-3 py-1.5 rounded-lg bg-[#edf3ec] border border-[#d2e4d0]"
              >
                <span>💬 WhatsApp Desk</span>
              </a>
            </div>

            {/* Complete Home Page Button Matrix */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="button-tactile h-11 px-5 rounded-[6px] font-medium text-xs text-white bg-[#111111] hover:bg-[#2f3437] transition-all duration-150 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>GET A FREE QUOTATION</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/contact"
                className="button-tactile h-11 px-5 rounded-[6px] font-medium text-xs text-[#111111] bg-white border border-[#eaeaea] hover:bg-[#fbfbfa] hover:border-[#111111] transition-all duration-150 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>BOOK A SITE SURVEY</span>
              </Link>

              <Link
                href="/services"
                className="button-tactile h-11 px-4.5 rounded-[6px] font-medium text-xs text-[#111111] bg-white border border-[#eaeaea] hover:bg-[#fbfbfa] hover:border-[#111111] transition-all duration-150 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>OUR SERVICES</span>
              </Link>

              <Link
                href="/contact"
                className="button-tactile h-11 px-4.5 rounded-[6px] font-medium text-xs text-[#111111] bg-white border border-[#eaeaea] hover:bg-[#fbfbfa] hover:border-[#111111] transition-all duration-150 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>CONTACT US</span>
              </Link>

              <a
                href="https://wa.me/923212103576"
                target="_blank"
                rel="noopener noreferrer"
                className="button-tactile h-11 px-4.5 rounded-[6px] font-medium text-xs text-[#346538] bg-[#edf3ec] border border-[#d2e4d0] hover:bg-[#d2e4d0] transition-all duration-150 inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#346538]" />
                <span>WHATSAPP US</span>
              </a>
            </div>

            <div className="mt-10 text-xs text-[#787774] flex flex-wrap items-center justify-center gap-6 font-mono">
              <span>MAS TECH ENGINEERING</span>
              <span>·</span>
              <span>Free Site Survey &amp; Quotation</span>
              <span>·</span>
              <span>1-Year Workmanship Warranty</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
