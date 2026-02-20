import Link from "next/link";
import Image from "next/image";

export default function FTLPage() {
    return (
        <>
            <section className="relative min-h-[40vh] flex flex-col justify-center overflow-hidden pt-24 bg-primary-950">
                <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-12 pb-8">
                    <p className="text-accent-400 font-bold uppercase tracking-widest mb-3">Service Details</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Full Truckload (FTL)
                    </h1>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="prose prose-primary prose-lg">
                            <h2 className="text-3xl font-extrabold text-primary-900 mt-0">Dedicated, Direct, and Dependable</h2>
                            <p>
                                When you have enough freight to fill an entire trailer or require dedicated security without co-mingling, our Full Truckload (FTL) service is the right choice. As a boutique brokerage, we understand that every load matters. We don&apos;t treat you like just another account number.
                            </p>
                            <p>
                                We match your shipment with vetted, reliable carriers who share our commitment to safety and on-time performance. Because we keep our overhead manageable, we pass those savings and focused attention right back to you.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">Why Choose Us for FTL?</h3>
                            <ul className="space-y-3">
                                <li><strong>Direct Communication:</strong> You speak to real people, not an automated phone tree.</li>
                                <li><strong>Vetted Carriers:</strong> We thoroughly review safety records and insurance before anyone moves your freight.</li>
                                <li><strong>No Hidden Surprises:</strong> Honest pricing and clear transit expectations from day one.</li>
                                <li><strong>Real-Time Updates:</strong> We track the load so you don&apos;t have to.</li>
                            </ul>
                        </div>

                        <div className="relative h-[500px] w-full rounded-[var(--radius-xl)] overflow-hidden shadow-2xl">
                            <Image
                                src="/cool-mountain-logistics/images/hero-bg.png"
                                alt="Full Truckload Service"
                                fill
                                className="object-cover object-left"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <p className="text-white font-medium text-sm">Nationwide dedicated capacity when you need it most.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-surface-50 p-10 rounded-[var(--radius-xl)] border border-surface-200 text-center max-w-3xl mx-auto">
                        <h4 className="text-3xl font-bold text-primary-900 mb-3">Ready for a quote?</h4>
                        <p className="text-muted mb-8 text-lg">Let our dedicated team handle the logistics while you focus on your core business.</p>
                        <Link href="/contact" className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn">
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
