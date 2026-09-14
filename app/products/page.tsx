"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHead from "@/components/ui/SectionHead";
import AnimatedSection from "@/components/ui/AnimatedSection";

const categories = ["All Hardware", "Solar Power", "Surveillance & AI", "Access & Barriers", "Energy Storage"];

const hardwareItems = [
  {
    name: "Tier-1 N-Type Bifacial Solar Modules",
    category: "Solar Power",
    brand: "Longi / Jinko Solar",
    specs: "585W+ High-Efficiency · 22.8% Conversion · Anti-PID",
    warranty: "25-Year Linear Output Warranty",
    availability: "In Stock (Islamabad Warehouse)",
    desc: "Engineered for maximum power yield even in extreme twin-city summers. Double-glass bifacial architecture generates power from both sides.",
    tags: ["Tier-1 Certified", "Bifacial Tech", "IP68 Junction"],
    image: "/images/hardware/solar_hardware_1789141339505.jpg",
  },
  {
    name: "Hybrid Three-Phase Smart Inverters",
    category: "Solar Power",
    brand: "Growatt / Huawei",
    specs: "5kW to 50kW · Dual MPPT · Pure Sine Wave",
    warranty: "5-Year Manufacturer Warranty",
    availability: "In Stock",
    desc: "Seamless net-metering grid export with automatic UPS cutover within 10ms. Real-time WiFi mobile telemetry and app monitoring.",
    tags: ["Net Metering Ready", "Smart WiFi App", "Dual MPPT"],
    image: "/images/hardware/smart_inverter_1789141916525.jpg",
  },
  {
    name: "4K ColorVu AI Smart IP Cameras",
    category: "Surveillance & AI",
    brand: "Hikvision / Dahua",
    specs: "8MP 4K Ultra HD · F1.0 Super Aperture · 24/7 Color",
    warranty: "1-Year Direct Replacement Warranty",
    availability: "In Stock",
    desc: "AcuSense human and vehicle classification filters out 90% of false alarms. Full-color night footage even in pitch-black environments.",
    tags: ["AcuSense AI", "Full-Color Night", "Waterproof IP67"],
    image: "/images/hardware/surveillance_hardware_1789141352353.jpg",
  },
  {
    name: "High-Speed Automatic Boom Barriers",
    category: "Access & Barriers",
    brand: "Centurion / ZKTeco",
    specs: "0.8s - 3s Speed · Up to 6m Boom Length · Brushless DC",
    warranty: "1-Year Workmanship Warranty",
    availability: "In Stock",
    desc: "Heavy-duty commercial boom barriers capable of 5,000+ continuous cycles daily. Supports ANPR automatic license-plate and RFID reader tags.",
    tags: ["Heavy-Duty Cycle", "ANPR Integration", "Anti-Collision"],
    image: "/images/hardware/access_barriers_1789141365124.jpg",
  },
  {
    name: "Deep-Cycle LiFePO4 Lithium Battery Storage",
    category: "Energy Storage",
    brand: "Pylontech / Narada",
    specs: "48V 100Ah / 200Ah · 6,000+ Cycles · Smart BMS",
    warranty: "10-Year Expected Lifespan",
    availability: "In Stock",
    desc: "Zero-maintenance lithium iron phosphate storage modules designed for high-depth-of-discharge reliability during load-shedding periods.",
    tags: ["6000+ Cycles", "Smart BMS", "Fast Charge"],
    image: "/images/hardware/energy_storage_1789141378331.jpg",
  },
  {
    name: "Walk-Through Multi-Zone Metal Detector Gates",
    category: "Access & Barriers",
    brand: "ZKTeco Security",
    specs: "18-Zone & 33-Zone · Pinpoint LED Indicators",
    warranty: "1-Year Warranty & Calibration",
    availability: "In Stock",
    desc: "High-throughput security walkthrough gates with sound and light alarm positioning for malls, government buildings, and corporate headquarters.",
    tags: ["Multi-Zone Pinpoint", "Adjustable Sensitivity", "Anti-Interference"],
    image: "/images/hardware/metal_detector_gate_1789141943736.jpg",
  },
  {
    name: "Industrial Electric Perimeter Fence Energizer",
    category: "Access & Barriers",
    brand: "Nemtek / Gallagher",
    specs: "9,500V Peak Pulse · Dual-Zone Monitor · Tamper Siren",
    warranty: "1-Year Warranty",
    availability: "In Stock",
    desc: "High-voltage deterrent barrier with instant fence tamper detection, lightning protection, and siren/strobe light relay.",
    tags: ["Non-Lethal High Voltage", "Siren Relay", "Anti-Tamper"],
    image: "/images/hardware/electric_fence_1789141964510.jpg",
  },
  {
    name: "32-Channel 4K NVR Network Video Recorder",
    category: "Surveillance & AI",
    brand: "Hikvision Pro Series",
    specs: "4K Output · 4 SATA Bays (Up to 40TB) · H.265+ Compression",
    warranty: "1-Year Warranty",
    availability: "In Stock",
    desc: "Enterprise centralized recording console with high bandwidth throughput, facial recognition archiving, and multi-user remote access.",
    tags: ["4K Resolution", "40TB Storage Support", "Remote P2P Cloud"],
    image: "/images/hardware/nvr_recorder_1789141928962.jpg",
  },
];

