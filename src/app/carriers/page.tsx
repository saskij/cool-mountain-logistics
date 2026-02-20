import Link from "next/link";
import Image from "next/image";

export default function CarriersPage() {
    return (
        <>
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
                        Partner With <span className="text-accent-400">The Best</span>
                    </h1>
                    <p className="mt-5 text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
                        Get access to consistent freight, quick payouts, and a brokerage team that respects your time and your equipment.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <a
                            href="https://saskij.github.io/Coolmountain/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn"
                        >
                            Sign Up Now
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-extrabold text-primary-900 mb-4">Why Carriers Choose Us</h2>
                        <p className="text-muted">We treat carriers as partners, not just capacity. Enjoy fast payments, dedicated support, and freight boards that keep your trucks moving.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Quick Pay Options", desc: "Get paid in as little as 48 hours with our expedited payment programs. Standard terms are also industry-leading.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { title: "Consistent Freight", desc: "Access high-quality loads from our diverse network of shippers. Less deadhead, more revenue.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                            { title: "Driver-First Support", desc: "Our dispatchers understand the road. 24/7 dedicated support when you hit snags during transit.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" }
                        ].map(f => (
                            <div key={f.title} className="bg-surface-50 p-8 rounded-[var(--radius-card)] border border-surface-200 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 mb-6">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-900 mb-2">{f.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
