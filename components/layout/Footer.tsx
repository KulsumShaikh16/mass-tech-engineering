import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#f7f6f3] border-t border-[#eaeaea] mt-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
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
            <p className="text-[#787774] text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Engineering, installing, and maintaining Tier-1 industrial solar arrays, AI CCTV surveillance,
              automatic barriers, and perimeter defenses across Islamabad and Rawalpindi.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="tel:+923298737321"
                className="button-tactile flex items-center gap-2 px-3 py-1.5 rounded-[5px] border border-[#eaeaea] bg-white text-[#111111] hover:border-[#111111] transition-all text-xs font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                0329-8737321
              </a>
              <a
                href="https://wa.me/923298737321"
                target="_blank"
                rel="noopener noreferrer"
                className="button-tactile flex items-center gap-2 px-3 py-1.5 rounded-[5px] bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] hover:bg-[#e0ebe0] transition-all text-xs font-medium"
              >
                WhatsApp Desk
              </a>
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

          {/* Company & Headquarters */}
          <div>
            <h4 className="text-[#111111] font-mono mb-4 text-[11px] uppercase tracking-[0.16em]">
              Engineering Office
            </h4>
            <ul className="space-y-2.5">
              {[
                ["Why Us", "/why-us"],
                ["Our Process", "/process"],
                ["Industries", "/industries"],
                ["Contact & Survey", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#787774] hover:text-[#111111] transition-colors text-xs"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-[#eaeaea]">
              <p className="text-[#787774] text-xs leading-relaxed font-mono">
                Suite 203, J1 Tower, Block B<br />
                Faisal Town, Islamabad
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#eaeaea] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#787774] text-xs">
            &copy; {year} Mas Tech Engineering. Certified Turnkey Contractors.
          </p>
          <p className="text-[#787774] text-xs font-mono">
            Islamabad · Rawalpindi · Industrial Zone
          </p>
        </div>
      </div>
    </footer>
  );
}