export default function ProductsPage() {
  const [selectedCat, setSelectedCat] = useState("All Hardware");

  const filteredItems =
    selectedCat === "All Hardware"
      ? hardwareItems
      : hardwareItems.filter((i) => i.category === selectedCat);

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Tier-1 Hardware Catalog"
          heading="Genuine, Warranty-Backed Equipment"
          subtext="We supply, configure, and install only authentic components from world-leading engineering manufacturers. No gray-market or refurbished units."
          level={1}
        />

        {/* Category Filter Tabs */}
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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((prod, i) => (
            <AnimatedSection key={prod.name} delay={i * 0.05}>
              <div className="h-full rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] p-6 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between group">
                <div>
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden bg-[#f7f6f3]">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  {/* Top Bar: Category + Brand */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-[#787774] uppercase tracking-wider">
                      {prod.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#111111] bg-[#f7f6f3] px-2 py-0.5 rounded border border-[#eaeaea]">
                      {prod.brand}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-normal text-[#111111] mb-2">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-[#787774] leading-relaxed mb-4">
                    {prod.desc}
                  </p>

                  <div className="p-3 rounded-lg bg-[#fbfbfa] border border-[#eaeaea] mb-4 space-y-1 font-mono text-[11px]">
                    <div className="text-[#111111] font-medium">{prod.specs}</div>
                    <div className="text-[#346538] font-medium">✓ {prod.warranty}</div>
                    <div className="text-[#787774]">{prod.availability}</div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prod.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f7f6f3] border border-[#eaeaea] text-[#787774]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contact?product=${encodeURIComponent(prod.name)}`}
                  className="button-tactile pt-3 border-t border-[#eaeaea] flex items-center justify-between text-xs font-medium text-[#111111] hover:text-[#787774] transition-colors"
                >
                  <span>Request Hardware Quotation</span>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <AnimatedSection className="p-8 sm:p-10 rounded-xl bg-[#f7f6f3] border border-[#eaeaea] text-center">
          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#111111] mb-2">
            Looking for a Specific Model or System Spec?
          </h3>
          <p className="text-xs sm:text-sm text-[#787774] mb-6 max-w-xl mx-auto">
            Our Islamabad stock includes enterprise NVRs, dual-sensor thermal cameras, commercial inverters up to 100 kW, and heavy-duty barrier arms.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#2f3437] text-white font-medium rounded-[6px] text-xs transition-all"
            >
              Contact Hardware Team
            </Link>
            <a
              href="tel:+923298737321"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#eaeaea] hover:bg-[#fbfbfa] text-[#111111] font-mono text-xs rounded-[6px] transition-all"
            >
              Call 0329-8737321
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
