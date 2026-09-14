import AnimatedSection from "./AnimatedSection";

interface Props {
  eyebrow: string;
  heading: string;
  subtext?: string;
  center?: boolean;
  level?: 1 | 2;
}

export default function SectionHead({ eyebrow, heading, subtext, center = true, level = 2 }: Props) {
  const HeadingTag = level === 1 ? "h1" : "h2";
  return (
    <AnimatedSection className={`mb-12 ${center ? "text-center" : ""}`}>
      <p className="inline-block text-[11px] font-mono tracking-[0.16em] uppercase text-[#787774] mb-4 px-2.5 py-0.5 rounded-full border border-[#eaeaea] bg-[#f7f6f3]">
        {eyebrow}
      </p>
      <HeadingTag className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#111111] mt-2 mb-4 leading-tight font-editorial tracking-tight">
        {heading}
      </HeadingTag>
      {subtext && (
        <p className="text-[#787774] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{subtext}</p>
      )}
    </AnimatedSection>
  );
}
