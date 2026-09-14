import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { whyCards, testimonials } from "@/lib/data";
import SectionHead from "@/components/ui/SectionHead";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Why Us | Mas Tech Engineering",
  description:
    "Premium quality, professional installation, after-sales support and a 1-year warranty on every job. Discover why businesses and homeowners across Islamabad trust Mas Tech Engineering.",
};

export default function WhyUsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Why Choose Mas Tech"
          heading="Six Core Commitments on Every Single Project"
          subtext="Whether installing a 10kW home solar setup or securing an entire commercial complex, our standards never change."
          level={1}
        />

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {whyCards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.05} direction="up">
              <div className="h-full p-6 sm:p-7 rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] group flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#f7f6f3] border border-[#eaeaea] flex items-center justify-center font-mono text-[#111111] font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {card.image && (
                    <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#eaeaea] mb-4 bg-[#fbfbfa]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <h3 className="font-editorial text-xl font-normal text-[#111111] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#787774] leading-relaxed text-xs sm:text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials */}
        <SectionHead
          eyebrow="Verified Client Feedback"
          heading="Real Feedback From Real Installations"
          subtext="Hear directly from property owners and facilities managers who rely on our systems every day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08} direction="up">
              <div className="h-full p-7 rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#111111] mb-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] text-[10px] font-bold">
                      VERIFIED CLIENT
                    </span>
                    <span className="text-[#787774]">·</span>
                    <span className="text-[#787774]">{t.rating}.0 / 5.0</span>
                  </div>
                  <p className="text-[#2f3437] my-4 leading-relaxed italic text-xs sm:text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="border-t border-[#eaeaea] pt-4">
                  <p className="font-medium text-[#111111] text-sm">{t.name}</p>
                  <p className="text-[#787774] text-xs font-mono">{t.role}</p>
                  <p className="text-[#787774] text-[11px] font-mono">{t.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="max-w-2xl mx-auto rounded-xl bg-[#f7f6f3] border border-[#eaeaea] p-8 sm:p-10">
            <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#111111] mb-3">
              Experience the Difference in Quality
            </h3>
            <p className="text-[#787774] text-xs sm:text-sm mb-6 max-w-lg mx-auto">
              Contact our engineering desk today for a free on-site consultation anywhere in Islamabad or Rawalpindi.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#111111] hover:bg-[#2f3437] text-white font-medium rounded-[6px] text-xs transition-all"
              >
                <span>Get Free Site Survey</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
