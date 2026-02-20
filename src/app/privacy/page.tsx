export default function PrivacyPage() {
    return (
        <>
            <section className="pt-32 pb-12 bg-surface-50">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-primary-900 tracking-tight">Privacy Policy</h1>
                    <p className="text-muted mt-4">Effective Date: January 1, 2026</p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-primary max-w-none">
                        <p>
                            Cool Mountain Logistics LLC ("we", "our", "us") values your privacy. This Privacy Policy describes how we collect, use, and share your personal information when you use our website or logistics brokerage services.
                        </p>

                        <h3>Information We Collect</h3>
                        <p>
                            We collect information that you provide directly to us, such as when you request a freight quote, submit a contact form, or sign up as a carrier. This may include:
                        </p>
                        <ul>
                            <li>Contact details (name, email address, phone number)</li>
                            <li>Company and business details (USDOT number, MC number, insurance info)</li>
                            <li>Shipping and pickup/delivery address data</li>
                        </ul>

                        <h3>How We Use Your Information</h3>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide, maintain, and improve our logistics and brokerage services</li>
                            <li>Process and manage transactions, including load tracking and billing</li>
                            <li>Communicate with you regarding quotes, shipments, and customer support</li>
                            <li>Comply with federal transportation regulations and compliance reporting</li>
                        </ul>

                        <h3>Sharing of Information</h3>
                        <p>
                            We do not sell your personal information. We may share information with trusted third-party partners (e.g., freight carriers, TMS platforms) necessary to execute our transportation services.
                        </p>

                        <h3>Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at info@coolmountainlogistics.com.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
