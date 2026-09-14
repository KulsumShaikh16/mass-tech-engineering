import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHead from "@/components/ui/SectionHead";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us | Mas Tech Engineering",
  description:
    "Founded in Islamabad, Mas Tech Engineering delivers premium solar, CCTV, security, and electrical engineering services with a 1-year warranty on every job.",
};

const milestones = [
  { year: "Founded", text: "Mas Tech Engineering launched in Islamabad with a focus on security systems and electrical works." },
  { year: "50+ Projects", text: "Completed over 50 residential and commercial installations across the twin cities." },
  { year: "Solar Division", text: "Expanded into solar energy — hybrid and grid-tied systems for homes, offices and factories." },
  { year: "500+ Projects", text: "Crossed 500 completed installations with a growing team of certified engineers." },
];

const values = [
  {
    title: "Quality First",
    description: "We use only tier-1, genuine hardware from trusted manufacturers — never compromising on materials to save costs.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Client-Centric",
    description: "Every project starts with understanding your needs. We provide honest advice, transparent pricing, and no hidden costs.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 20c0-3 3-5.5 7-5.5s7 2.5 7 5.5" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description: "From the first site survey to ongoing maintenance, we stay committed. 24/7 support and a 1-year warranty on every job.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We stay current with the latest in smart security, solar technology, and building automation to deliver future-ready systems.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
];

const certifications = [
  "Hikvision Certified Partner",
  "Tier-1 Solar Panel Supplier",
  "Licensed Electrical Contractor",
  "ISO-Compliant Installations",
];

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="About Mas Tech"
          heading="Engineered for Trust, Security, and Sustainability"
          subtext="Mas Tech Engineering & Security Solutions provides high-grade security, solar power, and automation engineering for homes, offices, factories and malls across Islamabad."
          level={1}
        />

        {/* ── Mission & Story ── */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
          <AnimatedSection direction="left" className="space-y-5">
            <h2 className="text-2xl font-normal text-[#111111] font-editorial">Our Story</h2>
            <p className="text-[#787774] text-sm sm:text-base leading-relaxed">
              Founded in Islamabad, Mas Tech Engineering was built on a simple idea: one team should
              handle everything — from planning and design to installation and long-term support.
              Instead of hiring separate contractors for solar, CCTV, fencing, and electrical works,
              our clients get a single point of contact, a single warranty, and a single number to call.
            </p>
            <p className="text-[#787774] text-sm sm:text-base leading-relaxed">
              Over the years, we&apos;ve grown from a small electrical contracting team into a
              full-service engineering company serving residential properties, corporate offices,
              factories, shopping malls, and industrial complexes. With 500+ completed projects and
              counting, we remain committed to quality hardware, professional installation, and
              after-sales support that actually answers the phone.
            </p>
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#eaeaea] bg-white mt-4">
              <Image
                src="/mastech-solar-rooftop.jpg"
                alt="Mas Tech Commercial Solar Rooftop Installation Islamabad"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15} className="space-y-6">
            <h2 className="text-2xl font-normal text-[#111111] font-editorial">Our Mission</h2>
            <div className="p-8 rounded-xl bg-white border border-[#eaeaea]">
              <p className="text-[#111111] font-editorial text-lg sm:text-xl leading-relaxed italic">
                &ldquo;To deliver smart, reliable engineering solutions that protect your property,
                reduce your energy costs, and give you lasting peace of mind — backed by real
                warranty and real support.&rdquo;
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["10+", "Engineering Systems"],
                ["500+", "Projects Completed"],
                ["1 Year", "Warranty on Every Job"],
                ["24/7", "After-Sales Support"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="p-4 rounded-lg bg-white border border-[#eaeaea] text-center"
                >
                  <div className="text-xl font-normal text-[#111111] font-mono">{value}</div>
                  <div className="text-xs text-[#787774] mt-1 font-mono">{label}</div>
                </div>
              ))}
            </div>
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#eaeaea] bg-white">
              <Image
                src="/mastech-cctv-surveillance.jpg"
                alt="Mas Tech 4K ColorVu AI Security Camera Engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* ── Timeline ── */}
        <div className="mt-24">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111] font-editorial text-center mb-12">
              Our Journey
            </h2>
          </AnimatedSection>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-[#eaeaea]" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center border border-[#eaeaea]">
                        <span className="text-xs font-mono font-medium">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <div className={`flex-1 p-6 rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all ${i % 2 === 1 ? "sm:text-right" : ""}`}>
                      <span className="text-xs uppercase tracking-wider text-[#111111] font-mono font-semibold">
                        {m.year}
                      </span>
                      <p className="text-[#787774] text-xs sm:text-sm mt-2 leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* ── Core Values ── */}
        <div className="mt-24">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111111] font-editorial text-center mb-12">
              What We Stand For
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08} direction="up">
                <div className="h-full p-6 rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all duration-200 group">
                  <div className="w-9 h-9 rounded-lg bg-[#f7f6f3] border border-[#eaeaea] flex items-center justify-center mb-4 text-[#111111]">
                    {v.icon}
                  </div>
                  <h3 className="font-editorial text-lg text-[#111111] mb-2">{v.title}</h3>
                  <p className="text-[#787774] text-xs leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* ── Certifications ── */}
        <AnimatedSection className="mt-24 p-8 rounded-xl bg-[#f7f6f3] border border-[#eaeaea]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-normal text-[#111111] mb-3 font-editorial">
                Certifications &amp; Partnerships
              </h2>
              <p className="text-[#787774] text-sm leading-relaxed">
                We work with industry-leading manufacturers and maintain certifications that
                guarantee the quality and authenticity of every installation.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2.5 text-[#111111] text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346538] flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* ── CTA ── */}
        <AnimatedSection className="mt-16 p-10 rounded-xl bg-white border border-[#eaeaea] text-center">
          <h2 className="text-2xl sm:text-3xl font-normal text-[#111111] mb-3 font-editorial">
            Ready to work with Mas Tech?
          </h2>
          <p className="text-[#787774] text-sm mb-6 max-w-xl mx-auto">
            Book your free site survey today and get an accurate quotation with no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#111111] hover:bg-[#2f3437] text-white font-medium rounded-[6px] transition-all text-xs"
            >
              Get free quotation
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#eaeaea] bg-white hover:bg-[#f7f6f3] text-[#111111] rounded-[6px] transition-all text-xs font-medium"
            >
              View our services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
