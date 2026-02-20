import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden pt-24 bg-primary-950">
                <Image
                    src="/cool-mountain-logistics/images/hero-bg.png"
                    alt="About Us Background"
                    fill
                    priority
                    className="object-cover object-[50%_40%] opacity-40 grayscale sepia-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 lg:via-primary-950/80 to-transparent" />
                <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
                    <p className="text-accent-400 font-bold uppercase tracking-widest mb-3">Our Story</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        About Cool Mountain Logistics
                    </h1>
                    <p className="mt-5 text-lg text-primary-200 max-w-2xl mx-auto leading-relaxed">
                        A premier 3PL brokerage based in Nampa, Idaho. Empowering supply chains through transparency, reliability, and unparalleled service.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-surface-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
                        <div className="prose prose-lg prose-primary">
                            <h2 className="text-3xl font-extrabold text-primary-900 mt-0">Driven by Dedication</h2>
                            <p>
                                At Cool Mountain Logistics, we believe that freight brokerage is more than simply matching a truck to a load. It&apos;s about building resilient supply chain partnerships built on unshakeable trust.
                            </p>
                            <p>
                                Founded and headquartered in Idaho, we maintain a national footprint with access to over 10,000 thoroughly vetted carriers. Whether it&apos;s a dedicated flatbed required across the country or an expedited LTL delivery to the next state, our logistics experts manage the lifecycle of the shipment so you can focus on growing your core business.
                            </p>
                        </div>

                        <div className="relative h-[450px] w-full rounded-[var(--radius-xl)] overflow-hidden shadow-2xl">
                            <Image
                                src="/cool-mountain-logistics/images/about-us.jpg"
                                alt="Cool Mountain Logistics Team"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <p className="text-white font-medium text-sm">Building enduring partnerships based on trust and performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg prose-primary max-w-none">
                        <h3>Our Core Values</h3>
                        <div className="not-prose grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                            {[
                                {
                                    title: "Transparency",
                                    desc: "No hidden fees, real-time tracking, and honest communication from pickup to delivery.",
                                    color: "emerald",
                                    icon: (
                                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                            <rect x="8" y="14" width="32" height="20" rx="4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-emerald-700" />
                                            <path d="M16 24h16M24 16v16" stroke="url(#core-grad-1)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="24" cy="24" r="3" fill="white" />
                                            <defs>
                                                <linearGradient id="core-grad-1" x1="16" y1="16" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#10B981" stopOpacity="0.8" /><stop offset="1" stopColor="#34D399" stopOpacity="0.2" /></linearGradient>
                                            </defs>
                                        </svg>
                                    )
                                },
                                {
                                    title: "Reliability",
                                    desc: "Stringent carrier vetting ensures only the safest, most dependable drivers handle your freight.",
                                    color: "primary",
                                    icon: (
                                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                            <path d="M24 6l14 6v12c0 8-7 14-14 18-7-4-14-10-14-18V12l14-6z" fill="url(#core-grad-2)" />
                                            <path d="M24 6l14 6v12c0 8-7 14-14 18-7-4-14-10-14-18V12l14-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-primary-700" />
                                            <path d="M16 24l6 6 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            <defs>
                                                <linearGradient id="core-grad-2" x1="10" y1="6" x2="38" y2="42" gradientUnits="userSpaceOnUse"><stop stopColor="#0EA5E9" /><stop offset="1" stopColor="#38BDF8" /></linearGradient>
                                            </defs>
                                        </svg>
                                    )
                                },
                                {
                                    title: "Agility",
                                    desc: "Rapid response to supply chain disruptions with a proactive 24/7 dedicated support team.",
                                    color: "accent",
                                    icon: (
                                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                            <path d="M26 6L10 26h14l-2 16 16-20H24l2-16z" fill="url(#core-grad-3)" />
                                            <path d="M26 6L10 26h14l-2 16 16-20H24l2-16z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-accent-600" />
                                            <defs>
                                                <linearGradient id="core-grad-3" x1="10" y1="6" x2="38" y2="42" gradientUnits="userSpaceOnUse"><stop stopColor="#F59E0B" /><stop offset="1" stopColor="#FBBF24" /></linearGradient>
                                            </defs>
                                        </svg>
                                    )
                                },
                                {
                                    title: "Partnership",
                                    desc: "We succeed when our shippers and carriers succeed. We treat capacity providers with respect.",
                                    color: "indigo",
                                    icon: (
                                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                            <path d="M30 14a6 6 0 11-12 0 6 6 0 0112 0z" fill="url(#core-grad-4)" />
                                            <path d="M18 36v-4a8 8 0 0112 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-indigo-600" />
                                            <path d="M10 22a4 4 0 11-8 0 4 4 0 018 0z" fill="url(#core-grad-4)" />
                                            <path d="M6 36v-2a6 6 0 018.3-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-indigo-600" />
                                            <path d="M46 22a4 4 0 11-8 0 4 4 0 018 0z" fill="url(#core-grad-4)" />
                                            <path d="M42 36v-2a6 6 0 00-8.3-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-indigo-600" />
                                            <defs>
                                                <linearGradient id="core-grad-4" x1="0" y1="10" x2="48" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#818CF8" /><stop offset="1" stopColor="#A5B4FC" /></linearGradient>
                                            </defs>
                                        </svg>
                                    )
                                }
                            ].map((val) => (
                                <div
                                    key={val.title}
                                    className="
                                        group relative bg-white/60 backdrop-blur-xl border border-surface-200/60
                                        rounded-3xl p-6
                                        transition-all duration-500
                                        shadow-sm hover:shadow-2xl hover:shadow-primary-900/5 hover:-translate-y-2 hover:bg-white
                                        overflow-hidden flex flex-col items-start
                                    "
                                >
                                    {/* Abstract background highlight */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Ambient color flow on hover */}
                                    <div className={`
                                        absolute -right-6 -top-6 w-24 h-24 rounded-full blur-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                                        ${val.color === 'primary' ? 'bg-primary-100/60' : val.color === 'accent' ? 'bg-accent-100/60' : val.color === 'emerald' ? 'bg-emerald-100/60' : 'bg-indigo-100/60'}
                                    `} />

                                    <div className={`
                                        relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl mb-6 shadow-sm
                                        transition-transform duration-500 group-hover:scale-110
                                        ${val.color === 'primary' ? 'bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-100' :
                                            val.color === 'accent' ? 'bg-gradient-to-br from-accent-50 to-accent-100/50 border border-accent-100' :
                                                val.color === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-100' :
                                                    'bg-gradient-to-br from-indigo-50 to-indigo-100/50 border border-indigo-100'}
                                    `}>
                                        {val.icon}
                                    </div>

                                    <div className="relative z-10">
                                        <h4 className="font-bold text-primary-900 text-lg mb-2 tracking-tight">{val.title}</h4>
                                        <p className="text-muted text-sm leading-relaxed">{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3>Let&apos;s Build Together</h3>
                        <p>
                            Whether you are looking for new capacity to improve your supply chain throughput, or a carrier looking to minimize deadhead on preferred lanes—we have the scale and the expertise to help.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
