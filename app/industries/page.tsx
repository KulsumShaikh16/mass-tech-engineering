import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import { industries } from "@/lib/data";
import SectionHead from "@/components/ui/SectionHead";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Industries",
  description: "Mas Tech Engineering serves homes, offices, factories, shopping malls, commercial buildings and industrial projects across Islamabad.",
};

const industryIcons: Record<string, ReactElement> = {
  home: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><rect x="9" y="14" width="6" height="6"/></svg>,
  office: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="3" width="16" height="18"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="16" y2="15"/></svg>,
  factory: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 21V9l5 3V9l5 3V9l6 4v8Z"/><line x1="3" y1="21" x2="21" y2="21"/></svg>,
  mall: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="8" width="18" height="13"/><path d="M8 8V5a4 4 0 0 1 8 0v3"/></svg>,
  building: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="5" y="2" width="14" height="20"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/></svg>,
  industrial: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M3 17V7h9l4 4h5v6"/></svg>,
};

export default function IndustriesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Who We Work With"
          heading="Engineered for Every Facility Type"
          subtext="From a single residential rooftop to a multi-hectare industrial logistics yard, we have the specialized equipment and certified engineers."
          level={1}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.name} delay={i * 0.06} direction="up">
              <div className="relative h-full p-7 rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] group flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#f7f6f3] border border-[#eaeaea] flex items-center justify-center text-[#111111] mb-5 group-hover:border-[#111111] transition-colors">
                    {industryIcons[industry.icon]}
                  </div>
                  <h3 className="text-xl font-normal text-[#111111] mb-2 font-editorial">{industry.name}</h3>
                  <p className="text-[#787774] text-xs sm:text-sm leading-relaxed">{industry.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="p-8 sm:p-10 rounded-xl bg-[#f7f6f3] border border-[#eaeaea] text-center">
          <p className="text-[#787774] text-sm mb-1">Not sure if we cover your type of site?</p>
          <p className="text-[#111111] font-editorial text-2xl mb-6">Contact our engineering desk for immediate assessment.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+923298737321" className="px-5 py-2.5 bg-white border border-[#eaeaea] hover:border-[#111111] text-[#111111] rounded-[6px] transition-all text-xs font-mono">0329-8737321</a>
            <Link href="/contact" className="px-6 py-2.5 bg-[#111111] hover:bg-[#2f3437] text-white font-medium rounded-[6px] transition-all text-xs">Request free survey</Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
