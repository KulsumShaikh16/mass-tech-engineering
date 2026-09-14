import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, extraServices } from "@/lib/data";
import SectionHead from "@/components/ui/SectionHead";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ServiceIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Services | Mas Tech Engineering",
  description:
    "Solar systems, CCTV cameras, walk-through gates, barrier gates, electric fencing, elevators, escalators and electrical engineering — installed and supported by one team.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="What We Build &amp; Protect"
          heading="Eight Core Engineering Systems, Installed by One In-House Team"
          subtext="From rooftop solar panels to automated access barriers, every installation is engineered, commissioned, and warrantied under one unified agreement."
          level={1}
        />

        {/* Services Grid with Art-Directed Brandkit Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.05} direction="up">
              <article className="relative h-full p-6 rounded-2xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(17,17,17,0.04)] group flex flex-col justify-between overflow-hidden">
                <div className="flex-1 flex flex-col">
                  {/* Art-Directed Brandkit Photograph */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#eaeaea] mb-5 bg-[#fbfbfa]">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Mas Tech Engineering`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                      <li key={b} className="flex items-center gap-2 text-xs text-[#2f3437] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0" />
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
                  <span>Request Site Survey</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Extra services */}
        <AnimatedSection className="p-8 sm:p-10 rounded-xl bg-[#f7f6f3] border border-[#eaeaea] mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#787774] mb-2 block">
                Full-Scope Capabilities
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#111111] mb-3">
                Also In Our Engineering Scope
              </h3>
              <p className="text-[#787774] text-sm leading-relaxed">
                We handle complementary building infrastructure systems to provide a single responsible contractor for commercial and residential developments.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {extraServices.map((es) => (
                <li
                  key={es.name}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#eaeaea] text-[#111111] text-xs font-medium"
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

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="max-w-2xl mx-auto rounded-xl bg-white border border-[#eaeaea] p-8 sm:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
            <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#111111] mb-3">
              Need a Custom Multi-System Setup?
            </h3>
            <p className="text-[#787774] text-sm mb-6 max-w-lg mx-auto">
              Tell us your property type and requirements. We will schedule a site visit and provide a comprehensive proposal.
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
