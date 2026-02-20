import Link from "next/link";

export default function TrackPage() {
    return (
        <>
            <section className="min-h-screen flex flex-col justify-center pt-24 bg-surface-50">
                <div className="mx-auto max-w-3xl w-full px-4 sm:px-6 lg:px-8 text-center py-20">
                    <h1 className="text-4xl font-extrabold text-primary-900 tracking-tight mb-4">
                        Track Your Shipment
                    </h1>
                    <p className="text-lg text-muted mb-10">
                        Enter your PRO number or Load ID below to view real-time status updates and delivery ETAs.
                    </p>

                    <div className="bg-white p-8 md:p-12 rounded-[var(--radius-xl)] shadow-card border border-surface-200">
                        <form className="max-w-md mx-auto space-y-6">
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
                            <p className="text-sm text-muted">
                                Having trouble locating your freight? Contact our 24/7 dispatch team at <br />
                                <a href="tel:+12085551234" className="text-primary-600 font-bold hover:text-accent-500">(208) 555-1234</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
