import Link from "next/link";
import Image from "next/image";

export default function DrayagePage() {
    return (
        <>
            <section className="relative min-h-[40vh] flex flex-col justify-center overflow-hidden pt-24 bg-primary-950">
                <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-12 pb-8">
                    <p className="text-accent-400 font-bold uppercase tracking-widest mb-3">Service Details</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Port Drayage
                    </h1>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-primary prose-lg mx-auto">
                        <h2>Seamless Intermodal Transfer</h2>
                        <p>
                            Navigating port schedules, chassis availability, and tight container return windows requires agility. Drayage is all about timing, and mistimed moves can result in crippling demurrage and per diem charges.
                        </p>
                        <p>
                            Cool Mountain Logistics works closely with verified drayage carriers who are actively registered at major seaports and rail ramps. We act as your reliable intermediary, smoothing out the logistics between the ship or train and your warehouse distribution point.
                        </p>

                        <h3>Minimizing Your Port Friction</h3>
                        <ul>
                            <li><strong>Local Expertise:</strong> We maintain relationships with regional carriers who know the ins and outs of specific port terminals.</li>
                            <li><strong>Fee Mitigation:</strong> By closely monitoring Free Time, we proactively schedule pulls and returns to save you money on storage and equipment fees.</li>
                            <li><strong>Chassis Management:</strong> We verify chassis availability before dispatching, avoiding the common pitfalls of intermodal delays.</li>
                        </ul>

                        <div className="mt-12 bg-surface-50 p-8 rounded-[var(--radius-card)] border border-surface-200 text-center not-prose">
                            <h4 className="text-2xl font-bold text-primary-900 mb-2">Ready to move containers?</h4>
                            <p className="text-muted mb-6">Avoid port congestion headaches with our dedicated drayage services.</p>
                            <Link href="/contact" className="inline-block bg-accent-500 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn">
                                Request a Drayage Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
