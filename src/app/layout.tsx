import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import ScrollToTopLink from "@/components/ScrollToTopLink";

export const metadata: Metadata = {
  title: "Cool Mountain Logistics | Trusted Freight Brokerage",
  description:
    "Cool Mountain Logistics connects shippers with reliable carriers nationwide. Full truckload, LTL, and specialized freight solutions — powered by transparency and trust.",
  keywords: [
    "freight broker",
    "logistics",
    "truckload",
    "LTL",
    "shipping",
    "carrier",
    "freight",
    "Cool Mountain Logistics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />

        <main>{children}</main>

        {/* ═══════════════════════════════════════════
            FOOTER
            ═══════════════════════════════════════════ */}
        <footer className="bg-primary-950 text-white">
          {/* Main footer */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {/* Col 1 — About */}
              <div className="sm:col-span-2 lg:col-span-1">
                <ScrollToTopLink href="https://saskij.github.io/cool-mountain-logistics/">
                  <Image
                    src="/cool-mountain-logistics/images/logo.png"
                    alt="Cool Mountain Logistics"
                    width={160}
                    height={70}
                    className="h-14 w-auto mb-5"
                  />
                </ScrollToTopLink>
                <p className="text-sm text-primary-300 leading-relaxed">
                  Your premier 3PL partner in the heart of Idaho, connecting
                  shippers with reliable capacity across the lower 48.
                </p>
                {/* Social */}
                <div className="flex gap-4 mt-6">
                  <a href="#" className="text-primary-400 hover:text-accent-400 transition-colors duration-200" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                  <a href="#" className="text-primary-400 hover:text-accent-400 transition-colors duration-200" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                </div>
              </div>

              {/* Col 2 — Quick Links */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-accent-400">
                  Quick Links
                </h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/shippers" className="text-primary-300 hover:text-white transition-colors duration-200">Shippers</Link></li>
                  <li><Link href="/carriers" className="text-primary-300 hover:text-white transition-colors duration-200">Carriers</Link></li>
                  <li><Link href="/track" className="text-primary-300 hover:text-white transition-colors duration-200">Tracking</Link></li>
                  <li><Link href="/about" className="text-primary-300 hover:text-white transition-colors duration-200">About Us</Link></li>
                </ul>
              </div>

              {/* Col 3 — Services */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-accent-400">
                  Services
                </h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/services" className="text-primary-300 hover:text-white transition-colors duration-200">Full Truckload (FTL)</Link></li>
                  <li><Link href="/services" className="text-primary-300 hover:text-white transition-colors duration-200">Less Than Truckload (LTL)</Link></li>
                  <li><Link href="/services" className="text-primary-300 hover:text-white transition-colors duration-200">Specialized &amp; Heavy Haul</Link></li>
                  <li><Link href="/services" className="text-primary-300 hover:text-white transition-colors duration-200">Refrigerated</Link></li>
                </ul>
              </div>

              {/* Col 4 — Contact */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-accent-400">
                  Contact
                </h4>
                <ul className="space-y-3 text-sm text-primary-300">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>1428 Madison Ave, Nampa, ID 83687</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <a href="tel:+12085551234" className="hover:text-white transition-colors duration-200">(208) 555-1234</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <a href="mailto:info@coolmountainlogistics.com" className="hover:text-white transition-colors duration-200">info@coolmountainlogistics.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-primary-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-primary-500">
                &copy; 2026 Cool Mountain Logistics LLC. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-xs text-primary-500">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

