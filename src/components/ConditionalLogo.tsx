'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ScrollToTopLink from './ScrollToTopLink';

export default function ConditionalLogo() {
    const pathname = usePathname();
    const logoHref = pathname === '/' ? 'https://saskij.github.io/Coolmountain/' : '/';

    return (
        <ScrollToTopLink href={logoHref}>
            <Image
                src="/cool-mountain-logistics/images/logo.png"
                alt="Cool Mountain Logistics"
                width={160}
                height={70}
                className="h-14 w-auto mb-5"
            />
        </ScrollToTopLink>
    );
}
