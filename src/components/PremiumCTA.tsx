import Link from "next/link";

export default function PremiumCTA() {
    return (
        <div className="mt-16 relative group bg-gradient-to-br from-primary-950 to-primary-900 p-10 lg:p-14 rounded-[var(--radius-xl)] shadow-2xl border border-white/10 overflow-hidden text-center max-w-4xl mx-auto">
            {/* Abstract background highlight */}
            <div className="absolute inset-0 bg-[url('/cool-mountain-logistics/images/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Ambient glow */}
            <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-64 h-64 rounded-full blur-[80px] bg-accent-500/30 opacity-0 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none" />

            <div className="relative z-10">
                <p className="text-accent-400 font-bold uppercase tracking-widest mb-3 text-sm">Next Steps</p>
                <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready for a quote?</h4>
                <p className="text-primary-100 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    Let our dedicated team handle the logistics while you focus on your core business.
                    Get transparent pricing and reliable capacity today.
                </p>
                <Link
                    href="/contact"
                    className="
                        inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide 
                        hover:bg-accent-400 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.5)]
                        transition-all duration-300 shadow-btn
                    "
                >
                    Request a Rate
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
