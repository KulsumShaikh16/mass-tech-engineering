import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, extraServices } from "@/lib/data";
import SectionHead from "@/components/ui/SectionHead";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ServiceIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Services & General Order Supplier | Mas Tech Engineering",
  description:
    "Complete general order supplier and turnkey engineering across Pakistan — Solar systems, CCTV security, walk-through gates, barrier gates, electric fencing, elevators, escalators, and full-scope technical procurement.",
};

const procurementCategories = [
  {
    title: "Electrical Switchgear & Distribution",
    items: "LT/HT panels, industrial circuit breakers, power transformers, copper busbars, armored cables, and distribution boards.",
    tag: "Power & Electrical",
  },
  {
    title: "Security & Physical Access Hardware",
    items: "Optical walk-through gates, automated barrier arms, turnstiles, baggage X-ray machines, and electric perimeter energizers.",
    tag: "Perimeter & Access",
  },
  {
    title: "AI CCTV & Optical Surveillance",
    items: "Hikvision/Dahua IP cameras, PTZ tracking units, 32/64-ch NVR servers, optical fiber transceivers, and command monitoring screens.",
    tag: "Surveillance",
  },
  {
    title: "Solar Power & Renewable Hardware",
    items: "Tier-1 N-Type bifacial solar panels, on-grid/hybrid inverters, lithium battery banks, DC breakers, and galvanized mounting structures.",
    tag: "Solar Energy",
  },
  {
    title: "Elevators, Escalators & Mechanical Spares",
    items: "Passenger & freight lift controllers, traction machines, door operator drives, escalator steps, handrails, and safety governors.",
    tag: "Vertical Transit",
  },
  {
    title: "IT Infrastructure, Racks & Networking",
    items: "Server rack cabinets, Cat6/fiber patch panels, PoE managed switches, enterprise access points, and online UPS backup units.",
    tag: "IT & Telecom",
  },
  {
    title: "Industrial Tools, Spares & Hardware",
    items: "Electric power tools, pneumatic actuators, industrial bearings, high-tensile fasteners, hydraulic pumps, and fabrication steel.",
    tag: "Industrial Hardware",
  },
  {
    title: "Safety Equipment & Certified PPE",
    items: "Fire-rated extinguishers, industrial smoke detectors, safety boots, certified helmets, high-vis jackets, and fall protection harnesses.",
    tag: "Safety & PPE",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="What We Build, Protect &amp; Supply"
          heading="Turnkey Engineering Systems &amp; General Order Supplier Across Pakistan"
          subtext="From rooftop solar and security gates to multi-category technical procurement, electrical hardware, IT equipment, and tender supplies — Mas Tech Engineering delivers full-scope capabilities under one registered, accountable partner."
          level={1}
        />

        {/* ── CORE SERVICES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.04} direction="up">
              <article className="relative h-full p-6 rounded-2xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(17,17,17,0.04)] group flex flex-col justify-between overflow-hidden">
                <div className="flex-1 flex flex-col">
                  {/* Photograph */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#eaeaea] mb-5 bg-[#fbfbfa]">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Mas Tech Engineering`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {service.badge && (
                      <div className="absolute top-2.5 right-2.5 z-10">
                        <span className={`text-[10px] font-mono font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-sm shadow-sm ${service.pastelTag || "bg-white text-[#111111] border-[#eaeaea]"}`}>
                          {service.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Header: Icon & Category */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f7f6f3] border border-[#eaeaea] flex items-center justify-center text-[#111111] group-hover:border-[#111111] group-hover:bg-white transition-all flex-shrink-0">
                      <ServiceIcon id={service.icon} className="w-4 h-4" />
                    </div>
                    <h3 className="font-editorial text-xl font-normal text-[#111111] group-hover:text-[#2f3437] transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-[#787774] text-xs sm:text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Specification Bullets (Pinned to Bottom of Content Area) */}
                  <ul className="space-y-2 mb-6 border-t border-[#eaeaea] pt-4 mt-auto">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-[#2f3437] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="button-tactile inline-flex items-center justify-between w-full pt-3.5 border-t border-[#eaeaea] text-xs font-medium text-[#111111] hover:text-[#787774] transition-colors focus-visible:outline-none"
                >
                  <span>Request Site Survey / Quote</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* ── DEDICATED GENERAL ORDER SUPPLIER & PROCUREMENT SHOWCASE ── */}
        <AnimatedSection className="p-8 sm:p-12 rounded-2xl bg-white border-2 border-[#111111] mb-20 shadow-[0_12px_40px_rgba(17,17,17,0.06)] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#111111] text-white text-[10px] font-mono uppercase tracking-[0.2em] px-4 py-1.5 rounded-bl-xl font-medium">
            Turnkey Procurement &amp; Tender Execution
          </div>

          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] text-[11px] font-mono uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#346538] animate-pulse" />
              One-Window Supplier Across Pakistan
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl font-normal text-[#111111] mb-4 leading-tight">
              General Order Supplier: Any Technical Equipment, Delivered &amp; Warrantied
            </h2>
            <p className="text-[#787774] text-sm sm:text-base leading-relaxed">
              Eliminate the hassle of managing multiple fragmented vendors. As an officially registered General Order Supplier with NTN and GST credentials, Mas Tech Engineering sources, inspects, delivers, and commissions all categories of engineering hardware, industrial supplies, security devices, and tender items for commercial, corporate, healthcare, and defence sectors.
            </p>
          </div>

          {/* Sourcing Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {procurementCategories.map((cat) => (
              <div
                key={cat.title}
                className="p-4 rounded-xl bg-[#fbfbfa] border border-[#eaeaea] hover:border-[#111111] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#346538] bg-[#edf3ec] px-2 py-0.5 rounded border border-[#d2e4d0] inline-block mb-2">
                    {cat.tag}
                  </span>
                  <h4 className="font-sans text-xs font-semibold text-[#111111] mb-1.5 leading-snug">
                    {cat.title}
                  </h4>
                  <p className="text-[#787774] text-[11px] leading-relaxed">
                    {cat.items}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Advantages Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#eaeaea] mb-8 font-mono text-xs">
            <div className="flex items-start gap-3">
              <span className="text-base text-[#346538]">✓</span>
              <div>
                <p className="font-semibold text-[#111111]">Tender &amp; BOQ Execution</p>
                <p className="text-[#787774] text-[11px]">Registered vendor for Government, Armed Forces, CMH, Askari, and corporate tenders with full tax invoices.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-base text-[#346538]">✓</span>
              <div>
                <p className="font-semibold text-[#111111]">Nationwide Site Logistics</p>
                <p className="text-[#787774] text-[11px]">Direct warehousing and rapid freight delivery to Karachi, Islamabad, Rawalpindi, Lahore, and remote project facilities.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-base text-[#346538]">✓</span>
              <div>
                <p className="font-semibold text-[#111111]">Engineer-Tested Genuine Parts</p>
                <p className="text-[#787774] text-[11px]">Every batch is inspected by qualified electrical and mechanical engineers with manufacturer warranty backup.</p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#f7f6f3] border border-[#eaeaea]">
            <div>
              <p className="text-xs font-semibold text-[#111111]">Have a Custom Supply Bill of Quantities (BOQ) or Tender Requirement?</p>
              <p className="text-[#787774] text-xs">Send us your specifications for an immediate competitive formal quote.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact?service=General%20Order%20Supplier%20%26%20Procurement"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#2f3437] text-white font-medium rounded-[6px] text-xs transition-all"
              >
                <span>Submit Supply Inquiry</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <a
                href="https://wa.me/923212103576?text=Hi%20Mas%20Tech,%20I%20have%20a%20general%20order%20supply%20/%20procurement%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] hover:bg-[#e0ebe0] rounded-[6px] text-xs font-medium transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                <span>WhatsApp Procurement Desk</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* ── COMPLEMENTARY SERVICES ── */}
        <AnimatedSection className="p-8 sm:p-10 rounded-xl bg-[#f7f6f3] border border-[#eaeaea] mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#787774] mb-2 block">
                Full-Scope Capabilities
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#111111] mb-3">
                Also In Our Engineering &amp; Supply Scope
              </h3>
              <p className="text-[#787774] text-sm leading-relaxed">
                We handle complementary building infrastructure systems, IT backbones, and industrial safety equipment to provide a single responsible contractor for commercial and residential developments.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {extraServices.map((es) => (
                <li
                  key={es.name}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#eaeaea] text-[#111111] text-xs font-medium hover:border-[#111111] transition-all"
                >
                  <span className="text-[#111111] flex-shrink-0">
                    <ServiceIcon id={es.icon} className="w-4 h-4" />
                  </span>
                  <span>{es.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* ── CTA ── */}
        <AnimatedSection className="text-center">
          <div className="max-w-2xl mx-auto rounded-xl bg-white border border-[#eaeaea] p-8 sm:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
            <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#111111] mb-3">
              Need a Custom Multi-System Setup or Bulk Supply?
            </h3>
            <p className="text-[#787774] text-sm mb-6 max-w-lg mx-auto">
              Tell us your property type, required systems, or equipment specifications. We will schedule a site visit and provide a comprehensive proposal.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#111111] hover:bg-[#2f3437] text-white font-medium rounded-[6px] text-xs transition-all"
              >
                <span>Request Free Site Survey</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <a
                href="https://wa.me/923212103576"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] hover:bg-[#e0ebe0] rounded-[6px] text-xs font-medium transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                <span>WhatsApp: 0321-2103576 / 0336-9222274</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

