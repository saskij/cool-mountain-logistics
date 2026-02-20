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
                                src="/cool-mountain-logistics/images/hero-bg.png"
                                alt="Cool Mountain Logistics Fleet"
                                fill
                                className="object-cover object-[20%_40%] hue-rotate-30 saturate-150"
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
                            <div className="bg-white p-6 rounded-[var(--radius-card)] border border-surface-200 shadow-sm">
                                <h4 className="font-bold text-primary-900 text-lg mb-2">Transparency</h4>
                                <p className="text-muted text-sm">No hidden fees, real-time tracking, and honest communication from pickup to delivery.</p>
                            </div>
                            <div className="bg-white p-6 rounded-[var(--radius-card)] border border-surface-200 shadow-sm">
                                <h4 className="font-bold text-primary-900 text-lg mb-2">Reliability</h4>
                                <p className="text-muted text-sm">Stringent carrier vetting ensures only the safest, most dependable drivers handle your freight.</p>
                            </div>
                            <div className="bg-white p-6 rounded-[var(--radius-card)] border border-surface-200 shadow-sm">
                                <h4 className="font-bold text-primary-900 text-lg mb-2">Agility</h4>
                                <p className="text-muted text-sm">Rapid response to supply chain disruptions with a proactive 24/7 dedicated support team.</p>
                            </div>
                            <div className="bg-white p-6 rounded-[var(--radius-card)] border border-surface-200 shadow-sm">
                                <h4 className="font-bold text-primary-900 text-lg mb-2">Partnership</h4>
                                <p className="text-muted text-sm">We succeed when our shippers and carriers succeed. We treat capacity providers with respect.</p>
                            </div>
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
