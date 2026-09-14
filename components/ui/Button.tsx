import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "dark";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

const variants = {
  primary: "bg-[#111111] hover:bg-[#2f3437] text-white border border-[#111111] shadow-none",
  outline: "bg-white hover:bg-[#f7f6f3] text-[#111111] border border-[#eaeaea]",
  ghost: "bg-transparent hover:bg-[#f7f6f3] text-[#787774] hover:text-[#111111]",
  dark: "bg-[#2f3437] hover:bg-[#111111] text-white border border-[#2f3437]",
};

export default function Button({ href, onClick, variant = "primary", children, className = "", type = "button", external }: Props) {
  const base = "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[6px] font-medium text-xs transition-all duration-150 cursor-pointer active:scale-[0.985]";
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}
