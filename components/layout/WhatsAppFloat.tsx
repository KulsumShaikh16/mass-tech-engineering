"use client";

import { useState } from "react";

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111111] text-white text-xs font-mono border border-[#2f3437] shadow-lg transition-all duration-200 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#346538] animate-ping" />
        <span>Direct Engineering Line (0329-8737321)</span>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/923298737321"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mas Tech Engineering on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-12 h-12 bg-[#111111] hover:bg-[#2f3437] text-white rounded-full flex items-center justify-center border border-[#eaeaea] shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-105 active:scale-95 group"
      >
        {/* Pulsing online badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#346538] border-2 border-white rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </span>

        {/* WhatsApp Icon */}
        <svg className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
          <path d="M12.04 2.003c-5.53 0-10.02 4.48-10.02 10.01 0 1.77.46 3.5 1.34 5.02L2 22l5.11-1.34a9.98 9.98 0 0 0 4.93 1.31h.01c5.53 0 10.02-4.48 10.02-10.01 0-2.67-1.04-5.19-2.93-7.08a9.96 9.96 0 0 0-7.1-2.9zm0 18.3a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.03.8.81-2.95-.2-.3a8.27 8.27 0 0 1-1.27-4.4c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.31.87 5.88 2.44a8.24 8.24 0 0 1 2.44 5.87c0 4.58-3.73 8.19-8.41 8.19zm4.56-6.19c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.13-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.48-.02s-.44.06-.67.31c-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.03 2.59.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29z"/>
        </svg>
      </a>
    </div>
  );
}

