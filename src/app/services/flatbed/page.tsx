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
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-primary prose-lg mx-auto">
                        <h2>Special Handling without the Premium Price Tag</h2>
                        <p>
                            When your freight doesn&apos;t fit neatly into a standard dry van, you need carriers equipped for open-deck transportation. Flatbed and stepdeck shipping requires specialized knowledge of securement, weight distribution, and tarping procedures.
                        </p>
                        <p>
                            As a dedicated regional and national brokerage, we intimately know the carriers who haul open-deck freight safely. We verify that drivers have the right equipment—whether it&apos;s chains, binders, or lumber tarps—before they even arrive at the pickup location.
                        </p>

                        <h3>Our Open-Deck Commitments</h3>
                        <ul>
                            <li><strong>Securement Verification:</strong> We only work with carriers highly rated for load securement and safety compliance.</li>
                            <li><strong>Right Equipment, First Time:</strong> We match your load exact requirements (air ride, max dimensions, drop deck) to prevent costly delays.</li>
                            <li><strong>Clear Protective Guidance:</strong> If your freight requires tarping to protect against the elements, it will be tarped properly.</li>
                        </ul>

                        <div className="mt-12 bg-surface-50 p-8 rounded-[var(--radius-card)] border border-surface-200 text-center not-prose">
                            <h4 className="text-2xl font-bold text-primary-900 mb-2">Need an open-deck solution?</h4>
                            <p className="text-muted mb-6">Let us find the safest and most efficient equipment for your freight.</p>
                            <Link href="/contact" className="inline-block bg-accent-500 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn">
                                Request a Flatbed Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
