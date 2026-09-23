"use client";
import { useState, FormEvent, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface FormData { name: string; phone: string; service: string; message: string; }
interface Errors { name?: string; phone?: string; service?: string; }

const SERVICES = [
  "Solar systems",
  "CCTV camera systems",
  "Walk-through gates",
  "Barrier gate systems",
  "Electric fencing",
  "Elevator systems",
  "Escalator systems",
  "Electrical & engineering services",
  "General order supplier & procurement",
  "Not sure yet"
];

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [form, setForm] = useState<FormData>({ name: "", phone: "", service: initialService, message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const match = SERVICES.find(
        (s) => s.toLowerCase() === serviceParam.toLowerCase() || s.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (match) {
        setForm((prev) => ({ ...prev, service: match }));
      }
    }
  }, [searchParams]);

  function validate(): boolean {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (!form.service) e.service = "Please select a service.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    const text = `Hello Mas Tech Engineering, I would like a free site survey and quotation.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}${form.message ? `\nDetails: ${form.message}` : ""}`;
    window.open(`https://wa.me/923212103576?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSuccess(true);
    setForm({ name: "", phone: "", service: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  }

  const inputCls = (err?: string) =>
    `w-full px-3.5 py-2.5 rounded-[6px] bg-white border ${err ? "border-red-500" : "border-[#eaeaea] focus:border-[#111111]"} text-[#111111] placeholder-[#787774] text-xs transition-all outline-none`;

  return (
    <form onSubmit={handleSubmit} noValidate className="p-7 sm:p-8 rounded-xl bg-white border border-[#eaeaea] space-y-4 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
      <h3 className="text-xl font-normal text-[#111111] font-editorial mb-1">Request a quotation</h3>
      <p className="text-[#787774] text-xs mb-5">Fill in your requirements and it opens a prefilled WhatsApp message directly to our engineering desk.</p>

      <div>
        <label htmlFor="name" className="block text-xs font-mono text-[#111111] mb-1.5 uppercase">Full name</label>
        <input id="name" type="text" placeholder="Your name" value={form.name}
          onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
          className={inputCls(errors.name)} />
        {errors.name && <p className="text-red-500 text-xs mt-1 font-mono">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-mono text-[#111111] mb-1.5 uppercase">Phone number</label>
        <input id="phone" type="tel" placeholder="03xx-xxxxxxx" value={form.phone}
          onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: undefined }); }}
          className={inputCls(errors.phone)} />
        {errors.phone && <p className="text-red-500 text-xs mt-1 font-mono">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-mono text-[#111111] mb-1.5 uppercase">Service division</label>
        <select id="service" value={form.service}
          onChange={(e) => { setForm({ ...form, service: e.target.value }); setErrors({ ...errors, service: undefined }); }}
          className={inputCls(errors.service)}>
          <option value="">Select a service</option>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1 font-mono">{errors.service}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono text-[#111111] mb-1.5 uppercase">Site details (optional)</label>
        <textarea id="message" rows={3} placeholder="Location, building size, estimated timeline..."
          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputCls()} />
      </div>

      <button type="submit" className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#111111] hover:bg-[#2f3437] text-white font-medium rounded-[6px] transition-all text-xs active:scale-[0.985] cursor-pointer">
        <span>Send via WhatsApp Desk</span>
      </button>

      <p className="text-[#787774] text-[11px] text-center font-mono">Official Mas Tech Engineering WhatsApp Hotline</p>

      {success && (
        <div className="p-3 rounded-[6px] bg-[#edf3ec] border border-[#d2e4d0] text-[#346538] text-xs text-center font-mono animate-in fade-in duration-200">
          ✓ Opening WhatsApp with pre-filled survey details.
        </div>
      )}
    </form>
  );
}

export default function QuoteForm() {
  return (
    <Suspense fallback={
      <div className="p-8 rounded-xl bg-white border border-[#eaeaea] text-center text-xs font-mono text-[#787774]">
        Loading Form...
      </div>
    }>
      <QuoteFormContent />
    </Suspense>
  );
}

