import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#f7f6f3] border-t border-[#eaeaea] mt-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Direct Hotlines */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="relative h-20 sm:h-[88px] w-[300px] sm:w-[420px]">
                <Image
                  src="/mastech-logo-official.jpeg"
                  alt="Mas Tech Engineering — Smart Solutions, Strong Security, Bright Future"
                  fill
                  sizes="420px"
                  className="object-contain object-left mix-blend-multiply"
                />
              </div>
            </div>
            <p className="text-[#787774] text-xs sm:text-sm leading-relaxed max-w-sm mb-5">
              Engineering, installing, and maintaining Tier-1 industrial solar arrays, AI CCTV surveillance,
              automatic barriers, walkthrough gates, elevators and perimeter defenses across Karachi, Islamabad, and Rawalpindi.
            </p>

            {/* Direct Contact Numbers & Email */}
            <div className="space-y-2 mb-5 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="tel:+923212103576"
                  className="button-tactile inline-flex items-center gap-2 px-3 py-1.5 rounded-[5px] border border-[#eaeaea] bg-white text-[#111111] hover:border-[#111111] transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                  <span>📞 0321-2103576</span>
                </a>
                <a
                  href="tel:+923369222274"
                  className="button-tactile inline-flex items-center gap-2 px-3 py-1.5 rounded-[5px] border border-[#eaeaea] bg-white text-[#111111] hover:border-[#111111] transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                  <span>📞 0336-9222274</span>
                </a>
                <a
                  href="https://wa.me/923212103576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-tactile inline-flex items-center gap-2 px-3 py-1.5 rounded-[5px] bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] hover:bg-[#e0ebe0] transition-all font-medium"
                >
                  <span>💬 WhatsApp Desk</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:mastechengineering@outlook.com"
                  className="inline-flex items-center gap-1.5 text-[#787774] hover:text-[#111111] transition-colors py-0.5"
                >
                  <span>✉️ mastechengineering@outlook.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-[#111111] font-mono mb-4 text-[11px] uppercase tracking-[0.16em]">
              Turnkey Systems
            </h4>
            <ul className="space-y-2.5">
              {[
                "Commercial Solar Power",
                "Hikvision AI Surveillance",
                "Automatic Barrier Gates",
                "Electric Perimeter Fencing",
                "Metal Detect Walkthroughs",
                "Passenger & Cargo Lifts",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[#787774] hover:text-[#111111] transition-colors text-xs"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Offices: Head Office & Branch Office */}
          <div>
            <h4 className="text-[#111111] font-mono mb-4 text-[11px] uppercase tracking-[0.16em]">
              Office Locations
            </h4>
            <div className="space-y-4">
              {/* Head Office Karachi */}
              <div className="p-3 rounded-lg bg-white border border-[#eaeaea]">
                <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#346538] mb-1">
                  Head Office — Karachi
                </p>
                <p className="text-[#111111] text-xs leading-relaxed font-mono">
                  Suit No. # 7-8, Mina Avenue, Shahrah-e-Faisal, Karachi.
                </p>
              </div>

              {/* Branch Office Islamabad */}
              <div className="p-3 rounded-lg bg-white border border-[#eaeaea]">
                <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#111111] mb-1">
                  Branch Office — Islamabad
                </p>
                <p className="text-[#787774] text-xs leading-relaxed font-mono">
                  Suit No. # 203., J1 Tower, B-Block, Faisal Town, Islamabad.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#eaeaea] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#787774] text-xs">
            &copy; {year} Mas Tech Engineering. Certified Turnkey Contractors.
          </p>
          <p className="text-[#787774] text-xs font-mono">
            Karachi (Head Office) · Islamabad (Branch) · Nationwide Operations
          </p>
        </div>
      </div>
    </footer>
  );
}
