"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SolarIcon,
  CctvIcon,
  BarrierIcon,
  FencingIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";

const corePillars = [
  {
    id: "cctv",
    title: "AI Surveillance",
    tag: "Hikvision 4K",
    metric: "ColorVu Night Vision",
    image: "/mastech-cctv-surveillance.jpg",
    statusBadge: "SENSOR OPTICS ACTIVE",
    specLeft: "4K / ColorVu F1.0",
    specRight: "AcuSense Vehicle AI",
    dispatch: "Within 2h",
    sla: "1-Year Full",
    auth: "100% Genuine",
    pastelBg: "bg-[#e1f3fe]",
    pastelText: "text-[#1f6c9f]",
    pastelBorder: "border-[#cbe9fd]",
    icon: CctvIcon,
  },
  {
    id: "solar",
    title: "Solar Engineering",
    tag: "Net-Metering",
    metric: "Tier-1 Photovoltaics",
    image: "/mastech-solar-rooftop.jpg",
    statusBadge: "GRID SYNCHRONIZED",
    specLeft: "Tier-1 Bifacial Array",
    specRight: "Growatt Smart Inverter",
    dispatch: "Within 4h",
    sla: "25-Yr Perf.",
    auth: "Tier-1 Longi",
    pastelBg: "bg-[#fbf3db]",
    pastelText: "text-[#956400]",
    pastelBorder: "border-[#f5e6b7]",
    icon: SolarIcon,
  },
  {
    id: "barrier",
    title: "Boom Barriers",
    tag: "Centurion ANPR",
    metric: "0.8s Cycle Time",
    image: "/mastech-barrier-gate.jpg",
    statusBadge: "ANPR CAMERAS READY",
    specLeft: "0.8s Transit Speed",
    specRight: "Centurion High-Torque",
    dispatch: "Within 2h",
    sla: "1-Year Full",
    auth: "OEM Centurion",
    pastelBg: "bg-[#edf3ec]",
    pastelText: "text-[#346538]",
    pastelBorder: "border-[#d2e4d0]",
    icon: BarrierIcon,
  },
  {
    id: "fencing",
    title: "Perimeter Defense",
    tag: "Shock Deterrent",
    metric: "9.5 kV Monitored",
    image: "/mastech-electric-fence.jpg",
    statusBadge: "ENERGIZED PULSE ARMED",
    specLeft: "9.5 kV Pulse Deterrent",
    specRight: "Instant Cut Siren Relay",
    dispatch: "Within 2h",
    sla: "1-Year Full",
    auth: "Certified Regulated",
    pastelBg: "bg-[#fdebec]",
    pastelText: "text-[#9f2f2d]",
    pastelBorder: "border-[#fbd4d6]",
    icon: FencingIcon,
  },
];

