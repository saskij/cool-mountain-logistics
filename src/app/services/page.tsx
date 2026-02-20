import Link from "next/link";
import Image from "next/image";

const servicesList = [
    { id: "ftl", title: "Full Truckload (FTL)", desc: "Dedicated capacity for your large shipments ensuring direct and secure delivery.", image: "/cool-mountain-logistics/images/ftl.jpg" },
    { id: "ltl", title: "Less Than Truckload (LTL)", desc: "Cost-effective routing for partial loads, meticulously consolidated for efficiency.", image: "/cool-mountain-logistics/images/ltl.jpg" },
    { id: "reefer", title: "Refrigerated / Temp Control", desc: "Maintain the integrity of perishables with our FSMA-compliant carrier network.", image: "/cool-mountain-logistics/images/reefer.jpg" },
    { id: "flatbed", title: "Flatbed & Stepdeck", desc: "Versatile open-deck solutions for machinery and bulky construction materials.", image: "/cool-mountain-logistics/images/flatbed-stepdeck.jpg" },
    { id: "heavy", title: "Heavy Haul & Specialized", desc: "From multi-axle trailers to permits and escorts, we handle your oversize loads.", image: "/cool-mountain-logistics/images/heavy-haul.jpg" },
    { id: "drayage", title: "Port Drayage", desc: "Seamless transfer of intermodal containers from port to warehouse facilities.", image: "/cool-mountain-logistics/images/drayage.jpg" },
];

export default function ServicesPage() {
    return (
        <>
            <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden pt-24 bg-primary-950">
                <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
                    <p className="text-accent-400 font-bold uppercase tracking-widest mb-3">Capabilities</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        Our Logistics Services
                    </h1>
                    <p className="mt-5 text-lg text-primary-200 max-w-2xl mx-auto leading-relaxed">
                        Explore our comprehensive suite of freight brokerage services designed to move your supply chain forward.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-surface-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {servicesList.map((svc) => (
                            <Link key={svc.id} id={svc.id} href={`/services/${svc.id}`} className="group relative overflow-hidden rounded-[var(--radius-xl)] bg-primary-950 shadow-card aspect-[4/5] sm:aspect-square lg:aspect-[4/5] scroll-mt-24 border border-white/10 hover:border-accent-500/50 transition-all duration-500 flex flex-col justify-end">
                                {/* Background Image */}
                                <Image
                                    src={svc.image}
                                    alt={svc.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-30"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/50 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

                                {/* Content */}
                                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full">
                                    <div className="mt-auto">
                                        <h2 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">{svc.title}</h2>

                                        <div className="overflow-hidden">
                                            <p className="text-primary-100 text-sm md:text-base leading-relaxed opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 h-0 group-hover:h-auto group-hover:mb-6 group-hover:mt-2">
                                                {svc.desc}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 text-accent-400 font-bold uppercase tracking-widest text-sm transition-colors duration-300 group-hover:text-accent-300">
                                            View Details
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
