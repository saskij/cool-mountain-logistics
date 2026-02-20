import Link from "next/link";
import Image from "next/image";

export default function ShippersPage() {
    return (
        <>
            {/* HERO REGION */}
            <section className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden pt-24">
                <Image
                    src="/cool-mountain-logistics/images/hero-bg.png"
                    alt="Truck on highway"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 via-primary-900/80 to-primary-800/90" />
                <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        Freight Solutions for <span className="text-accent-400">Shippers</span>
                    </h1>
                    <p className="mt-5 text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
                        From single pallets to dedicated full truckloads, we match your freight with the right carrier, at the right price, with total transparency.
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 bg-accent-500 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn"
                        >
                            Get a Freight Quote
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-20 bg-surface-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-primary-900 mb-6">Reliability Driven by Data</h2>
                            <p className="text-muted mb-4">
                                Cool Mountain Logistics takes the stress out of shipping. We understand that delayed freight means lost revenue. That&apos;s why our brokerage model is built on rigorous carrier vetting, real-time tracking, and proactive communication.
                            </p>
                            <ul className="space-y-4 mt-6">
                                {[
                                    "Access to 10,000+ vetted safety-rated carriers",
                                    "Real-time GPS tracking and milestone updates",
                                    "Dedicated account managers available 24/7",
                                    "Transparent pricing with no hidden fees"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-primary-800">
                                        <svg className="h-6 w-6 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-[var(--radius-card)] shadow-card border border-surface-200">
                            <h3 className="text-xl font-bold text-primary-900 mb-4">Request a Rate</h3>
                            <form className="space-y-4" action="/contact">
                                <div>
                                    <label className="block text-sm font-medium text-primary-700 mb-1">Pickup Location</label>
                                    <input type="text" className="w-full px-4 py-2 border border-surface-300 rounded-[var(--radius-btn)] focus:ring-2 focus:ring-accent-500 focus:outline-none" placeholder="City, State or ZIP" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primary-700 mb-1">Delivery Location</label>
                                    <input type="text" className="w-full px-4 py-2 border border-surface-300 rounded-[var(--radius-btn)] focus:ring-2 focus:ring-accent-500 focus:outline-none" placeholder="City, State or ZIP" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-primary-700 mb-1">Equipment Type</label>
                                    <select className="w-full px-4 py-2 border border-surface-300 rounded-[var(--radius-btn)] focus:ring-2 focus:ring-accent-500 focus:outline-none">
                                        <option>Dry Van</option>
                                        <option>Reefers</option>
                                        <option>Flatbed</option>
                                        <option>LTL</option>
                                    </select>
                                </div>
                                <button className="w-full bg-primary-900 text-white font-bold py-3 rounded-[var(--radius-btn)] hover:bg-primary-800 transition-colors">Route to Quoting</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
