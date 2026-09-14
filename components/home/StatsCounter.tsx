"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Stat {
  value: number;
  label: string;
  suffix: string;
  sub: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Turnkey Systems", sub: "Commercial & Industrial" },
  { value: 500, suffix: "+", label: "Completed Deployments", sub: "Across Islamabad & Rawalpindi" },
  { value: 100, suffix: "%", label: "Tier-1 Genuine Parts", sub: "Hikvision, Longi, Centurion" },
  { value: 24, suffix: "/7", label: "Rapid Dispatch SLA", sub: "Certified Local Engineers" },
];

function Counter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 bg-white border-y border-[#eaeaea]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-[#fbfbfa] border border-[#eaeaea] hover:border-[#111111] hover:bg-white transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] mb-2 font-mono tabular-nums tracking-tight group-hover:text-[#111111] transition-colors">
                  <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#111111] mb-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-[11px] text-[#787774] font-mono mt-2">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

