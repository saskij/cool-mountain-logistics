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

            <section className="py-20 bg-surface-50 border-b border-surface-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="prose prose-lg prose-primary">
                            <h2 className="text-3xl font-extrabold text-primary-900 mt-0">Keep Your Trucks Moving</h2>
                            <p>
                                We know that empty miles are the enemy of profitability. That&apos;s why Cool Mountain Logistics works hard to provide consistent, high-paying freight on your preferred lanes.
                            </p>
                            <p>
                                When you haul for us, you are not just a truck number. You are part of our operational family. We fight for fair rates, clear communication, and quick turnaround times at the docks.
                            </p>
                        </div>
                        <div className="relative h-[450px] w-full rounded-[var(--radius-xl)] overflow-hidden shadow-2xl">
                            <Image
                                src="/cool-mountain-logistics/images/carriers.jpg"
                                alt="Carrier Network"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <p className="text-white font-medium text-sm">Respect, reliability, and fast payments for every mile.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-extrabold text-primary-900 mb-4">Why Carriers Choose Us</h2>
                        <p className="text-muted">We treat carriers as partners, not just capacity. Enjoy fast payments, dedicated support, and freight boards that keep your trucks moving.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                title: "Quick Pay Options",
                                desc: "Get paid in as little as 48 hours with our expedited payment programs. Standard terms are also industry-leading.",
                                color: "emerald",
                                icon: (
                                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                        <path d="M24 10v28M17 17h10a4 4 0 010 8h-6a4 4 0 000 8h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700" />
                                        <circle cx="24" cy="24" r="20" stroke="url(#carr-grad-1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        <defs>
                                            <linearGradient id="carr-grad-1" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse"><stop stopColor="#10B981" stopOpacity="0.8" /><stop offset="1" stopColor="#34D399" stopOpacity="0.2" /></linearGradient>
                                        </defs>
                                    </svg>
                                )
                            },
                            {
                                title: "Consistent Freight",
                                desc: "Access high-quality loads from our diverse network of shippers. Less deadhead, more revenue.",
                                color: "primary",
                                icon: (
                                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                        <rect x="8" y="18" width="32" height="12" rx="2" fill="url(#carr-grad-2)" />
                                        <path d="M8 18h32v12H8V18z" stroke="currentColor" strokeWidth="2" className="text-primary-700" />
                                        <circle cx="14" cy="34" r="4" fill="white" stroke="currentColor" strokeWidth="2" className="text-primary-700" />
                                        <circle cx="34" cy="34" r="4" fill="white" stroke="currentColor" strokeWidth="2" className="text-primary-700" />
                                        <path d="M34 18l4-8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700" />
                                        <defs>
                                            <linearGradient id="carr-grad-2" x1="8" y1="18" x2="40" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#0EA5E9" /><stop offset="1" stopColor="#38BDF8" /></linearGradient>
                                        </defs>
                                    </svg>
                                )
                            },
                            {
                                title: "Driver-First Support",
                                desc: "Our dispatchers understand the road. 24/7 dedicated support when you hit snags during transit.",
                                color: "accent",
                                icon: (
                                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                        <path d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="url(#carr-grad-3)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M24 24v12M24 24a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-600" />
                                        <defs>
                                            <linearGradient id="carr-grad-3" x1="12" y1="12" x2="36" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#F59E0B" /><stop offset="1" stopColor="#FBBF24" /></linearGradient>
                                        </defs>
                                    </svg>
                                )
                            }
                        ].map(f => (
                            <div
                                key={f.title}
                                className="
                                    group relative bg-white/60 backdrop-blur-xl border border-surface-200/60
                                    rounded-3xl p-8
                                    transition-all duration-500
                                    shadow-sm hover:shadow-2xl hover:shadow-primary-900/5 hover:-translate-y-2 hover:bg-white
                                    overflow-hidden flex flex-col items-center text-center
                                "
                            >
                                {/* Abstract background highlight */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Ambient color flow on hover */}
                                <div className={`
                                    absolute right-0 -top-6 w-32 h-32 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                                    ${f.color === 'emerald' ? 'bg-emerald-100/60' : f.color === 'primary' ? 'bg-primary-100/60' : 'bg-accent-100/60'}
                                `} />

                                <div className={`
                                    relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-sm
                                    transition-transform duration-500 group-hover:scale-110
                                    ${f.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-100' :
                                        f.color === 'primary' ? 'bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-100' :
                                            'bg-gradient-to-br from-accent-50 to-accent-100/50 border border-accent-100'}
                                `}>
                                    {f.icon}
                                </div>

                                <div className="relative z-10 w-full">
                                    <h3 className="text-xl font-bold text-primary-900 mb-3 tracking-tight">{f.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
