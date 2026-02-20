import Image from "next/image";
import Link from "next/link";

export default function TrackPage() {
    return (
        <>
            <section className="min-h-screen flex flex-col md:flex-row bg-surface-50">
                {/* Left Side — Image */}
                <div className="relative w-full min-h-[40vh] md:min-h-screen md:w-5/12 lg:w-1/2">
                    <Image
                        src="/cool-mountain-logistics/images/track-load.jpg"
                        alt="Tracking Shipment"
                        fill
                        priority
                        className="object-cover object-[80%_50%] grayscale contrast-125 brightness-75"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-primary-950/40 mix-blend-multiply" />
                    <div className="absolute bottom-10 left-10 right-10 z-10 hidden md:block">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-white mb-2">Real-Time Visibility</h2>
                            <p className="text-primary-100/90 text-sm">Empowering your supply chain with proactive tracking and zero blind spots.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side — Form */}
                <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-20 py-16 md:py-20 lg:pt-32">
                    <div className="w-full max-w-xl mx-auto">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-primary-900 tracking-tight mb-4 text-center md:text-left">
                            Track Your Shipment
                        </h1>
                        <p className="text-lg text-muted mb-10 text-center md:text-left">
                            Enter your PRO number or Load ID below to view real-time status updates and delivery ETAs.
                        </p>

                        <div className="bg-white p-8 md:p-10 rounded-[var(--radius-xl)] shadow-card border border-surface-200">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-left text-sm font-bold text-primary-800 mb-2">Tracking Number</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-4 text-lg border-2 border-surface-300 rounded-[var(--radius-btn)] focus:border-accent-500 focus:ring-0 outline-none transition-colors"
                                        placeholder="e.g. CML-12345678"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="w-full bg-accent-500 text-white font-bold py-4 rounded-[var(--radius-btn)] text-lg uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn"
                                >
                                    Track Load
                                </button>
                            </form>

                            <div className="mt-10 pt-8 border-t border-surface-200">
                                <p className="text-sm text-muted text-center md:text-left">
                                    Having trouble locating your freight? Contact our 24/7 dispatch team at{" "}
                                    <a href="tel:+12085551234" className="text-primary-600 font-bold hover:text-accent-500 whitespace-nowrap">(208) 555-1234</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
