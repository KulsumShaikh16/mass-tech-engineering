import type { Metadata } from "next";
import SectionHead from "@/components/ui/SectionHead";
import AnimatedSection from "@/components/ui/AnimatedSection";
import QuoteForm from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a free site survey and quotation from Mas Tech Engineering. Call, WhatsApp or fill the form. Office: Suite 203, J1 Tower, Faisal Town, Islamabad.",
};

const contactDetails = [
  {
    label: "Call or WhatsApp",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6"/></svg>,
    content: (
      <div className="flex flex-col gap-1 font-mono text-xs">
        <a href="tel:+923298737321" className="text-[#111111] hover:text-[#787774] font-medium transition-colors">0329-8737321</a>
        <a href="tel:+923369222274" className="text-[#111111] hover:text-[#787774] font-medium transition-colors">0336-9222274</a>
      </div>
    ),
  },
  {
    label: "Office Address",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.6"/></svg>,
    content: <p className="text-[#787774] text-xs font-mono">Suite 203, J1 Tower, Block B,<br/>Faisal Town, Islamabad</p>,
  },
  {
    label: "Working Hours",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>,
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
          subtext="Tell us what you need or call us directly. Our engineers are ready to inspect your site."
          level={1}
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — contact info */}
          <AnimatedSection direction="left" className="space-y-6">
            <div className="space-y-4">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#eaeaea] hover:border-[#111111] transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#f7f6f3] border border-[#eaeaea] flex items-center justify-center flex-shrink-0 text-[#111111]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono font-medium text-[#111111] mb-1 uppercase tracking-wider">{item.label}</p>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="p-6 rounded-xl bg-white border border-[#eaeaea]">
              <p className="text-[#111111] font-editorial text-lg mb-3">Direct Engineering Hotline</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+923298737321" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-[#eaeaea] hover:border-[#111111] text-[#111111] rounded-[6px] transition-all text-xs font-medium">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6"/></svg>
                  Call 0329-8737321
                </a>
                <a href="https://wa.me/923298737321" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] hover:bg-[#e0ebe0] rounded-[6px] transition-all text-xs font-medium">
                  WhatsApp Consultation
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
