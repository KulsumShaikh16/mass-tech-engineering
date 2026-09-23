"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface ClientItem {
  id: string;
  name: string;
  subtitle?: string;
  logo: string;
  category: "defence" | "education" | "healthcare" | "commercial" | "industrial";
  tag: string;
}

export const CLIENTS_LIST: ClientItem[] = [
  // Defence & Security
  { id: "pak-army", name: "Pakistan Army", tag: "Defence & Security", category: "defence", logo: "/images/clients/logo-pak-army.png" },
  { id: "pak-mi", name: "Military Intelligence (MI)", subtitle: "Pakistan Army", tag: "Intelligence Agency", category: "defence", logo: "/images/clients/logo-pak-mi.png" },
  { id: "isi", name: "Inter-Services Intelligence (ISI)", subtitle: "Pakistan", tag: "Intelligence Agency", category: "defence", logo: "/images/clients/logo-isi.png" },
  { id: "315-eng", name: "315 Engineering", subtitle: "Pakistan Army", tag: "Army Engineering Corps", category: "defence", logo: "/images/clients/logo-315-eng.png" },
  { id: "pak-ssd", name: "SSD", subtitle: "Pakistan Army", tag: "Army Special Services", category: "defence", logo: "/images/clients/logo-pak-ssd.png" },
  { id: "pak-rangers", name: "Pakistan Rangers", tag: "Para-Military Force", category: "defence", logo: "/images/clients/logo-pak-rangers.png" },
  { id: "saad-aad", name: "SAAD School of Army Air Defence", tag: "Army Air Defence", category: "defence", logo: "/images/clients/logo-saad-aad.png" },
  { id: "cantt-board", name: "Cantonment Board Malir", tag: "Local Cantonment Govt", category: "defence", logo: "/images/clients/logo-cantt-board.png" },
  { id: "askari-5", name: "ASKARI 5", subtitle: "Askari 5", tag: "Army Housing Society", category: "defence", logo: "/images/clients/logo-askari5.png" },
  { id: "askari-4", name: "ASKARI 4", subtitle: "Askari 4", tag: "Army Housing Society", category: "defence", logo: "/images/clients/logo-askari.png" },

  // Education
  { id: "apsacs", name: "APSACS Cambridge School", tag: "Cambridge Education", category: "education", logo: "/images/clients/logo-apsacs.png" },
  { id: "aps-college", name: "APS College", tag: "Army Public College", category: "education", logo: "/images/clients/logo-aps-college.png" },
  { id: "aps-school", name: "Army Public School (APS)", tag: "Army Public School", category: "education", logo: "/images/clients/logo-aps-school.png" },
  { id: "cb-school", name: "C.B. School", tag: "Cantonment School", category: "education", logo: "/images/clients/logo-cb-school.png" },
  { id: "cantt-college", name: "Cantt Public Degree College", tag: "Cantonment Education", category: "education", logo: "/images/clients/logo-cantt-college.png" },
  { id: "al-kamran", name: "Al-Kamran School", tag: "Private Educational Institute", category: "education", logo: "/images/clients/logo-al-kamran.png" },
  { id: "smart-school", name: "The Smart School", tag: "Educational Network", category: "education", logo: "/images/clients/logo-smart-school.png" },
  { id: "iqra-library", name: "Iqra Library Malir Cantt", tag: "Public Educational Library", category: "education", logo: "/images/clients/logo-iqra-library.png" },

  // Healthcare & Community
  { id: "kims", name: "Kohat Institute of Medical Sciences (KIMS)", tag: "Medical Institution", category: "healthcare", logo: "/images/clients/logo-kims.png" },
  { id: "kims-hostel", name: "KIMS Girls' Hostel", tag: "Medical Hostel Complex", category: "healthcare", logo: "/images/clients/logo-kims-hostel.png" },
  { id: "kohat-cmh", name: "CMH Kohat", tag: "Combined Military Hospital", category: "healthcare", logo: "/images/clients/logo-kohat-cmh.png" },
  { id: "st-paul", name: "St. Paul's Church Malir Cantt", tag: "Community Church", category: "healthcare", logo: "/images/clients/logo-st-paul.png" },

  // Commercial & Real Estate
  { id: "4dot-market", name: "4 Dot Market Malir Cantt", tag: "Commercial Market Complex", category: "commercial", logo: "/images/clients/logo-4dot-market.png" },
  { id: "millennium-mall", name: "Millennium Mall", tag: "Shopping & Retail Centre", category: "commercial", logo: "/images/clients/logo-mill2.png" },
  { id: "movenpick", name: "Mövenpick Hotel Karachi", tag: "5-Star Hospitality", category: "commercial", logo: "/images/clients/logo-movein-hotel.png" },
  { id: "parikh-estate", name: "Parikh Estate", tag: "Real Estate Developers", category: "commercial", logo: "/images/clients/logo-parikh-estate.png" },
  { id: "zameen", name: "Zameen.com", tag: "Pakistan's #1 Property Portal", category: "commercial", logo: "/images/clients/logo-zameen2.png" },
  { id: "amc", name: "AMC Pakistan", tag: "Asset Management Corporation", category: "commercial", logo: "/images/clients/logo-amc.png" },

  // Petroleum & Industrial
  { id: "pso", name: "Pakistan State Oil (PSO)", subtitle: "Head Office", tag: "National Petroleum Giant", category: "industrial", logo: "/images/clients/logo-pso.png" },
  { id: "bilal-petro", name: "Bilal Petroleum", tag: "Petroleum Fuel Retail", category: "industrial", logo: "/images/clients/logo-bilal2.png" },
  { id: "byco", name: "Byco Petroleum (Windar)", tag: "Petroleum & Refinery", category: "industrial", logo: "/images/clients/logo-byco2.png" },
  { id: "safety-iron", name: "SAFETY IRON (Pvt.) Ltd.", tag: "Iron & Steel Manufacturing", category: "industrial", logo: "/images/clients/logo-safey-iron.png" },
  { id: "shafeeq-steel", name: "Shafeeq Steel (Pvt.) Ltd.", tag: "Heavy Steel Fabrication", category: "industrial", logo: "/images/clients/logo-shafeeq-steel.png" },
  { id: "edible-oils", name: "Edible Oils (Pvt.) Ltd.", tag: "Oil Processing Industry", category: "industrial", logo: "/images/clients/logo-adable-oils.png" },
  { id: "artistic-denim", name: "Artistic Denim", tag: "Textile & Denim Export", category: "industrial", logo: "/images/clients/logo-artistic-denim.png" },
  { id: "hub-salt", name: "Hub Salt", tag: "Salt Mining & Processing", category: "industrial", logo: "/images/clients/logo-hub-salt.png" },
  { id: "bolan-casting", name: "Bolan Castings Limited (Hub)", tag: "Automotive Casting Industry", category: "industrial", logo: "/images/clients/logo-bolan-casting.png" },
  { id: "barki-tyre", name: "The Barki Tyre", tag: "Automotive Tyre Systems", category: "industrial", logo: "/images/clients/logo-burki-tyre.png" },
];

