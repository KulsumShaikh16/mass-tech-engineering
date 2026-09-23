"use client";

import React, { useState } from "react";

export interface ClientBrand {
  id: string;
  name: string;
  subtitle?: string;
  logo: string;
  category: "defence" | "education" | "healthcare" | "commercial" | "industrial";
  tag: string;
  sizeClass: "logo-wide" | "logo-square" | "logo-tall";
}

export const ALL_CLIENT_BRANDS: ClientBrand[] = [
  // Defence & Security
  { id: "pak-army", name: "Pakistan Army", tag: "Defence & Security", category: "defence", logo: "/images/clients/logo-pak-army.png", sizeClass: "logo-square" },
  { id: "pak-mi", name: "Military Intelligence (MI)", subtitle: "Pakistan Army", tag: "Military Intelligence", category: "defence", logo: "/images/clients/logo-pak-mi.png", sizeClass: "logo-square" },
  { id: "isi", name: "Inter-Services Intelligence", subtitle: "ISI Pakistan", tag: "Intelligence Agency", category: "defence", logo: "/images/clients/logo-isi.png", sizeClass: "logo-square" },
  { id: "315-eng", name: "315 Engineering", subtitle: "Pakistan Army", tag: "Army Engineering Corps", category: "defence", logo: "/images/clients/logo-315-eng.png", sizeClass: "logo-square" },
  { id: "pak-ssd", name: "SSD Pakistan Army", tag: "Special Services Division", category: "defence", logo: "/images/clients/logo-pak-ssd.png", sizeClass: "logo-square" },
  { id: "pak-rangers", name: "Pakistan Rangers", tag: "Para-Military Forces", category: "defence", logo: "/images/clients/logo-pak-rangers.png", sizeClass: "logo-square" },
  { id: "saad-aad", name: "SAAD School of Air Defence", tag: "Air Defence Training", category: "defence", logo: "/images/clients/logo-saad-aad.png", sizeClass: "logo-square" },
  { id: "cantt-board", name: "Cantonment Board Malir", tag: "Local Government", category: "defence", logo: "/images/clients/logo-cantt-board.png", sizeClass: "logo-square" },
  { id: "askari-5", name: "Askari 5", tag: "Army Housing Society", category: "defence", logo: "/images/clients/logo-askari5.png", sizeClass: "logo-square" },
  { id: "askari-4", name: "Askari 4", tag: "Army Housing Society", category: "defence", logo: "/images/clients/logo-askari.png", sizeClass: "logo-square" },

  // Education
  { id: "apsacs", name: "APSACS Cambridge", tag: "Cambridge Education", category: "education", logo: "/images/clients/logo-apsacs.png", sizeClass: "logo-square" },
  { id: "aps-college", name: "APS College", tag: "Army Public College", category: "education", logo: "/images/clients/logo-aps-college.png", sizeClass: "logo-square" },
  { id: "aps-school", name: "Army Public School (APS)", tag: "Army Public School", category: "education", logo: "/images/clients/logo-aps-school.png", sizeClass: "logo-square" },
  { id: "cb-school", name: "C.B. School", tag: "Cantonment School", category: "education", logo: "/images/clients/logo-cb-school.png", sizeClass: "logo-square" },
  { id: "cantt-college", name: "Cantt Degree College", tag: "Cantonment Education", category: "education", logo: "/images/clients/logo-cantt-college.png", sizeClass: "logo-square" },
  { id: "al-kamran", name: "Al Kamran School", tag: "Private School Network", category: "education", logo: "/images/clients/logo-al-kamran.png", sizeClass: "logo-square" },
  { id: "smart-school", name: "The Smart School", tag: "Educational Network", category: "education", logo: "/images/clients/logo-smart-school.png", sizeClass: "logo-wide" },
  { id: "iqra-library", name: "Iqra Library Malir Cantt", tag: "Public Library", category: "education", logo: "/images/clients/logo-iqra-library.png", sizeClass: "logo-square" },

  // Healthcare & Community
  { id: "kims", name: "KIMS Medical College", tag: "Medical Institution", category: "healthcare", logo: "/images/clients/logo-kims.png", sizeClass: "logo-square" },
  { id: "kims-hostel", name: "KIMS Girls Hostel", tag: "Medical Hostel", category: "healthcare", logo: "/images/clients/logo-kims-hostel.png", sizeClass: "logo-square" },
  { id: "kohat-cmh", name: "Kohat CMH", tag: "Military Hospital", category: "healthcare", logo: "/images/clients/logo-kohat-cmh.png", sizeClass: "logo-square" },
  { id: "st-paul", name: "St. Paul Church Malir Cantt", tag: "Community Church", category: "healthcare", logo: "/images/clients/logo-st-paul.png", sizeClass: "logo-tall" },

  // Commercial & Real Estate
  { id: "4dot-market", name: "4dot Market Malir Cantt", tag: "Commercial Market", category: "commercial", logo: "/images/clients/logo-4dot-market.png", sizeClass: "logo-wide" },
  { id: "millennium-mall", name: "Millennium Mall", tag: "Shopping & Retail", category: "commercial", logo: "/images/clients/logo-mill2.png", sizeClass: "logo-square" },
  { id: "movenpick", name: "Move In Pic Hotel", tag: "Hospitality & Hotel", category: "commercial", logo: "/images/clients/logo-movein-hotel.png", sizeClass: "logo-wide" },
  { id: "parikh-estate", name: "Parikh Estate", tag: "Real Estate Development", category: "commercial", logo: "/images/clients/logo-parikh-estate.png", sizeClass: "logo-square" },
  { id: "zameen", name: "Zameen.com", tag: "Property Portal", category: "commercial", logo: "/images/clients/logo-zameen2.png", sizeClass: "logo-wide" },
  { id: "amc", name: "AMC Pakistan", tag: "Asset Management", category: "commercial", logo: "/images/clients/logo-amc.png", sizeClass: "logo-square" },

  // Petroleum & Industrial
  { id: "pso", name: "PSO Head Office", tag: "State Oil Company", category: "industrial", logo: "/images/clients/logo-pso.png", sizeClass: "logo-square" },
  { id: "bilal-petro", name: "Bilal Petroleum", tag: "Petroleum Retail", category: "industrial", logo: "/images/clients/logo-bilal2.png", sizeClass: "logo-wide" },
  { id: "byco", name: "Byco Petroleum Windar", tag: "Petroleum & Refinery", category: "industrial", logo: "/images/clients/logo-byco2.png", sizeClass: "logo-wide" },
  { id: "safety-iron", name: "Safey Iron Pvt Ltd", tag: "Iron Manufacturing", category: "industrial", logo: "/images/clients/logo-safey-iron.png", sizeClass: "logo-square" },
  { id: "shafeeq-steel", name: "Shafeeq Steel Pvt Ltd", tag: "Steel Manufacturing", category: "industrial", logo: "/images/clients/logo-shafeeq-steel.png", sizeClass: "logo-square" },
  { id: "edible-oils", name: "Adable Oils Pvt Ltd", tag: "Edible Oil Industry", category: "industrial", logo: "/images/clients/logo-adable-oils.png", sizeClass: "logo-square" },
  { id: "artistic-denim", name: "Artistic Denim", tag: "Textile Industry", category: "industrial", logo: "/images/clients/logo-artistic-denim.png", sizeClass: "logo-square" },
  { id: "hub-salt", name: "Hub Salt", tag: "Salt Mining & Processing", category: "industrial", logo: "/images/clients/logo-hub-salt.png", sizeClass: "logo-square" },
  { id: "bolan-casting", name: "Bolan Casting Hub", tag: "Metal Casting Industry", category: "industrial", logo: "/images/clients/logo-bolan-casting.png", sizeClass: "logo-wide" },
  { id: "barki-tyre", name: "The Barki Tyre", tag: "Automotive Tyre Systems", category: "industrial", logo: "/images/clients/logo-burki-tyre.png", sizeClass: "logo-wide" },
];

