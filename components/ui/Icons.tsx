"use client";

import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function SolarIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      <path d="M7 16l2-8 6 8" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}

export function CctvIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path d="M16.7 8a3 3 0 0 0-2.7-1.7H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h9a3 3 0 0 0 2.7-1.7l4.3 2.15a1 1 0 0 0 1.45-.9V7.45a1 1 0 0 0-1.45-.9L16.7 8z" />
      <circle cx="9" cy="11.5" r="2" strokeWidth="1.5" />
      <path d="M2 19h8" strokeWidth="1.5" />
    </svg>
  );
}

export function BarrierIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <rect x="3" y="10" width="5" height="11" rx="1" />
      <path d="M8 13l13-4M8 16l13-4" />
      <circle cx="5.5" cy="13.5" r="1" fill="currentColor" />
      <path d="M12 4l3 3-3 3" strokeWidth="1.3" opacity="0.7" />
    </svg>
  );
}

export function FencingIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path d="M4 3v18M12 3v18M20 3v18" />
      <path d="M2 7h20M2 12h20M2 17h20" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M13 2l-3 6h4l-2 6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function WalkthroughIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 3v18M16 3v18" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="12" cy="11" r="2" />
      <path d="M10 16h4" />
    </svg>
  );
}

export function ElevatorIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 3v18" />
      <path d="M7 10l2-2 2 2M7 14l2 2 2-2" />
      <path d="M15 10l2-2 2 2M15 14l2 2 2-2" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" strokeWidth="1.8" />
    </svg>
  );
}

export function CpuTelemetryIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function EscalatorIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path d="M4 18h5l11-11" />
      <path d="M4 18V9h9" />
      <path d="M13 9v9h7" />
    </svg>
  );
}

export function ElectricalIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export function RadarScanIcon({ className = "w-5 h-5", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M12 3v18M3 12h18" strokeDasharray="2 2" opacity="0.4" />
      <path d="M12 12l6-6" strokeWidth="2" />
    </svg>
  );
}
