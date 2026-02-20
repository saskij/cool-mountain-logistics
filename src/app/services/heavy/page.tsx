import Link from "next/link";
import Image from "next/image";

export default function HeavyHaulPage() {
    return (
        <>
            <section className="relative min-h-[40vh] flex flex-col justify-center overflow-hidden pt-24 bg-primary-950">
                <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-12 pb-8">
                    <p className="text-accent-400 font-bold uppercase tracking-widest mb-3">Service Details</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Heavy Haul &amp; Specialized
                    </h1>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="prose prose-primary prose-lg">
                            <h2 className="text-3xl font-extrabold text-primary-900 mt-0">Moving the Impossible safely</h2>
                            <p>
                                Oversized, overweight, or highly complex freight requires far more than just dispatching a truck. It requires a partner who understands the intricate web of state permits, route surveys, and escort requirements.
                            </p>
                            <p>
                                While we may not be the largest conglomerate in the country, our specialized division operates with precision. We pride ourselves on the meticulous planning required to move million-dollar machinery, construction equipment, and industrial components safely and legally across state lines.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">How We Manage Complexity</h3>
                            <ul className="space-y-3">
                                <li><strong>Permit Coordination:</strong> We ensure the carrier has obtained valid state, county, and municipal permits for the exact dimensions of your freight.</li>
                                <li><strong>Safety First:</strong> Heavy haul is inherently risky. We only broker these loads to elite carriers with flawless safety scores and deep specialized experience.</li>
                                <li><strong>Route Transparency:</strong> We communicate the exact route plan, escort requirements, and anticipated delays (like curfew hours or wire maneuvering).</li>
                            </ul>
                        </div>

                        <div className="relative h-[500px] w-full rounded-[var(--radius-xl)] overflow-hidden shadow-2xl">
                            <Image
                                src="/cool-mountain-logistics/images/hero-bg.png"
                                alt="Heavy Haul Service"
                                fill
                                className="object-cover object-right contrast-[1.1] saturate-[0.8]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <p className="text-white font-medium text-sm">Flawless execution and detailed planning for oversized freight.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-surface-50 p-10 rounded-[var(--radius-xl)] border border-surface-200 text-center max-w-3xl mx-auto">
                        <h4 className="text-3xl font-bold text-primary-900 mb-3">Have an oversized challenge?</h4>
                        <p className="text-muted mb-8 text-lg">Talk to our heavy haul experts about routing, permitting, and pricing today.</p>
                        <Link href="/contact" className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn">
                            Request a Heavy Haul Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
