"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface ClientBrand {
  id: string;
  name: string;
  subtitle?: string;
  logo: string;
  category: "defence" | "education" | "healthcare" | "commercial" | "industrial";
  tag: string;
}

export const ALL_CLIENT_BRANDS: ClientBrand[] = [
  // Defence & Security
  { id: "pak-army", name: "Pakistan Army", tag: "Defence & Security", category: "defence", logo: "/images/clients/logo-pak-army.png" },
  { id: "pak-mi", name: "Military Intelligence (MI)", subtitle: "Pakistan Army", tag: "Military Intelligence", category: "defence", logo: "/images/clients/logo-pak-mi.png" },
  { id: "isi", name: "Inter-Services Intelligence", subtitle: "ISI Pakistan", tag: "Intelligence Agency", category: "defence", logo: "/images/clients/logo-isi.png" },
  { id: "315-eng", name: "315 Engineering", subtitle: "Pakistan Army", tag: "Army Engineering Corps", category: "defence", logo: "/images/clients/logo-315-eng.png" },
  { id: "pak-ssd", name: "SSD Pakistan Army", tag: "Special Services Division", category: "defence", logo: "/images/clients/logo-pak-ssd.png" },
  { id: "pak-rangers", name: "Pakistan Rangers", tag: "Para-Military Forces", category: "defence", logo: "/images/clients/logo-pak-rangers.png" },
  { id: "saad-aad", name: "SAAD School of Air Defence", tag: "Air Defence Training", category: "defence", logo: "/images/clients/logo-saad-aad.png" },
  { id: "cantt-board", name: "Cantonment Board Malir", tag: "Local Government", category: "defence", logo: "/images/clients/logo-cantt-board.png" },
  { id: "askari-5", name: "Askari 5", tag: "Army Housing Society", category: "defence", logo: "/images/clients/logo-askari5.png" },
  { id: "askari-4", name: "Askari 4", tag: "Army Housing Society", category: "defence", logo: "/images/clients/logo-askari.png" },

  // Education
  { id: "apsacs", name: "APSACS Cambridge", tag: "Cambridge Education", category: "education", logo: "/images/clients/logo-apsacs.png" },
  { id: "aps-college", name: "APS College", tag: "Army Public College", category: "education", logo: "/images/clients/logo-aps-college.png" },
  { id: "aps-school", name: "Army Public School (APS)", tag: "Army Public School", category: "education", logo: "/images/clients/logo-aps-school.png" },
  { id: "cb-school", name: "C.B. School", tag: "Cantonment School", category: "education", logo: "/images/clients/logo-cb-school.png" },
  { id: "cantt-college", name: "Cantt Degree College", tag: "Cantonment Education", category: "education", logo: "/images/clients/logo-cantt-college.png" },
  { id: "al-kamran", name: "Al Kamran School", tag: "Private School Network", category: "education", logo: "/images/clients/logo-al-kamran.png" },
  { id: "smart-school", name: "The Smart School", tag: "Educational Network", category: "education", logo: "/images/clients/logo-smart-school.png" },
  { id: "iqra-library", name: "Iqra Library Malir Cantt", tag: "Public Library", category: "education", logo: "/images/clients/logo-iqra-library.png" },

  // Healthcare & Community
  { id: "kims", name: "KIMS Medical College", tag: "Medical Institution", category: "healthcare", logo: "/images/clients/logo-kims.png" },
  { id: "kims-hostel", name: "KIMS Girls Hostel", tag: "Medical Hostel", category: "healthcare", logo: "/images/clients/logo-kims-hostel.png" },
  { id: "kohat-cmh", name: "Kohat CMH", tag: "Military Hospital", category: "healthcare", logo: "/images/clients/logo-kohat-cmh.png" },
  { id: "st-paul", name: "St. Paul Church Malir Cantt", tag: "Community Church", category: "healthcare", logo: "/images/clients/logo-st-paul.png" },

  // Commercial & Real Estate
  { id: "4dot-market", name: "4dot Market Malir Cantt", tag: "Commercial Market", category: "commercial", logo: "/images/clients/logo-4dot-market.png" },
  { id: "millennium-mall", name: "Millennium Mall", tag: "Shopping & Retail", category: "commercial", logo: "/images/clients/logo-mill2.png" },
  { id: "movenpick", name: "Move In Pic Hotel", tag: "Hospitality & Hotel", category: "commercial", logo: "/images/clients/logo-movein-hotel.png" },
  { id: "parikh-estate", name: "Parikh Estate", tag: "Real Estate Development", category: "commercial", logo: "/images/clients/logo-parikh-estate.png" },
  { id: "zameen", name: "Zameen.com", tag: "Property Portal", category: "commercial", logo: "/images/clients/logo-zameen2.png" },
  { id: "amc", name: "AMC Pakistan", tag: "Asset Management", category: "commercial", logo: "/images/clients/logo-amc.png" },

  // Petroleum & Industrial
  { id: "pso", name: "PSO Head Office", tag: "State Oil Company", category: "industrial", logo: "/images/clients/logo-pso.png" },
  { id: "bilal-petro", name: "Bilal Petroleum", tag: "Petroleum Retail", category: "industrial", logo: "/images/clients/logo-bilal2.png" },
  { id: "byco", name: "Byco Petroleum Windar", tag: "Petroleum & Refinery", category: "industrial", logo: "/images/clients/logo-byco2.png" },
  { id: "safety-iron", name: "Safey Iron Pvt Ltd", tag: "Iron Manufacturing", category: "industrial", logo: "/images/clients/logo-safey-iron.png" },
  { id: "shafeeq-steel", name: "Shafeeq Steel Pvt Ltd", tag: "Steel Manufacturing", category: "industrial", logo: "/images/clients/logo-shafeeq-steel.png" },
  { id: "edible-oils", name: "Adable Oils Pvt Ltd", tag: "Edible Oil Industry", category: "industrial", logo: "/images/clients/logo-adable-oils.png" },
  { id: "artistic-denim", name: "Artistic Denim", tag: "Textile Industry", category: "industrial", logo: "/images/clients/logo-artistic-denim.png" },
  { id: "hub-salt", name: "Hub Salt", tag: "Salt Mining & Processing", category: "industrial", logo: "/images/clients/logo-hub-salt.png" },
  { id: "bolan-casting", name: "Bolan Casting Hub", tag: "Metal Casting Industry", category: "industrial", logo: "/images/clients/logo-bolan-casting.png" },
  { id: "barki-tyre", name: "The Burki Tyre", tag: "Automotive Tyre Systems", category: "industrial", logo: "/images/clients/logo-burki-tyre.png" },
];