export default function CommandCenterVisual() {
  const [activeTab, setActiveTab] = useState("cctv");
  const currentPillar = corePillars.find((p) => p.id === activeTab) || corePillars[0];

  return (
    <div className="relative w-full rounded-2xl bg-white border border-[#eaeaea] shadow-[0_2px_24px_rgba(0,0,0,0.03)] overflow-hidden p-6 sm:p-8 lg:p-12 transition-all">
      
      {/* ── BACKGROUND ARCHITECTURAL GRID ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid-pattern opacity-40" />
      </div>

      {/* ── TOP UTILITY STRIP: VERIFICATION & DIRECT LINE ── */}
      <div className="relative z-20 pb-6 mb-8 border-b border-[#eaeaea] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] font-mono text-[11px] uppercase tracking-wider font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
            Islamabad &amp; Rawalpindi Certified
          </span>
          <span className="hidden sm:inline font-mono text-xs text-[#787774]">
            15+ Years Turnkey Engineering
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-[#787774] hidden md:inline">DIRECT LINES:</span>
          <a
            href="tel:+923212103576"
            className="px-2.5 py-1 rounded-[6px] bg-[#f7f6f3] border border-[#eaeaea] text-[#111111] hover:bg-white hover:border-[#111111] transition-all font-mono text-xs flex items-center gap-1.5 tabular-nums"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
            <span>0321-2103576</span>
          </a>
          <a
            href="tel:+923369222274"
            className="px-2.5 py-1 rounded-[6px] bg-[#f7f6f3] border border-[#eaeaea] text-[#111111] hover:bg-white hover:border-[#111111] transition-all font-mono text-xs hidden sm:flex items-center gap-1.5 tabular-nums"
          >
            <span>0336-9222274</span>
          </a>
        </div>
      </div>

      {/* ── MAIN HERO SPLIT: EDITORIAL COPY (LEFT) + DYNAMIC HARDWARE PREVIEW (RIGHT) ── */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* ── LEFT COLUMN (lg:col-span-7): Editorial Value Proposition ── */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Status Chip Strip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f6f3] border border-[#eaeaea] text-xs font-mono mb-5 text-[#2f3437]">
            <span className="text-[#111111] font-semibold">MAS TECH ENGINEERING</span>
            <span className="text-[#787774]">·</span>
            <span className="text-[#787774]">SMART ENGINEERING. SMART SECURITY. SMART FUTURE.</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-[46px] font-normal text-[#111111] leading-[1.12] tracking-[-0.03em] mb-5">
            Complete Engineering &amp; Security Solutions for Homes, Offices, Factories &amp; Commercial Projects
          </h1>

          {/* Clean Descriptive Copy */}
          <p className="text-sm sm:text-base text-[#787774] leading-relaxed mb-8 max-w-xl">
            Whether you need security, solar, access control, elevators, escalators or electrical engineering solutions, MAS TECH ENGINEERING provides professional solutions tailored to your requirements.
          </p>

          {/* Action CTAs: Requested Button Set */}
          <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
            <Link
              href="/contact"
              className="button-tactile h-11 px-5 rounded-[6px] bg-[#111111] hover:bg-[#2f3437] text-white font-medium text-xs transition-all duration-150 inline-flex items-center gap-2"
            >
              <span>GET A FREE SITE SURVEY</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>

            <a
              href="https://wa.me/923212103576"
              target="_blank"
              rel="noopener noreferrer"
              className="button-tactile h-11 px-4.5 rounded-[6px] bg-white border border-[#eaeaea] hover:bg-[#f7f6f3] hover:border-[#111111] text-[#111111] font-medium text-xs transition-all duration-150 inline-flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#346538]" />
              <span>WHATSAPP US</span>
            </a>

            <Link
              href="/services"
              className="button-tactile h-11 px-4 rounded-[6px] bg-[#f7f6f3] border border-[#eaeaea] hover:bg-white hover:border-[#111111] text-[#111111] font-medium text-xs transition-all duration-150 inline-flex items-center gap-1.5"
            >
              <span>OUR SERVICES</span>
            </Link>
          </div>

          {/* 4 Core Pillars Interactive Tabs */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 border-t border-[#eaeaea]">
            {corePillars.map((p) => {
              const active = activeTab === p.id;
              const IconComp = p.icon;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveTab(p.id)}
                  className={`p-3 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-white border-[#111111] shadow-[0_2px_12px_rgba(0,0,0,0.06)] ring-1 ring-[#111111]"
                      : "bg-[#fbfbfa] border-[#eaeaea] hover:bg-white hover:border-[#111111]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                      active ? "bg-[#111111] border-[#111111] text-white" : "bg-[#f7f6f3] border-[#eaeaea] text-[#111111]"
                    }`}>
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-[9px] font-mono font-medium uppercase px-1.5 py-0.5 rounded ${p.pastelBg} ${p.pastelText} border ${p.pastelBorder}`}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#111111] truncate">{p.title}</div>
                  <div className="text-[10px] text-[#787774] font-mono truncate mt-0.5 tabular-nums">{p.metric}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT COLUMN (lg:col-span-5): Dynamic Faux-OS Window Chrome Frame ── */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-md rounded-xl border border-[#eaeaea] bg-white overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all">
            
            {/* macOS Window Controls Chrome */}
            <div className="px-4 py-2.5 bg-[#fbfbfa] border-b border-[#eaeaea] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#eaeaea] border border-[#dcdbd8]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#eaeaea] border border-[#dcdbd8]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#eaeaea] border border-[#dcdbd8]" />
              </div>
              <span className="font-mono text-[11px] text-[#787774]">
                telemetry · {currentPillar.id}.sys
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#346538]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                ONLINE
              </span>
            </div>

            {/* Dynamic Hardware Visual Container */}
            <div className="relative aspect-[4/3] w-full bg-[#f7f6f3] overflow-hidden">
              <Image
                key={currentPillar.id}
                src={currentPillar.image}
                alt={`${currentPillar.title} Hardware Installation`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Monospace Telemetry Overlays */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-black/75 backdrop-blur-sm text-white font-mono text-[11px] border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346538] animate-pulse" />
                  {currentPillar.statusBadge}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white font-mono text-[11px] gap-2">
                <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 truncate">
                  {currentPillar.specLeft}
                </span>
                <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 truncate">
                  {currentPillar.specRight}
                </span>
              </div>
            </div>

            {/* Technical Metadata Footer with Tabular Figures */}
            <div className="p-4 bg-white border-t border-[#eaeaea] grid grid-cols-3 gap-2 text-center font-mono">
              <div className="p-2 rounded bg-[#fbfbfa] border border-[#eaeaea]">
                <span className="block text-[10px] text-[#787774]">SLA DISPATCH</span>
                <span className="block text-xs font-semibold text-[#111111] tabular-nums">{currentPillar.dispatch}</span>
              </div>
              <div className="p-2 rounded bg-[#fbfbfa] border border-[#eaeaea]">
                <span className="block text-[10px] text-[#787774]">WARRANTY</span>
                <span className="block text-xs font-semibold text-[#111111] tabular-nums">{currentPillar.sla}</span>
              </div>
              <div className="p-2 rounded bg-[#fbfbfa] border border-[#eaeaea]">
                <span className="block text-[10px] text-[#787774]">HARDWARE</span>
                <span className="block text-xs font-semibold text-[#346538]">{currentPillar.auth}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
