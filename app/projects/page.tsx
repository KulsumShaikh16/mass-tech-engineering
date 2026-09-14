"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHead from "@/components/ui/SectionHead";
import AnimatedSection from "@/components/ui/AnimatedSection";

const categories = ["All Projects", "Solar Energy", "Security & CCTV", "Access Control", "Industrial"];

const projects = [
  {
    title: "50kW Hybrid Solar Energy Plant",
    category: "Solar Energy",
    location: "Industrial Estate, Rawalpindi",
    clientType: "Commercial Manufacturing Facility",
    capacity: "50 kW Output",
    specs: "90x Tier-1 Bifacial Panels · 50kW Dual Inverters · Net Metering Approved",
    highlight: "Cuts monthly electricity bills by over 80%",
    stat: "82% Bill Reduction",
    image: "/images/projects/solar_plant_project_1789142340563.jpg",
  },
  {
    title: "Enterprise 4K AcuSense CCTV Network",
    category: "Security & CCTV",
    location: "Blue Area, Islamabad",
    clientType: "Commercial Corporate Plaza",
    capacity: "32x 4K IP Feeds",
    specs: "Hikvision AcuSense AI · 30-Day Cloud Archive · Central Security Desk",
    highlight: "Zero blindspots across 6 floors and basement parking",
    stat: "100% Perimeter Covered",
    image: "/mastech-cctv-surveillance.jpg",
  },
  {
    title: "High-Speed Automated Gate Barrier Grid",
    category: "Access Control",
    location: "Gated Residential Community, Islamabad",
    clientType: "Housing Society Administration",
    capacity: "4 Automatic Lanes",
    specs: "Centurion Heavy-Duty Barriers · RFID Windshield Tags · ANPR License Cameras",
    highlight: "Handles 4,000+ daily vehicle entries with 1.2s opening speed",
    stat: "1.2s Gate Cycle",
    image: "/mastech-barrier-gate.jpg",
  },
  {
    title: "Multi-Zone High-Voltage Perimeter Fence",
    category: "Industrial",
    location: "Heavy Industrial Zone, Taxila",
    clientType: "Logistics & Storage Yard",
    capacity: "1.8 km Perimeter",
    specs: "Nemtek Dual-Zone Energizer · 9.5kV Pulse · Siren & GSM Alert Integration",
    highlight: "Zero intrusion incidents recorded since commissioning",
    stat: "1.8 km Protected",
    image: "/mastech-electric-fence.jpg",
  },
  {
    title: "20kW Residential Solar & Battery Backup",
    category: "Solar Energy",
    location: "Sector F-7/2, Islamabad",
    clientType: "Luxury Private Residence",
    capacity: "20 kW Hybrid",
    specs: "Longi Hi-MO 6 Panels · 15kWh Lithium Battery · Automated Load Transfer",
    highlight: "Uninterrupted power supply with net-metering export revenue",
    stat: "Zero Load-Shedding",
    image: "/images/projects/residential_solar_battery_1789142318784.jpg",
  },
  {
    title: "Walk-Through Metal Detector Security Array",
    category: "Access Control",
    location: "Shopping Mall, Rawalpindi",
    clientType: "Commercial Retail Center",
    capacity: "6 Entry Gates",
    specs: "33-Zone Pinpoint Detection · Handheld Scanners · High-Throughput Calibration",
    highlight: "Smooth pedestrian throughput during peak weekend traffic",
    stat: "15,000+ Daily Visitors",
    image: "/images/projects/metal_detector_project_1789142405981.jpg",
  },
];

export default function ProjectsPage() {
  const [selectedCat, setSelectedCat] = useState("All Projects");

  const filteredProjects =
    selectedCat === "All Projects"
      ? projects
      : projects.filter((p) => p.category === selectedCat);

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Our Engineering Portfolio"
          heading="Featured Installations Across Islamabad &amp; Rawalpindi"
          subtext="Explore recent turnkey projects delivered on-time, within budget, and backed by our comprehensive on-site warranty."
          level={1}
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 rounded-[5px] text-xs font-mono transition-all duration-150 cursor-pointer ${
                selectedCat === cat
                  ? "bg-[#111111] text-white"
                  : "bg-white text-[#787774] hover:text-[#111111] border border-[#eaeaea]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.05}>
              <div className="h-full rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] p-6 sm:p-7 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between group overflow-hidden">
                <div>
                  {/* Top Category + Stat */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#787774] uppercase tracking-wider">
                      {p.category}
                    </span>
                    <span className="text-[10px] font-mono font-medium text-[#111111] bg-[#f7f6f3] border border-[#eaeaea] px-2 py-0.5 rounded">
                      {p.stat}
                    </span>
                  </div>

                  {/* Art-Directed Project Image */}
                  {p.image && (
                    <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#eaeaea] mb-4 bg-[#fbfbfa]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <h3 className="font-editorial text-xl font-normal text-[#111111] mb-2">
                    {p.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#787774] mb-3 font-mono">
                    <svg className="w-3.5 h-3.5 text-[#111111] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    <span>{p.location}</span>
                  </div>

                  <p className="text-xs text-[#787774] leading-relaxed mb-4">
                    {p.highlight}
                  </p>

                  {/* Specs Box */}
                  <div className="p-3 rounded-lg bg-[#fbfbfa] border border-[#eaeaea] text-[11px] font-mono text-[#111111] mb-4">
                    <span className="text-[#787774] block mb-1">SPECIFICATION</span>
                    {p.specs}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#eaeaea] flex items-center justify-between text-xs text-[#787774] font-mono">
                  <span>{p.clientType}</span>
                  <span className="text-[#346538] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                    Commissioned
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="p-8 sm:p-10 rounded-xl bg-[#f7f6f3] border border-[#eaeaea] text-center">
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#111111] mb-2">
            Have a Similar Commercial or Industrial Facility?
          </h3>
          <p className="text-xs sm:text-sm text-[#787774] mb-6 max-w-xl mx-auto">
            Our engineers can conduct a comprehensive survey of your electrical network, perimeter lines, and gate access requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#2f3437] text-white font-medium rounded-[6px] text-xs transition-all"
            >
              Book Site Survey
            </Link>
            <a
              href="https://wa.me/923298737321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#eaeaea] hover:bg-[#fbfbfa] text-[#111111] font-medium text-xs rounded-[6px] transition-all"
            >
              WhatsApp Engineering Desk
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
