import Link from "next/link";
import Image from "next/image";

const servicesList = [
    { id: "ftl", title: "Full Truckload (FTL)", desc: "Dedicated capacity for your large shipments ensuring direct and secure delivery." },
    { id: "ltl", title: "Less Than Truckload (LTL)", desc: "Cost-effective routing for partial loads, meticulously consolidated for efficiency." },
    { id: "reefer", title: "Refrigerated / Temp Control", desc: "Maintain the integrity of perishables with our FSMA-compliant carrier network." },
    { id: "flatbed", title: "Flatbed & Stepdeck", desc: "Versatile open-deck solutions for machinery and bulky construction materials." },
    { id: "heavy", title: "Heavy Haul & Specialized", desc: "From multi-axle trailers to permits and escorts, we handle your oversize loads." },
    { id: "drayage", title: "Port Drayage", desc: "Seamless transfer of intermodal containers from port to warehouse facilities." },
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

            <section className="py-20 bg-surface-50">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
                    {servicesList.map((svc) => (
                        <div key={svc.id} id={svc.id} className="bg-white p-8 md:p-10 rounded-[var(--radius-xl)] shadow-card border border-surface-200 scroll-mt-24">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">{svc.title}</h2>
                            <p className="text-muted text-lg mb-6 leading-relaxed">{svc.desc}</p>
                            <div className="bg-surface-50 p-6 rounded-lg border border-surface-200 flex flex-col md:flex-row gap-6 items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-primary-900 mb-1">Ready to ship {svc.title.toLowerCase()}?</h4>
                                    <p className="text-sm text-muted">Get a competitive quote today and lock in capacity.</p>
                                </div>
                                <Link href="/contact" className="bg-primary-900 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-primary-800 transition-colors whitespace-nowrap">
                                    Request Quote
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
