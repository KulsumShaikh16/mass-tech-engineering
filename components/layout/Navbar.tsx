"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@/components/ui/Icons";

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Hardware" },
  { href: "/projects", label: "Projects" },
  { href: "/why-us", label: "Engineering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Scroll detection for navbar elevation
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keyboard accessibility: Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {/* Mobile Backdrop Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#fbfbfa]/95 backdrop-blur-xl border-b border-[#eaeaea] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            : "bg-[#fbfbfa]/90 backdrop-blur-md border-b border-[#eaeaea]"
        }`}
      >
        {/* ── TOP UTILITY STRIP (Desktop / Tablet) ── */}
        <div className="hidden lg:block bg-[#111111] text-[#a0a0a0] border-b border-[#262626] py-1.5 px-5 sm:px-8 lg:px-10 text-[11px] font-mono select-none">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left: Office Locations & Contractor Status */}
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[#e0e0e0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346538] animate-pulse" />
                <span className="text-white font-medium">Head Office:</span>
                <span>Karachi (Shahrah-e-Faisal)</span>
              </span>
              <span className="text-[#3a3a3a]">|</span>
              <span className="flex items-center gap-1.5 text-[#a0a0a0]">
                <span className="text-white font-medium">Branch:</span>
                <span>Islamabad (Faisal Town)</span>
              </span>
              <span className="text-[#3a3a3a] hidden xl:inline">|</span>
              <span className="hidden xl:inline text-[#28a745] bg-[#1a2f1e] px-2 py-0.5 rounded text-[10px]">
                Registered General Order Supplier
              </span>
            </div>

            {/* Right: Direct Contacts */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:mastechengineering@outlook.com"
                className="hover:text-white transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:underline"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>mastechengineering@outlook.com</span>
              </a>
              <span className="text-[#3a3a3a]">|</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="tel:+923212103576"
                  className="text-white hover:text-emerald-400 transition-colors font-semibold flex items-center gap-1.5 focus-visible:outline-none focus-visible:underline"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>0321-2103576</span>
                </a>
                <span className="text-[#444444]">/</span>
                <a
                  href="tel:+923369222274"
                  className="text-white hover:text-emerald-400 transition-colors font-semibold focus-visible:outline-none focus-visible:underline"
                >
                  <span>0336-9222274</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN NAVIGATION BAR ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[74px] sm:h-[80px] flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center group flex-shrink-0 transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded-lg"
            aria-label="Mas Tech Engineering Home"
          >
            <div className="relative h-11 sm:h-12 md:h-[50px] lg:h-[54px] w-[185px] sm:w-[220px] md:w-[250px] lg:w-[270px] flex-shrink-0">
              <Image
                src="/mastech-logo-official.jpeg"
                alt="Mas Tech Engineering — Smart Solutions, Strong Security, Bright Future"
                fill
                priority
                sizes="(max-width: 640px) 185px, (max-width: 768px) 220px, 270px"
                className="object-contain object-left mix-blend-multiply"
              />
            </div>
          </Link>

          {/* Desktop Navigation Segmented Pill */}
          <nav
            className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-[#f4f3ef]/90 border border-[#e5e4de] shadow-[0_1px_4px_rgba(0,0,0,0.02)] flex-shrink min-w-0"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 xl:px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
                    active
                      ? "text-[#111111] bg-white border border-[#eaeaea] shadow-[0_1px_4px_rgba(0,0,0,0.06)] font-semibold"
                      : "text-[#666666] hover:text-[#111111] hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group: Hotlines & Survey CTA */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 flex-shrink-0">
            {/* Direct Helpline Badge */}
            <a
              href="tel:+923212103576"
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f3ef] hover:bg-[#ebe9e3] border border-[#e5e4de] text-xs font-mono text-[#111111] transition-all hover:border-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              title="Call Primary Helpline"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#346538] animate-pulse" />
              <span className="font-semibold">0321-2103576</span>
            </a>

            {/* Direct WhatsApp Quick Button */}
            <a
              href="https://wa.me/923212103576"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Desk"
              title="Chat with engineer on WhatsApp"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#edf3ec] hover:bg-[#dfecde] border border-[#d2e4d0] text-[#346538] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#346538]"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2.003c-5.53 0-10.02 4.48-10.02 10.01 0 1.77.46 3.5 1.34 5.02L2 22l5.11-1.34a9.98 9.98 0 0 0 4.93 1.31h.01c5.53 0 10.02-4.48 10.02-10.01 0-2.67-1.04-5.19-2.93-7.08a9.96 9.96 0 0 0-7.1-2.9zm0 18.3a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.03.8.81-2.95-.2-.3a8.27 8.27 0 0 1-1.27-4.4c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.31.87 5.88 2.44a8.24 8.24 0 0 1 2.44 5.87c0 4.58-3.73 8.19-8.41 8.19zm4.56-6.19c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.13-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.48-.02s-.44.06-.67.31c-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.03 2.59.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29z" />
              </svg>
            </a>

            {/* Primary CTA Button */}
            <Link
              href="/contact"
              className="button-tactile h-9 sm:h-10 px-4 sm:px-5 rounded-full bg-[#111111] hover:bg-[#2f3437] text-white font-medium text-xs transition-all duration-200 inline-flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.12)] group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
            >
              <span>Site Survey</span>
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu & Quick WhatsApp Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/923212103576"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp"
              className="w-10 h-10 rounded-full bg-[#edf3ec] text-[#346538] border border-[#d2e4d0] flex items-center justify-center sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#346538]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2.003c-5.53 0-10.02 4.48-10.02 10.01 0 1.77.46 3.5 1.34 5.02L2 22l5.11-1.34a9.98 9.98 0 0 0 4.93 1.31h.01c5.53 0 10.02-4.48 10.02-10.01 0-2.67-1.04-5.19-2.93-7.08a9.96 9.96 0 0 0-7.1-2.9zm0 18.3a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.03.8.81-2.95-.2-.3a8.27 8.27 0 0 1-1.27-4.4c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.31.87 5.88 2.44a8.24 8.24 0 0 1 2.44 5.87c0 4.58-3.73 8.19-8.41 8.19zm4.56-6.19c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.13-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.48-.02s-.44.06-.67.31c-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.03 2.59.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29z" />
              </svg>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-lg border border-[#eaeaea] bg-white text-[#111111] hover:bg-[#f7f6f3] transition-all shadow-xs flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ── MOBILE SLIDE-DOWN DRAWER ── */}
        {open && (
          <div
            id="mobile-navigation"
            role="region"
            aria-label="Mobile Navigation"
            className="lg:hidden bg-[#fbfbfa] border-b border-[#eaeaea] px-5 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto"
          >
            {/* Quick Hotline Strip */}
            <div className="mb-4 p-3.5 rounded-xl bg-[#111111] text-white">
              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#262626] text-[11px] font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Engineering Hotline
                </span>
                <span className="text-[#888888]">Karachi &amp; Islamabad</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href="tel:+923212103576"
                  className="p-2.5 rounded-lg bg-[#1c1c1c] text-center border border-[#333333] hover:border-emerald-500 transition-colors block"
                >
                  <p className="text-[10px] text-[#888888] mb-0.5">Line 1</p>
                  <p className="font-semibold text-white">0321-2103576</p>
                </a>
                <a
                  href="tel:+923369222274"
                  className="p-2.5 rounded-lg bg-[#1c1c1c] text-center border border-[#333333] hover:border-emerald-500 transition-colors block"
                >
                  <p className="text-[10px] text-[#888888] mb-0.5">Line 2</p>
                  <p className="font-semibold text-white">0336-9222274</p>
                </a>
              </div>
            </div>

            {/* General Order Supplier Banner for Mobile Users */}
            <div className="mb-4 p-3 rounded-lg bg-[#edf3ec] border border-[#d2e4d0] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#346538] uppercase font-bold tracking-wider block">
                  Registered Supplier
                </span>
                <p className="text-xs text-[#111111] font-medium">
                  General Order Supplier &amp; Procurement
                </p>
              </div>
              <Link
                href="/services"
                className="text-[11px] font-semibold text-[#346538] hover:underline"
              >
                Explore &rarr;
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-1 mb-5">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between min-h-[44px] px-4 py-2.5 rounded-lg text-sm transition-all ${
                      active
                        ? "bg-white text-[#111111] font-semibold border border-[#eaeaea] shadow-xs"
                        : "text-[#555555] hover:bg-white hover:text-[#111111]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />}
                  </Link>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-3 border-t border-[#eaeaea]">
              <a
                href="https://wa.me/923212103576"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] font-medium text-xs transition-colors"
              >
                <span>💬 Chat on WhatsApp Procurement Desk</span>
              </a>

              <a
                href="mailto:mastechengineering@outlook.com"
                className="w-full min-h-[40px] flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#eaeaea] text-[#666666] text-xs font-mono"
              >
                <span>✉️ mastechengineering@outlook.com</span>
              </a>

              <Link
                href="/contact"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#111111] text-white font-medium text-xs shadow-md"
              >
                <span>Request Free Site Survey</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

