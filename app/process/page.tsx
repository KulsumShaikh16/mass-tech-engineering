import type { Metadata } from "next";
import Link from "next/link";
import { processSteps } from "@/lib/data";
import SectionHead from "@/components/ui/SectionHead";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Process",
  description: "From free site survey to ongoing support — our 4-step process ensures a smooth, professional installation every time.",
};

export default function ProcessPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="How It Works"
          heading="From First Assessment to Commissioning"
          subtext="A free on-site survey delivers an accurate engineering specification before any installation begins."
          level={1}
        />

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-[#eaeaea]" />

          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex flex-col sm:flex-row gap-6 items-start ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                  {/* Number circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center border border-[#eaeaea]">
                      <span className="font-mono text-sm font-semibold">{step.num}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 p-6 sm:p-7 rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all ${i % 2 === 1 ? "sm:text-right" : ""}`}>
                    <h3 className="text-xl font-normal text-[#111111] font-editorial mb-2">{step.title}</h3>
                    <p className="text-[#787774] text-xs sm:text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="mt-20 p-8 sm:p-10 rounded-xl bg-[#f7f6f3] border border-[#eaeaea] text-center">
          <h3 className="text-2xl font-normal text-[#111111] font-editorial mb-2">Start with Step 01 — Free On-Site Survey</h3>
          <p className="text-[#787774] text-xs sm:text-sm mb-6 max-w-lg mx-auto">No commitment, no hidden charges. Our engineers visit your site to assess loads and access parameters.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#111111] hover:bg-[#2f3437] text-white font-medium rounded-[6px] text-xs transition-all">
            <span>Book Free Site Survey</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