export default function ClientsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "slider">("grid");

  const categories = [
    { id: "all", label: "All Sectors", count: ALL_CLIENT_BRANDS.length },
    { id: "defence", label: "Defence & Govt", count: ALL_CLIENT_BRANDS.filter(c => c.category === "defence").length },
    { id: "education", label: "Education", count: ALL_CLIENT_BRANDS.filter(c => c.category === "education").length },
    { id: "healthcare", label: "Healthcare & Community", count: ALL_CLIENT_BRANDS.filter(c => c.category === "healthcare").length },
    { id: "commercial", label: "Commercial & Retail", count: ALL_CLIENT_BRANDS.filter(c => c.category === "commercial").length },
    { id: "industrial", label: "Industrial & Energy", count: ALL_CLIENT_BRANDS.filter(c => c.category === "industrial").length },
  ];

  const filteredBrands = selectedCategory === "all"
    ? ALL_CLIENT_BRANDS
    : ALL_CLIENT_BRANDS.filter(c => c.category === selectedCategory);

  const row1Brands = ALL_CLIENT_BRANDS.slice(0, Math.ceil(ALL_CLIENT_BRANDS.length / 2));
  const row2Brands = ALL_CLIENT_BRANDS.slice(Math.ceil(ALL_CLIENT_BRANDS.length / 2));

  return (
    <section className="border-y border-[#eaeaea] bg-[#f7f6f3] py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-8">
        
        {/* HEADER MATCHING WEBSITE THEME */}
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

            {/* View Mode Switcher */}
            <div className="flex items-center bg-white border border-[#eaeaea] rounded-lg p-0.5 shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                  viewMode === "grid"
                    ? "bg-[#111111] text-white font-semibold"
                    : "text-[#787774] hover:text-[#111111]"
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode("slider")}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                  viewMode === "slider"
                    ? "bg-[#111111] text-white font-semibold"
                    : "text-[#787774] hover:text-[#111111]"
                }`}
              >
                Slider View
              </button>
            </div>
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

      {/* ── VIEW 1: CLEAN RESPONSIVE CLIENT LOGO GRID ──────────────────────────── */}
      {viewMode === "grid" && (
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {filteredBrands.map((client) => (
              <div
                key={client.id}
                className="bg-white border border-[#eaeaea] hover:border-[#111111] hover:shadow-[0_4px_16px_rgba(17,17,17,0.06)] rounded-xl p-3.5 transition-all duration-200 flex flex-col items-center justify-between group cursor-default"
              >
                {/* [ LOGO AREA ] — Fixed 80px container with flex center & no distortion */}
                <div className="logo-container">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`logo-img ${client.sizeClass}`}
                    loading="lazy"
                  />
                </div>

                {/* Company Name & Category */}
                <div className="w-full text-center pt-2.5 border-t border-[#f7f6f3]">
                  <div className="text-xs font-semibold text-[#111111] font-mono leading-tight truncate group-hover:text-[#111111]">
                    {client.name}
                  </div>
                  <div className="text-[10px] text-[#787774] mt-0.5 truncate font-mono">
                    {client.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── VIEW 2: CONTINUOUS BRAND MARQUEE SLIDER ────────────────────────────── */}
      {viewMode === "slider" && (
        <div className="space-y-4">
          {/* Row 1 — slides left */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]">
            <div className="animate-marquee flex items-stretch gap-4 px-4">
              {[...row1Brands, ...row1Brands, ...row1Brands].map((client, i) => (
                <div
                  key={`mq1-${client.id}-${i}`}
                  className="w-[200px] sm:w-[220px] flex-shrink-0 p-3.5 rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] hover:shadow-[0_4px_16px_rgba(17,17,17,0.06)] transition-all duration-200 flex flex-col items-center justify-between group cursor-default"
                >
                  <div className="logo-container">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`logo-img ${client.sizeClass}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full text-center pt-2 border-t border-[#f7f6f3]">
                    <div className="text-xs font-semibold text-[#111111] font-mono leading-tight truncate">
                      {client.name}
                    </div>
                    <div className="text-[10px] text-[#787774] mt-0.5 truncate font-mono">
                      {client.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — slides right */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]">
            <div className="animate-marquee-reverse flex items-stretch gap-4 px-4">
              {[...row2Brands, ...row2Brands, ...row2Brands].map((client, i) => (
                <div
                  key={`mq2-${client.id}-${i}`}
                  className="w-[200px] sm:w-[220px] flex-shrink-0 p-3.5 rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] hover:shadow-[0_4px_16px_rgba(17,17,17,0.06)] transition-all duration-200 flex flex-col items-center justify-between group cursor-default"
                >
                  <div className="logo-container">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`logo-img ${client.sizeClass}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full text-center pt-2 border-t border-[#f7f6f3]">
                    <div className="text-xs font-semibold text-[#111111] font-mono leading-tight truncate">
                      {client.name}
                    </div>
                    <div className="text-[10px] text-[#787774] mt-0.5 truncate font-mono">
                      {client.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER METRIC NOTE */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mt-8 pt-4 flex items-center justify-between text-[11px] font-mono text-[#9b9a97] border-t border-[#eaeaea]">
        <span>Verified enterprise, defence & institutional projects across Pakistan</span>
        <span className="hidden sm:inline">All company trademarks & logos belong to their respective owners</span>
      </div>

    </section>
  );
}
