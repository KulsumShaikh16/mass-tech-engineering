import type { Metadata } from "next";
import SectionHead from "@/components/ui/SectionHead";
import AnimatedSection from "@/components/ui/AnimatedSection";
import QuoteForm from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Site Survey",
  description: "Contact Mas Tech Engineering for turnkey solar, CCTV security, walkthrough gates, barriers and elevators. Head Office Karachi: Mina Avenue, Shahrah-e-Faisal. Branch Office Islamabad: J1 Tower, Faisal Town.",
};

const contactCards = [
  {
    label: "Phone & WhatsApp Lines",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6"/>
      </svg>
    ),
    content: (
      <div className="flex flex-col gap-1.5 font-mono text-xs">
        <div className="flex items-center justify-between gap-2">
          <a href="tel:+923212103576" className="text-[#111111] hover:text-[#346538] font-medium transition-colors">
            0321-2103576
          </a>
          <a href="https://wa.me/923212103576" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#346538] bg-[#edf3ec] border border-[#d2e4d0] px-2 py-0.5 rounded hover:bg-[#e0ebe0]">
            WhatsApp Line 1
          </a>
        </div>
        <div className="flex items-center justify-between gap-2">
          <a href="tel:+923369222274" className="text-[#111111] hover:text-[#346538] font-medium transition-colors">
            0336-9222274
          </a>
          <a href="https://wa.me/923369222274" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#346538] bg-[#edf3ec] border border-[#d2e4d0] px-2 py-0.5 rounded hover:bg-[#e0ebe0]">
            WhatsApp Line 2
          </a>
        </div>
      </div>
    ),
  },
  {
    label: "Official Email",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    content: (
      <div className="font-mono text-xs">
        <a href="mailto:mastechengineering@outlook.com" className="text-[#111111] hover:text-[#346538] font-medium transition-colors break-all">
          mastechengineering@outlook.com
        </a>
      </div>
    ),
  },
  {
    label: "Head Office — Karachi",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"/>
        <circle cx="12" cy="9" r="2.6"/>
      </svg>
    ),
    content: (
      <p className="text-[#111111] text-xs font-mono leading-relaxed">
        Suit No. # 7-8, Mina Avenue, Shahrah-e-Faisal, Karachi.
      </p>
    ),
  },
  {
    label: "Branch Office — Islamabad",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"/>
        <circle cx="12" cy="9" r="2.6"/>
      </svg>
    ),
    content: (
      <p className="text-[#787774] text-xs font-mono leading-relaxed">
        Suit No. # 203., J1 Tower, B-Block, Faisal Town, Islamabad.
      </p>
    ),
  },
  {
    label: "Working Hours",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3.5 2"/>
      </svg>
    ),
    content: <p className="text-[#787774] text-xs font-mono">Saturday – Thursday<br/>9:00 am – 7:00 pm</p>,
  },
];

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Get in touch"
          heading="Schedule a Site Survey &amp; Technical Quotation"
          subtext="Reach our engineering desks in Karachi and Islamabad. Call, email, or message us on WhatsApp for rapid inspection and quote."
          level={1}
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — contact info */}
          <AnimatedSection direction="left" className="space-y-6">
            <div className="space-y-4">
              {contactCards.map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#f7f6f3] border border-[#eaeaea] flex items-center justify-center flex-shrink-0 text-[#111111]">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-mono font-medium text-[#111111] mb-1.5 uppercase tracking-wider">{item.label}</p>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick action hotline buttons */}
            <div className="p-6 rounded-xl bg-white border border-[#eaeaea]">
              <p className="text-[#111111] font-editorial text-lg mb-3">Direct Engineering Hotlines</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <a
                  href="tel:+923212103576"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#eaeaea] hover:border-[#111111] text-[#111111] rounded-[6px] transition-all text-xs font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-[#346538]" />
                  <span>Call 0321-2103576</span>
                </a>
                <a
                  href="tel:+923369222274"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#eaeaea] hover:border-[#111111] text-[#111111] rounded-[6px] transition-all text-xs font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-[#346538]" />
                  <span>Call 0336-9222274</span>
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/923212103576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] hover:bg-[#e0ebe0] rounded-[6px] transition-all text-xs font-medium"
                >
                  <span>💬 WhatsApp Line 1</span>
                </a>
                <a
                  href="mailto:mastechengineering@outlook.com"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#f7f6f3] border border-[#eaeaea] text-[#111111] hover:bg-white rounded-[6px] transition-all text-xs font-medium"
                >
                  <span>✉️ Email Official</span>
                </a>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border border-[#eaeaea] h-64 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.1!2d73.0551!3d33.6716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07cd4a43d%3A0x868d9e08a6ef7e7c!2sFaisal%20Town%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mas Tech Engineering office location"
              />
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="right" delay={0.15}>
            <QuoteForm />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