export default function ClientsGridSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "marquee">("grid");

  const categories = [
    { id: "all", label: "All Clients", count: CLIENTS_LIST.length },
    { id: "defence", label: "Defence & Govt", count: CLIENTS_LIST.filter(c => c.category === "defence").length },
    { id: "education", label: "Education", count: CLIENTS_LIST.filter(c => c.category === "education").length },
    { id: "healthcare", label: "Healthcare & Community", count: CLIENTS_LIST.filter(c => c.category === "healthcare").length },
    { id: "commercial", label: "Commercial & Corporate", count: CLIENTS_LIST.filter(c => c.category === "commercial").length },
    { id: "industrial", label: "Industrial & Energy", count: CLIENTS_LIST.filter(c => c.category === "industrial").length },
  ];

  const filteredClients = activeCategory === "all" 
    ? CLIENTS_LIST 
    : CLIENTS_LIST.filter(c => c.category === activeCategory);

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#f1f5f9] border-y border-[#e2e8f0] py-14 sm:py-20 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER MATCHING USER SCREENSHOT */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284c7]/10 text-[#0284c7] text-xs font-mono font-semibold tracking-wider uppercase mb-3 border border-[#0284c7]/20">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            MASTECH ENGINEERING
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0f172a]">Clients</span>
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-[#475569] font-medium leading-relaxed">
            Trusted by organizations across Security, Education, Defence, Corporate & Commercial sectors.
          </p>

          {/* VIEW MODE TOGGLE BUTTONS */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "grid"
                  ? "bg-[#0f172a] text-white shadow-md shadow-[#0f172a]/20"
                  : "bg-white text-[#64748b] hover:text-[#0f172a] border border-[#e2e8f0]"
              }`}
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
              Grid Directory
            </button>

            <button
              onClick={() => setViewMode("marquee")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "marquee"
                  ? "bg-[#0f172a] text-white shadow-md shadow-[#0f172a]/20"
                  : "bg-white text-[#64748b] hover:text-[#0f172a] border border-[#e2e8f0]"
              }`}
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              Live Ticker View
            </button>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        {viewMode === "grid" && (
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#0284c7] text-white shadow-lg shadow-[#0284c7]/25 scale-[1.02]"
                      : "bg-white text-[#475569] hover:bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#cbd5e1]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-[#f1f5f9] text-[#64748b]"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* ── GRID DIRECTORY DISPLAY (MATCHING USER SCREENSHOT) ──────────────── */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="group relative bg-white rounded-2xl p-4 border border-[#e2e8f0] hover:border-[#0284c7] hover:shadow-[0_8px_30px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col items-center justify-between min-h-[140px] sm:min-h-[155px] cursor-default"
              >
                {/* Logo Image Container */}
                <div className="w-full h-20 sm:h-22 relative flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={180}
                    className="w-full h-full object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                  />
                </div>

                {/* Name & Subtitle Labels */}
                <div className="w-full text-center mt-2 pt-2 border-t border-[#f1f5f9]">
                  <h3 className="text-[11px] sm:text-xs font-bold text-[#0f172a] leading-tight group-hover:text-[#0284c7] transition-colors line-clamp-2">
                    {client.name}
                  </h3>
                  {client.subtitle && (
                    <span className="text-[10px] font-medium text-[#64748b] block mt-0.5">
                      {client.subtitle}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* CALLOUT CARD AT BOTTOM RIGHT (EXACT MATCH TO SCREENSHOT) */}
            {activeCategory === "all" && (
              <div className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0c2340] to-[#0f172a] text-white rounded-2xl p-5 border border-[#1e293b] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#0284c7]/20 border border-[#0284c7]/40 flex items-center justify-center text-[#38bdf8] flex-shrink-0">
                    <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold tracking-tight text-white">
                      Thank You to All Our Valued Clients
                    </h4>
                    <p className="text-[11px] text-[#94a3b8] mt-1 leading-snug">
                      Your trust inspires us to deliver better, safer and smarter solutions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── TICKER MARQUEE VIEW (DUAL-ROW ANIMATED SLIDER) ────────────────────── */}
        {viewMode === "marquee" && (
          <div className="space-y-4 py-4">
            {/* Row 1 — scrolls left */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]">
              <div className="animate-marquee flex items-stretch gap-4 px-4">
                {[...CLIENTS_LIST.slice(0, 19), ...CLIENTS_LIST.slice(0, 19)].map((client, i) => (
                  <div
                    key={`mq1-${client.id}-${i}`}
                    className="w-[200px] sm:w-[220px] flex-shrink-0 p-3.5 rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#0284c7] hover:shadow-lg transition-all duration-200 flex items-center gap-3.5 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] overflow-hidden flex items-center justify-center p-1.5 flex-shrink-0">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#0f172a] truncate group-hover:text-[#0284c7] transition-colors">
                        {client.name}
                      </div>
                      <div className="text-[10px] font-medium text-[#64748b] truncate mt-0.5">
                        {client.tag}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%-32px),transparent)]">
              <div className="animate-marquee-reverse flex items-stretch gap-4 px-4">
                {[...CLIENTS_LIST.slice(19), ...CLIENTS_LIST.slice(19)].map((client, i) => (
                  <div
                    key={`mq2-${client.id}-${i}`}
                    className="w-[200px] sm:w-[220px] flex-shrink-0 p-3.5 rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#0284c7] hover:shadow-lg transition-all duration-200 flex items-center gap-3.5 group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] overflow-hidden flex items-center justify-center p-1.5 flex-shrink-0">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#0f172a] truncate group-hover:text-[#0284c7] transition-colors">
                        {client.name}
                      </div>
                      <div className="text-[10px] font-medium text-[#64748b] truncate mt-0.5">
                        {client.tag}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── BOTTOM PRODUCT SERVICES PILL BAR (EXACT MATCH TO SCREENSHOT) ──────── */}
        <div className="mt-12 pt-6 border-t border-[#cbd5e1] flex items-center justify-center flex-wrap gap-4 sm:gap-8 text-xs font-bold text-[#0f172a]">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] shadow-sm">
            <svg className="w-4 h-4 text-[#0284c7] stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            <span>CCTV & Surveillance</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] shadow-sm">
            <svg className="w-4 h-4 text-[#eab308] stroke-current fill-none stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <span>Solar Systems</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] shadow-sm">
            <svg className="w-4 h-4 text-[#0284c7] stroke-current fill-none stroke-2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
            <span>Security Gates</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] shadow-sm">
            <svg className="w-4 h-4 text-[#ef4444] stroke-current fill-none stroke-2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            <span>Electric Fencing</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] shadow-sm">
            <svg className="w-4 h-4 text-[#0284c7] stroke-current fill-none stroke-2" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
            <span>Elevators</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white shadow-sm">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            <span>And More...</span>
          </div>
        </div>

      </div>
    </section>
  );
}
