import Link from "next/link";
import Image from "next/image";
import PremiumCTA from "@/components/PremiumCTA";

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
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="prose prose-primary prose-lg">
                            <h2 className="text-3xl font-extrabold text-primary-900 mt-0">Seamless Intermodal Transfer</h2>
                            <p>
                                Navigating port schedules, chassis availability, and tight container return windows requires agility. Drayage is all about timing, and mistimed moves can result in crippling demurrage and per diem charges.
                            </p>
                            <p>
                                Cool Mountain Logistics works closely with verified drayage carriers who are actively registered at major seaports and rail ramps. We act as your reliable intermediary, smoothing out the logistics between the ship or train and your warehouse distribution point.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">Minimizing Your Port Friction</h3>
                            <ul className="space-y-3">
                                <li><strong>Local Expertise:</strong> We maintain relationships with regional carriers who know the ins and outs of specific port terminals.</li>
                                <li><strong>Fee Mitigation:</strong> By closely monitoring Free Time, we proactively schedule pulls and returns to save you money on storage and equipment fees.</li>
                                <li><strong>Chassis Management:</strong> We verify chassis availability before dispatching, avoiding the common pitfalls of intermodal delays.</li>
                            </ul>
                        </div>

                        <div className="relative h-[500px] w-full rounded-[var(--radius-xl)] overflow-hidden shadow-2xl">
                            <Image
                                src="/cool-mountain-logistics/images/drayage.jpg"
                                alt="Drayage Service"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <p className="text-white font-medium text-sm">Agile intermodal logistics designed to avoid port delays.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <PremiumCTA />
                </div>
            </section>
        </>
    );
}
