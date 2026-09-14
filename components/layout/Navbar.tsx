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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[#fbfbfa]/95 backdrop-blur-md border-b border-[#eaeaea] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "bg-[#fbfbfa]/85 backdrop-blur-sm border-b border-[#eaeaea]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-[96px] flex items-center justify-between gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center group flex-shrink-0"
            aria-label="Mas Tech Engineering Home"
          >
            <div className="relative h-16 sm:h-[76px] w-[260px] sm:w-[360px] flex-shrink-0">
              <Image
                src="/mastech-logo-official.jpeg"
                alt="Mas Tech Engineering — Smart Solutions, Strong Security, Bright Future"
                fill
                priority
                sizes="360px"
                className="object-contain object-left mix-blend-multiply"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 p-1 rounded-lg bg-[#f7f6f3] border border-[#eaeaea] flex-shrink min-w-0"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-[5px] text-xs font-medium tracking-wide transition-all duration-150 whitespace-nowrap ${
                    active
                      ? "text-[#111111] bg-white border border-[#eaeaea] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                      : "text-[#787774] hover:text-[#111111] hover:bg-white/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Direct Phone & Consultation CTA */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+923298737321"
              className="text-xs font-mono text-[#787774] hover:text-[#111111] transition-colors px-2 py-1 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
              <span>0329-8737321</span>
            </a>
            <Link
              href="/contact"
              className="button-tactile h-9 px-4 rounded-[6px] bg-[#111111] hover:bg-[#2f3437] text-white font-medium text-xs transition-all duration-150 inline-flex items-center gap-2"
            >
              <span>Site Survey</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md border border-[#eaeaea] bg-white text-[#111111] hover:bg-[#f7f6f3] transition-all"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="lg:hidden bg-[#fbfbfa] border-b border-[#eaeaea] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      active
                        ? "bg-white text-[#111111] font-semibold border border-[#eaeaea]"
                        : "text-[#787774] hover:bg-white hover:text-[#111111]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-[#eaeaea] flex flex-col gap-2.5">
                <a
                  href="tel:+923298737321"
                  className="px-4 py-2 rounded-md border border-[#eaeaea] bg-white text-center text-xs font-mono text-[#111111]"
                >
                  Call 0329-8737321
                </a>
                <Link
                  href="/contact"
                  className="px-4 py-2.5 rounded-[6px] bg-[#111111] text-white font-medium text-xs text-center"
                >
                  Request Site Survey
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
