"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ScrollToTopLink({
    href,
    className,
    children,
    onClick,
}: {
    href: string;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === href) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        if (onClick) onClick();
    };

    return (
        <Link href={href} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
}
