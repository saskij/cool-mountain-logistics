import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/cool-mountain-logistics/images/hero-bg.png"
          alt="Mountain highway"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/85 via-primary-900/80 to-primary-800/90" />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }} />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-28 pb-10 md:pt-36 md:pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">
              Licensed &amp; Bonded Freight Broker
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight max-w-4xl">
            Reliable Freight.{" "}
            <br className="hidden sm:inline" />
            <span className="text-accent-400">Proven Results.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-primary-100/90 leading-relaxed max-w-2xl">
            Cool Mountain Logistics connects shippers with vetted carriers
            nationwide — full truckload, LTL, and specialized freight moved
            with precision, speed, and total transparency.
          </p>

          {/* ─── CTA Cards ─── */}
          <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-2xl">
            {/* Card 1 — Get a Quote */}
            <Link href="/contact" className="group relative">
              <div className="
                bg-white/[0.12] backdrop-blur-md
                border border-white/20
                rounded-[var(--radius-card)] p-6
                transition-all duration-300
                shadow-card
                group-hover:bg-white/[0.18] group-hover:shadow-card-hover group-hover:-translate-y-1 group-hover:border-accent-400/40
              ">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-[var(--radius-btn)] bg-accent-500 text-white mb-4 shadow-btn group-hover:scale-105 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>

                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Shippers
                </h3>
                <p className="text-xl font-extrabold text-white mb-2">
                  Get a Quote
                </p>
                <p className="text-sm text-primary-200/80 leading-relaxed">
                  Instant access to competitive rates across our nationwide carrier network.
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 text-accent-400 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                  Request Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Card 2 — Join Our Network */}
            <Link href="/carriers" className="group relative">
              <div className="
                bg-white/[0.12] backdrop-blur-md
                border border-white/20
                rounded-[var(--radius-card)] p-6
                transition-all duration-300
                shadow-card
                group-hover:bg-white/[0.18] group-hover:shadow-card-hover group-hover:-translate-y-1 group-hover:border-accent-400/40
              ">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-[var(--radius-btn)] bg-primary-600 text-white mb-4 group-hover:bg-primary-500 group-hover:scale-105 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>

                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Carriers
                </h3>
                <p className="text-xl font-extrabold text-white mb-2">
                  Join Our Network
                </p>
                <p className="text-sm text-primary-200/80 leading-relaxed">
                  Consistent loads, fast payment, and a partnership built on trust.
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 text-accent-400 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                  Sign Up
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* ─── Track Your Load Bar ─── */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
            <div className="max-w-xl">
              <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Track Your Load
              </p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter your tracking number"
                  className="
                    flex-1 bg-white/10 backdrop-blur-sm
                    border border-white/20 border-r-0
                    rounded-l-[var(--radius-btn)] px-4 py-3
                    text-sm text-white placeholder:text-white/40
                    focus:outline-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400/50
                    transition-all duration-200
                  "
                />
                <button className="
                  bg-accent-500 text-white
                  px-6 py-3 rounded-r-[var(--radius-btn)]
                  text-sm font-bold uppercase tracking-wide
                  transition-all duration-200
                  hover:bg-accent-600
                  shrink-0
                ">
                  Track
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════════
          QUICK STATS BAR
          ═══════════════════════════════════════════ */}
      <section className="relative -mt-4 z-20 bg-white pt-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[var(--radius-xl)] shadow-card p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-surface-100">
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-primary-800">10K+</p>
              <p className="text-sm text-muted mt-1">Loads Delivered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-primary-800">50</p>
              <p className="text-sm text-muted mt-1">States Covered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-accent-500">99%</p>
              <p className="text-sm text-muted mt-1">On-Time Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-primary-800">24/7</p>
              <p className="text-sm text-muted mt-1">Live Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICE MODALITIES
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-surface-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-3">
              What We Move
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">
              Service Modalities
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              From dry van to oversized — we broker capacity across every major
              freight category in the continental United States.
            </p>
          </div>

          {/* 6-card grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ── FTL ── */}
            <div className="group bg-white border border-surface-200 rounded-[var(--radius-card)] p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-[var(--radius-lg)] bg-primary-50 text-primary-600 mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-primary-900 mb-2">Full Truckload (FTL)</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Dedicated trailer capacity for high-volume shipments.
                Door-to-door, time-definite service with real-time ETA updates.
              </p>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:text-accent-500 transition-colors duration-200">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* ── LTL ── */}
            <div className="group bg-white border border-surface-200 rounded-[var(--radius-card)] p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-[var(--radius-lg)] bg-primary-50 text-primary-600 mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-primary-900 mb-2">Less Than Truckload (LTL)</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Cost-effective partial-load solutions with consolidated routing.
                Ideal for palletized freight under 15,000 lbs with flexible scheduling.
              </p>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:text-accent-500 transition-colors duration-200">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* ── Refrigerated ── */}
            <div className="group bg-white border border-surface-200 rounded-[var(--radius-card)] p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-[var(--radius-lg)] bg-primary-50 text-primary-600 mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-primary-900 mb-2">Refrigerated</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Temperature-controlled reefer capacity for perishable goods.
                FSMA-compliant with continuous temp monitoring and chain-of-custody logs.
              </p>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:text-accent-500 transition-colors duration-200">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* ── Flatbed / Stepdeck ── */}
            <div className="group bg-white border border-surface-200 rounded-[var(--radius-card)] p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-[var(--radius-lg)] bg-primary-50 text-primary-600 mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-primary-900 mb-2">Flatbed &amp; Stepdeck</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Open-deck solutions for oversized and non-conveyable cargo.
                Tarping, strapping, and permit coordination included as standard.
              </p>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:text-accent-500 transition-colors duration-200">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* ── Specialized / Heavy Haul ── */}
            <div className="group bg-white border border-surface-200 rounded-[var(--radius-card)] p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-[var(--radius-lg)] bg-primary-50 text-primary-600 mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.12 2.12 0 010-3l.7-.7a2.12 2.12 0 013 0l1.4 1.4 3.54-3.54a2.12 2.12 0 013 0l.7.7a2.12 2.12 0 010 3l-5.1 5.1a1.5 1.5 0 01-2.12 0zM17.5 21h-11A2.5 2.5 0 014 18.5v-11A2.5 2.5 0 016.5 5H10l2 2h5.5A2.5 2.5 0 0120 9.5v9a2.5 2.5 0 01-2.5 2.5z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-primary-900 mb-2">Specialized &amp; Heavy Haul</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                RGN, lowboy, and multi-axle configurations for overweight loads.
                Full route surveys, escort vehicles, and DOT permit management.
              </p>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:text-accent-500 transition-colors duration-200">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* ── Drayage ── */}
            <div className="group bg-white border border-surface-200 rounded-[var(--radius-card)] p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-[var(--radius-lg)] bg-primary-50 text-primary-600 mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864a4.51 4.51 0 010 6.096 1.038 1.038 0 00-.405.864v.568m0-8.96A4.49 4.49 0 008.25 6c0 .903.266 1.744.725 2.45M12.75 3.03A4.49 4.49 0 0117.25 6c0 .903-.266 1.744-.725 2.45m-4.5-5.42V1.5m0 0h-1.5m1.5 0h1.5M4.28 14.03A4.49 4.49 0 003 17.25c0 1.29.543 2.454 1.414 3.276A1.038 1.038 0 014.82 21.39v.568m0 0H3m1.82 0h1.5m8.93-7.93A4.49 4.49 0 0121 17.25a4.49 4.49 0 01-1.414 3.276 1.038 1.038 0 00-.406.864v.568m0 0h1.82m-1.82 0h-1.5M12 12.75v.568c0 .334-.148.65-.405.864a4.51 4.51 0 000 6.096c.257.213.405.53.405.864v.068" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-primary-900 mb-2">Drayage</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Port and intermodal container transfer across major terminals.
                Chassis provisioning, demurrage mitigation, and same-day dispatch.
              </p>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:text-accent-500 transition-colors duration-200">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURES SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">
              Why Cool Mountain?
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              We go the extra mile — literally. Our brokerage model delivers
              reliability, competitive rates, and unmatched service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Vetted Carrier Network",
                desc: "Every carrier in our network is fully insured, safety-rated, and performance-reviewed. We don\u2019t cut corners on reliability.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                title: "Full Visibility",
                desc: "Track your freight in real-time. Our platform gives you complete transparency from pickup to delivery — no guesswork.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Fast, Fair Rates",
                desc: "Our pricing engine matches your shipment with the most cost-effective carrier. Competitive rates without sacrificing quality.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="
                  group relative bg-surface-50 border border-surface-200
                  rounded-[var(--radius-card)] p-8
                  transition-all duration-300
                  hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-200
                "
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-[var(--radius-lg)] bg-primary-100 text-primary-700 mb-6 group-hover:bg-accent-100 group-hover:text-accent-600 transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INDUSTRY COMPLIANCE
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-surface-50 border-t border-surface-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left — Text */}
            <div className="text-center md:text-left">
              <p className="text-sm font-bold text-accent-500 uppercase tracking-widest mb-2">
                Industry Compliance
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-900 tracking-tight">
                Licensed. Bonded. Insured.
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed max-w-lg">
                Cool Mountain Logistics LLC is a federally registered property broker,
                fully authorized by the FMCSA to arrange transportation of freight
                across all 50 states.
              </p>
            </div>

            {/* Right — Credentials */}
            <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
              {/* DOT Badge */}
              <div className="flex items-center gap-4 bg-white border border-surface-200 rounded-[var(--radius-card)] px-6 py-5 shadow-card">
                {/* Shield icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-primary-900">USDOT 04371123</p>
                  <p className="text-sm font-bold text-primary-900 mt-0.5">MC 1712055</p>
                  <p className="text-xs text-muted mt-1">1428 Madison Ave, Nampa, ID 83687</p>
                </div>
              </div>

              {/* FMCSA text badge */}
              <div className="flex items-center gap-3 bg-primary-800 rounded-[var(--radius-card)] px-6 py-5 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-4.247m0 0A8.966 8.966 0 003 12c0-1.97.633-3.794 1.708-5.276" />
                </svg>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary-300">FMCSA</p>
                  <p className="text-sm font-bold">Authorized Property Broker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          READY TO MOVE? — CTA
          ═══════════════════════════════════════════ */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        {/* Decorative blurs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Move Your Freight?
          </h2>
          <p className="mt-5 text-lg text-primary-200 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re shipping a single pallet or managing a full supply chain,
            Cool Mountain Logistics has the capacity, expertise, and network to deliver.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center gap-2
                bg-accent-500 text-white
                px-10 py-4 rounded-[var(--radius-btn)]
                text-base font-bold uppercase tracking-wide
                shadow-btn
                transition-all duration-200
                hover:bg-accent-600 hover:shadow-lg hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              Get a Quote Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <div className="flex items-center gap-3 text-white">
              <span className="text-primary-400 text-sm">or call us</span>
              <a
                href="tel:+12085551234"
                className="
                  inline-flex items-center gap-2 text-lg font-bold text-white
                  hover:text-accent-400 transition-colors duration-200
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (208) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

