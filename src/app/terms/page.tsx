export default function TermsPage() {
    return (
        <>
            <section className="pt-32 pb-12 bg-surface-50">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-primary-900 tracking-tight">Terms of Service</h1>
                    <p className="text-muted mt-4">Effective Date: January 1, 2026</p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-primary max-w-none">
                        <p>
                            Welcome to Cool Mountain Logistics LLC. By accessing our website or utilizing our freight brokerage services, you agree to be bound by these Terms of Service.
                        </p>

                        <h3>Brokerage Services Representation</h3>
                        <p>
                            Cool Mountain Logistics LLC operates strictly as an FMCSA-licensed property broker (MC 1712055). We are not a motor carrier, nor do we represent ourselves as a motor carrier. All physical transportation is provided by independent, third-party motor carriers.
                        </p>

                        <h3>User Responsibilities</h3>
                        <p>
                            Users of our website agree to provide accurate and truthful information when requesting rate quotes, submitting carrier onboarding packets, or tracking shipments.
                        </p>

                        <h3>Limitation of Liability</h3>
                        <p>
                            While we stringently vet the carriers in our network, Cool Mountain Logistics LLC is not directly liable for cargo loss, damage, or delay during transit caused by third-party motor carriers, acts of God/force majeure, or shipper packaging. Claims must be filed directly against the carrier's cargo liability policy per typical brokerage indemnification.
                        </p>

                        <h3>Governing Law</h3>
                        <p>
                            These terms are governed by the laws of the State of Idaho and applicable federal regulations established by the FMCSA and the Department of Transportation.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
