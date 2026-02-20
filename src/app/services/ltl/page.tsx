import Link from "next/link";
import Image from "next/image";

export default function LTLPage() {
    return (
        <>
            <section className="relative min-h-[40vh] flex flex-col justify-center overflow-hidden pt-24 bg-primary-950">
                <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-12 pb-8">
                    <p className="text-accent-400 font-bold uppercase tracking-widest mb-3">Service Details</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Less Than Truckload (LTL)
                    </h1>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="prose prose-primary prose-lg">
                            <h2 className="text-3xl font-extrabold text-primary-900 mt-0">Cost-Effective Consolidation</h2>
                            <p>
                                You don&apos;t always need a full 53-foot trailer to move your product. For shipments ranging from one to ten pallets, Less Than Truckload (LTL) is the most cost-effective way to get your goods moving.
                            </p>
                            <p>
                                LTL shipping involves complex routing and terminal transfers, which is why having an honest, attentive broker makes all the difference. We might not be the biggest brokerage out there, but we pride ourselves on catching the small details that others miss—like freight class accuracy, proper packaging advice, and realistic transit times.
                            </p>

                            <h3 className="text-2xl font-bold text-primary-900 mt-8 mb-4">The Cool Mountain Difference for LTL</h3>
                            <ul className="space-y-3">
                                <li><strong>Cost Transparency:</strong> We help classify your freight correctly the first time to avoid costly re-weigh and re-class fees.</li>
                                <li><strong>Network Reliability:</strong> We partner with trusted national and regional LTL carriers who boast low damage claims.</li>
                                <li><strong>Personalized Attention:</strong> If a delay happens at a terminal, we&apos;re proactively calling the carrier so you don&apos;t have to.</li>
                            </ul>
                        </div>

                        <div className="relative h-[500px] w-full rounded-[var(--radius-xl)] overflow-hidden shadow-2xl">
                            <Image
                                src="/cool-mountain-logistics/images/hero-bg.png"
                                alt="LTL Service"
                                fill
                                className="object-cover object-right saturate-50"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                    <p className="text-white font-medium text-sm">Efficient routing and terminal transfers with complete visibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-surface-50 p-10 rounded-[var(--radius-xl)] border border-surface-200 text-center max-w-3xl mx-auto">
                        <h4 className="text-3xl font-bold text-primary-900 mb-3">Need to move a few pallets?</h4>
                        <p className="text-muted mb-8 text-lg">Reach out today for honest rates and personalized service.</p>
                        <Link href="/contact" className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn">
                            Request an LTL Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
