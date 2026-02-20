'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const servicesDropdown = [
  { label: 'Full Truckload (FTL)', href: '/services/ftl' },
  { label: 'Less Than Truckload (LTL)', href: '/services/ltl' },
  { label: 'Refrigerated', href: '/services/reefer' },
  { label: 'Flatbed & Stepdeck', href: '/services/flatbed' },
  { label: 'Heavy Haul', href: '/services/heavy' },
  { label: 'Drayage', href: '/services/drayage' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinkClasses = `
    relative px-3 py-2 text-[13px] font-medium tracking-wide
    text-white/90 uppercase
    transition-all duration-200
    hover:text-white
    after:absolute after:bottom-0 after:left-1/2 after:h-[2px]
    after:w-0 after:bg-accent-500 after:-translate-x-1/2
    after:transition-all after:duration-300
    hover:after:w-3/4
  `;

  return (
    <>
      {/* ─── Utility Bar ─── */}
      <div className={`
        fixed top-0 left-0 right-0 z-[60]
        transition-all duration-300
        ${scrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100'}
      `}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-2 text-xs">
            {/* Phone */}
            <a
              href="tel:+12085551234"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="font-medium">(208) 555-1234</span>
            </a>

            {/* Transport Portal */}
            <a
              href="https://saskij.github.io/Coolmountain/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors duration-200 font-medium"
            >
              Transport Portal
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ─── Main Floating Header ─── */}
      <header
        className={`
          fixed left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${scrolled ? 'top-2' : 'top-8'}
        `}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className={`
            relative flex items-center justify-between
            backdrop-blur-xl
            rounded-full
            border border-white/[0.12]
            transition-all duration-500
            ${scrolled
              ? 'bg-primary-950/90 shadow-lg py-2 px-5'
              : 'bg-primary-950/60 py-3 px-6'
            }
          `}>
            {/* ─── Left Nav (Desktop) ─── */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              <Link href="/shippers" className={navLinkClasses}>
                Shippers
              </Link>

              {/* Services with Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`
                    ${navLinkClasses}
                    inline-flex items-center gap-1 cursor-pointer
                  `}
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-3 w-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Dropdown Panel */}
                <div className={`
                  absolute top-full left-0 mt-3 w-60
                  bg-primary-950/95 backdrop-blur-xl
                  border border-white/10 rounded-xl
                  shadow-2xl overflow-hidden
                  transition-all duration-300 origin-top
                  ${servicesOpen
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }
                `}>
                  <div className="py-2">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="
                          flex items-center gap-2 px-4 py-2.5
                          text-sm text-white/80 font-medium
                          transition-colors duration-200
                          hover:bg-white/10 hover:text-white
                        "
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-500 shrink-0" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* ─── Center Logo ─── */}
            <Link href="/" className="relative z-10 shrink-0 -my-5 group">
              <div className={`
                relative transition-all duration-500
                ${scrolled ? 'h-16 w-28' : 'h-20 w-32'}
              `}>
                <Image
                  src="/cool-mountain-logistics/images/logo.png"
                  alt="Cool Mountain Logistics"
                  fill
                  priority
                  className="object-contain drop-shadow-lg group-hover:scale-[1.03] transition-transform duration-300"
                  sizes="128px"
                />
              </div>
            </Link>

            {/* ─── Right Nav (Desktop) ─── */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-end">
              <Link href="/about" className={navLinkClasses}>
                About
              </Link>
              <Link href="/carriers" className={navLinkClasses}>
                Carriers
              </Link>
              <Link href="/track" className={navLinkClasses}>
                Track Load
              </Link>

              {/* CTA */}
              <Link
                href="/contact"
                className="
                  ml-3 inline-flex items-center gap-1.5
                  bg-accent-500 text-white
                  px-5 py-2 rounded-full
                  text-xs font-bold uppercase tracking-wide
                  shadow-btn
                  transition-all duration-200
                  hover:bg-accent-600 hover:shadow-lg hover:-translate-y-0.5
                  active:translate-y-0
                "
              >
                Get a Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </nav>

            {/* ─── Mobile: Hamburger ─── */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block h-[2px] bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Menu: Full-screen Blur ─── */}
      <div
        className={`
          fixed inset-0 z-[55]
          bg-primary-950/90 backdrop-blur-2xl
          transition-all duration-500
          lg:hidden
          ${mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }
        `}
      >
        {/* Close button */}
        <div className="flex items-center justify-between p-5">
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full text-white/70 hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Centered logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/cool-mountain-logistics/images/logo.png"
            alt="Cool Mountain Logistics"
            width={140}
            height={60}
            className="h-14 w-auto"
          />
        </div>

        {/* Nav */}
        <nav className="px-8">
          <ul className="space-y-1">
            <li>
              <Link
                href="/shippers"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-white font-medium text-lg rounded-xl transition-colors duration-200 hover:bg-white/10"
              >
                Shippers
              </Link>
            </li>
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-3.5 text-white font-medium text-lg rounded-xl transition-colors duration-200 hover:bg-white/10"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-white/50 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {/* Mobile Services Sub-menu */}
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="pl-6 py-1 space-y-0.5">
                  {servicesDropdown.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-white/70 font-medium text-sm rounded-lg transition-colors duration-200 hover:bg-white/10 hover:text-white"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-500 shrink-0" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-white font-medium text-lg rounded-xl transition-colors duration-200 hover:bg-white/10"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/carriers"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-white font-medium text-lg rounded-xl transition-colors duration-200 hover:bg-white/10"
              >
                Carriers
              </Link>
            </li>
            <li>
              <Link
                href="/track"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-white font-medium text-lg rounded-xl transition-colors duration-200 hover:bg-white/10"
              >
                Track Load
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile CTA */}
        <div className="px-8 mt-8">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="
              flex items-center justify-center gap-2 w-full
              bg-accent-500 text-white
              px-6 py-4 rounded-full
              text-sm font-bold uppercase tracking-wide
              shadow-btn
              transition-all duration-200
              hover:bg-accent-600
            "
          >
            Get a Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Phone */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40 mb-1">Need help? Call us</p>
          <a
            href="tel:+12085551234"
            className="text-base font-bold text-white hover:text-accent-400 transition-colors"
          >
            (208) 555-1234
          </a>
        </div>
      </div>
    </>
  );
}
