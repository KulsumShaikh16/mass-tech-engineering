"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      title="Back to top"
      className={`fixed bottom-6 right-20 z-40 w-11 h-11 rounded-full bg-[#111111] hover:bg-[#2f3437] text-white border border-[#eaeaea] shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all duration-300 button-tactile cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] ${
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
    >
      <svg
        className="w-5 h-5 fill-none stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
