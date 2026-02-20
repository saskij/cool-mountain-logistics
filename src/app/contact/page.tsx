import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
    return (
        <>
            <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden pt-24 bg-primary-950">
                <Image
                    src="/cool-mountain-logistics/images/hero-bg.png"
                    alt="Contact Us Background"
                    fill
                    priority
                    className="object-cover object-bottom opacity-30 grayscale saturate-200 sepia-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-transparent" />
                <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
                    <p className="text-accent-400 font-bold uppercase tracking-widest mb-3">Connect With Us</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        Get a Quote or Contact Sales
                    </h1>
                    <p className="mt-5 text-lg text-primary-200 max-w-2xl mx-auto leading-relaxed">
                        Fill out the form below or reach out directly. Our logistics experts are standing by.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-surface-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Info Side */}
                        <div>
                            <h2 className="text-3xl font-extrabold text-primary-900 mb-6">Cool Mountain Logistics LLC</h2>
                            <p className="text-muted mb-8 leading-relaxed">
                                Whether you need a quick quote on a difficult lane or have questions about our carrier network, our team is ready to help 24/7.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 shrink-0 self-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary-900">Headquarters</p>
                                        <p className="text-muted mt-1">Nampa, ID 83651</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 shrink-0 self-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary-900">Phone</p>
                                        <a href="tel:+12085551234" className="text-primary-600 font-bold hover:text-accent-500 mt-1 block">(208) 555-1234</a>
                                        <p className="text-xs text-muted mt-1">Available 24/7/365</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-primary-100 p-3 rounded-full text-primary-600 shrink-0 self-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary-900">Email</p>
                                        <a href="mailto:info@coolmountainlogistics.com" className="text-primary-600 font-bold hover:text-accent-500 mt-1 block">info@coolmountainlogistics.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-white p-8 md:p-10 rounded-[var(--radius-xl)] shadow-card border border-surface-200">
                            <h3 className="text-2xl font-bold text-primary-900 mb-6">Send a Message</h3>
                            <form className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-primary-800 mb-1">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-surface-300 rounded-[var(--radius-btn)] focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-primary-800 mb-1">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-surface-300 rounded-[var(--radius-btn)] focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primary-800 mb-1">Company</label>
                                    <input type="text" className="w-full px-4 py-3 border border-surface-300 rounded-[var(--radius-btn)] focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-primary-800 mb-1">Email</label>
                                        <input type="email" className="w-full px-4 py-3 border border-surface-300 rounded-[var(--radius-btn)] focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-primary-800 mb-1">Phone</label>
                                        <input type="tel" className="w-full px-4 py-3 border border-surface-300 rounded-[var(--radius-btn)] focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-primary-800 mb-1">How can we help?</label>
                                    <textarea rows={4} className="w-full px-4 py-3 border border-surface-300 rounded-[var(--radius-btn)] focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-accent-500 text-white font-bold py-4 rounded-[var(--radius-btn)] text-sm uppercase tracking-wide hover:bg-accent-600 transition-colors shadow-btn mt-2">
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
