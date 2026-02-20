import Link from "next/link";
import Image from "next/image";

export default function FlatbedPage() {
    return (
        <>
            <section className="relative min-h-[40vh] flex flex-col justify-center overflow-hidden pt-24 bg-primary-950">
                <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-12 pb-8">
                    <p className="text-accent-400 font-bold uppercase tracking-widest mb-3">Service Details</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Flatbed &amp; Stepdeck
                    </h1>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="prose prose-primary prose-lg">
                            <h2 className="text-3xl font-extrabold text-primary-900 mt-0">Special Handling without the Premium Price Tag</h2>
                            <p>
                                When your freight doesn&apos;t fit neatly into a standard dry van, you need carriers equipped for open-deck transportation. Flatbed and stepdeck shipping requires specialized knowledge of securement, weight distribution, and tarping procedures.
                            </p>
                            <p>
                                As a dedicated regional and national brokerage, we intimately know the carriers who haul open-deck freight safely. We verify that drivers have the right equipment—whether it&apos;s chains, binders, or lumber tarps—before they even arrive at the pickup location.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">Our Open-Deck Commitments</h3>
                            <ul className="space-y-3">
                                <li><strong>Securement Verification:</strong> We only work with carriers highly rated for load securement and safety compliance.</li>
                                <li><strong>Right Equipment, First Time:</strong> We match your load exact requirements (air ride, max dimensions, drop deck) to prevent costly delays.</li>
                                <li><strong>Clear Protective Guidance:</strong> If your freight requires tarping to protect against the elements, it will be tarped properly.</li>
                            </ul>
                        </div>

                        <div className="relative h-[500px] w-full rounded-[var(--radius-xl)] overflow-hidden shadow-2xl">
                            <Image
                                src="/cool-mountain-logistics/images/hero-bg.png"
                                alt="Flatbed Service"
                                fill
                                className="object-cover object-center grayscale opacity-90 transition-opacity"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <p className="text-white font-medium text-sm">Specialized securement and compliance for open-deck transportation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-surface-50 p-10 rounded-[var(--radius-xl)] border border-surface-200 text-center max-w-3xl mx-auto">
                        <h4 className="text-3xl font-bold text-primary-900 mb-3">Need an open-deck solution?</h4>
                        <p className="text-muted mb-8 text-lg">Let us find the safest and most efficient equipment for your freight.</p>
                        <Link href="/contact" className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn">
                            Request a Flatbed Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
