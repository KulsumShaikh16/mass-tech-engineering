import { JSX } from "react";

export function ServiceIcon({ id, className = "" }: { id: string; className?: string }): JSX.Element {
  const cls = `w-7 h-7 ${className}`;
  switch (id) {
    case "solar":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M4 9 11 3h2l7 6"/><rect x="4" y="9" width="16" height="9"/><line x1="4" y1="13.5" x2="20" y2="13.5"/><line x1="9" y1="9" x2="9" y2="18"/><line x1="14" y1="9" x2="14" y2="18"/></svg>;
    case "cctv":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="13" height="9" rx="2"/><circle cx="9.5" cy="11.5" r="2.6"/><path d="M16 10l5-3v10l-5-3"/></svg>;
    case "walkthrough":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M5 3v18M19 3v18M5 3h14"/><circle cx="12" cy="9.5" r="2.1"/><path d="M12 11.6v4M9.3 20l2.7-4 2.7 4"/></svg>;
    case "barrier":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="4" height="16" rx="1"/><line x1="8" y1="9" x2="20" y2="9"/><rect x="19" y="7" width="3" height="4" fill="currentColor" stroke="none"/><line x1="8" y1="16" x2="16" y2="16"/></svg>;
    case "fencing":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 10h18M3 14h18M3 18h18"/><path d="M9 6v4M15 10v4M9 14v4"/><circle cx="19" cy="8" r="1.4" fill="currentColor" stroke="none"/></svg>;
    case "elevator":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="12" height="18" rx="1.5"/><path d="M10.5 9l1.5-2 1.5 2M10.5 15l1.5 2 1.5-2"/></svg>;
    case "escalator":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 18h5l11-11"/><path d="M4 18V9h9"/><path d="M13 9v9h7"/></svg>;
    case "electrical":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3 17.7 3.3a1 1 0 0 1 1.4 1.4l-3 3 1.6 1.6 3-3a1 1 0 0 1 1.4 1.4l-3.7 3.7a3.5 3.5 0 0 1-4.6-.3L7 18l-2 2-2-2 2-2 6.7-6.7a3.5 3.5 0 0 1-.3-4.6z"/></svg>;
    case "network": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2"/><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4"/></svg>;
    case "fire": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3c-2.6 2.4-3.4 4.6-2 6.4-.4-2 .8-3 1.6-3.6.2 1.4 1 2 1.8 3 1 1.2 1.6 2.4 1.6 3.7a5 5 0 0 1-10 0c0-2.6 1.6-4.8 3.4-6.6"/></svg>;
    case "shield": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6Z"/></svg>;
    case "home": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/></svg>;
    case "shutter": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 9h16M4 14h16"/></svg>;
    case "gate": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="7" height="7" rx="1"/><rect x="14" y="4" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
    default: return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>;
  }
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2.003c-5.53 0-10.02 4.48-10.02 10.01 0 1.77.46 3.5 1.34 5.02L2 22l5.11-1.34a9.98 9.98 0 0 0 4.93 1.31h.01c5.53 0 10.02-4.48 10.02-10.01 0-2.67-1.04-5.19-2.93-7.08a9.96 9.96 0 0 0-7.1-2.9zm0 18.3a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.03.8.81-2.95-.2-.3a8.27 8.27 0 0 1-1.27-4.4c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.31.87 5.88 2.44a8.24 8.24 0 0 1 2.44 5.87c0 4.58-3.73 8.19-8.41 8.19z"/>
    </svg>
  );
}