export default function ClientsSliderSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Sectors", count: ALL_CLIENT_BRANDS.length },
    { id: "defence", label: "Defence & Govt", count: ALL_CLIENT_BRANDS.filter(c => c.category === "defence").length },
    { id: "education", label: "Education", count: ALL_CLIENT_BRANDS.filter(c => c.category === "education").length },
    { id: "healthcare", label: "Healthcare & Community", count: ALL_CLIENT_BRANDS.filter(c => c.category === "healthcare").length },
    { id: "commercial", label: "Commercial & Retail", count: ALL_CLIENT_BRANDS.filter(c => c.category === "commercial").length },
    { id: "industrial", label: "Industrial & Energy", count: ALL_CLIENT_BRANDS.filter(c => c.category === "industrial").length },
  ];

  // Split brands for dual slider rows
  const row1Brands = ALL_CLIENT_BRANDS.slice(0, Math.ceil(ALL_CLIENT_BRANDS.length / 2));
  const row2Brands = ALL_CLIENT_BRANDS.slice(Math.ceil(ALL_CLIENT_BRANDS.length / 2));

  return (
    <section className="border-y border-[#eaeaea] bg-[#f7f6f3] py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-8">
        
        {/* SECTION HEADER — MATCHING WEBSITE MINIMALIST THEME */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#eaeaea]">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#111111]" />
              <span className="text-xs font-mono font-medium tracking-wider text-[#787774] uppercase">
                Trusted By Leading Organisations
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-editorial tracking-tight">
              Our Valued Clients & Key Partners
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#346538] bg-[#edf3ec] border border-[#c3dec0] px-3 py-1.5 rounded-full flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#346538] animate-pulse" />
              {ALL_CLIENT_BRANDS.length}+ Verified Deployments
            </span>
          </div>
        </div>

        {/* SECTOR FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-6 pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#111111] text-white border-[#111111] shadow-sm"
                    : "bg-white text-[#787774] border-[#eaeaea] hover:border-[#111111] hover:text-[#111111]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-[#f7f6f3] text-[#9b9a97]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* ── ROW 1: SLIDES LEFT (PROMINENT LARGE LOGO CARDS) ────────────────────── */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)] mb-5">
        <div className="animate-marquee flex items-stretch gap-4 px-4">
          {[...row1Brands, ...row1Brands, ...row1Brands].map((client, i) => {
            const isDimmed = selectedCategory !== "all" && client.category !== selectedCategory;
            return (
              <div
                key={`r1-${client.id}-${i}`}
                className={`w-[190px] sm:w-[210px] h-[145px] flex-shrink-0 p-3.5 rounded-2xl bg-white border border-[#eaeaea] transition-all duration-300 flex flex-col items-center justify-between group cursor-default ${
                  isDimmed 
                    ? "opacity-30 grayscale scale-95" 
                    : "hover:border-[#111111] hover:shadow-[0_8px_24px_rgba(17,17,17,0.08)] opacity-100"
                }`}
              >
                {/* Prominent Hero Logo Container */}
                <div className="w-full h-[78px] relative flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={180}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>

                {/* Clean Centered Text Metadata */}
                <div className="w-full text-center pt-2 border-t border-[#f7f6f3]">
                  <div className="text-xs font-bold text-[#111111] font-mono leading-tight truncate group-hover:text-[#111111]">
                    {client.name}
                  </div>
                  <div className="text-[10px] text-[#787774] mt-0.5 truncate font-mono">
                    {client.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── ROW 2: SLIDES RIGHT (REVERSE) ────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]">
        <div className="animate-marquee-reverse flex items-stretch gap-4 px-4">
          {[...row2Brands, ...row2Brands, ...row2Brands].map((client, i) => {
            const isDimmed = selectedCategory !== "all" && client.category !== selectedCategory;
            return (
              <div
                key={`r2-${client.id}-${i}`}
                className={`w-[190px] sm:w-[210px] h-[145px] flex-shrink-0 p-3.5 rounded-2xl bg-white border border-[#eaeaea] transition-all duration-300 flex flex-col items-center justify-between group cursor-default ${
                  isDimmed 
                    ? "opacity-30 grayscale scale-95" 
                    : "hover:border-[#111111] hover:shadow-[0_8px_24px_rgba(17,17,17,0.08)] opacity-100"
                }`}
              >
                {/* Prominent Hero Logo Container */}
                <div className="w-full h-[78px] relative flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={180}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>

                {/* Clean Centered Text Metadata */}
                <div className="w-full text-center pt-2 border-t border-[#f7f6f3]">
                  <div className="text-xs font-bold text-[#111111] font-mono leading-tight truncate group-hover:text-[#111111]">
                    {client.name}
                  </div>
                  <div className="text-[10px] text-[#787774] mt-0.5 truncate font-mono">
                    {client.tag}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER CAPTION */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mt-6 pt-4 flex items-center justify-between text-[11px] font-mono text-[#9b9a97]">
        <span>Hover over any brand card to pause slider animation</span>
        <span className="hidden sm:inline">All logos and trademarks belong to their respective registered owners</span>
      </div>

    </section>
  );
}
