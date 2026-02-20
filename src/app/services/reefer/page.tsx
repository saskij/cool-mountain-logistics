import Link from "next/link";
import Image from "next/image";

export default function ReeferPage() {
    return (
        <>
            <section className="relative min-h-[40vh] flex flex-col justify-center overflow-hidden pt-24 bg-primary-950">
                <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-12 pb-8">
                    <p className="text-accent-400 font-bold uppercase tracking-widest mb-3">Service Details</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Refrigerated &amp; Temp Control
                    </h1>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="prose prose-primary prose-lg">
                            <h2 className="text-3xl font-extrabold text-primary-900 mt-0">Temperature Safety Above All</h2>
                            <p>
                                When you are shipping produce, pharmaceuticals, or other temperature-sensitive commodities, there is zero margin for error. A fluctuation of a few degrees can ruin a shipment and damage a relationship.
                            </p>
                            <p>
                                Cool Mountain Logistics takes its name and its temperature-controlled freight seriously. We maintain a tightened carrier network specifically for reefer transport, ensuring the equipment is modern, compliant, and driven by experienced professionals.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">How We Ensure Quality</h3>
                            <ul className="space-y-3">
                                <li><strong>FSMA Compliance:</strong> We verify that our carriers adhere strictly to the Food Safety Modernization Act.</li>
                                <li><strong>Continuous Monitoring:</strong> We work with carriers capable of providing downloaded temperature logs to guarantee chain of custody.</li>
                                <li><strong>Clear Communication:</strong> Drivers are briefed exactly on continuous versus stop-start cooling requirements before dispatch.</li>
                            </ul>
                        </div>

                        <div className="relative h-[500px] w-full rounded-[var(--radius-xl)] overflow-hidden shadow-2xl">
                            <Image
                                src="/cool-mountain-logistics/images/hero-bg.png"
                                alt="Refrigerated Service"
                                fill
                                className="object-cover object-bottom sepia-[.2] hue-rotate-180"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <p className="text-white font-medium text-sm">Strict temperature adherence and FSMA-compliant carrier partners.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-surface-50 p-10 rounded-[var(--radius-xl)] border border-surface-200 text-center max-w-3xl mx-auto">
                        <h4 className="text-3xl font-bold text-primary-900 mb-3">Protect Your Perishables</h4>
                        <p className="text-muted mb-8 text-lg">Trust a team that treats your temperature-sensitive freight like its own.</p>
                        <Link href="/contact" className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn">
                            Request a Reefer Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
