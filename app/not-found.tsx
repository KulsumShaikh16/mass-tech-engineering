import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="mb-6">
          <span className="font-mono text-7xl sm:text-8xl font-normal text-[#111111]">
            404
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-normal text-[#111111] mb-3 font-editorial">
          Page not found
        </h1>
        <p className="text-[#787774] mb-8 text-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#2f3437] text-white font-medium rounded-[6px] text-xs transition-all"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to overview
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#eaeaea] hover:border-[#111111] text-[#111111] rounded-[6px] text-xs transition-all"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
