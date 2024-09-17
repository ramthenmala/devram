'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/app/lib/Utils';

function NavItem({ href, text }: { href: string, text: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} passHref>
            <span
                className={cn(
                    isActive
                        ? 'font-semibold text-gray-800 dark:text-gray-200'
                        : 'font-normal text-gray-600 dark:text-gray-400',
                    'hidden md:inline-block p-1 sm:px-3 sm:py-2 hover:text-gray-400 dark:hover:bg-gray-800 transition-all'
                )}
            >
                {text}
            </span>
        </Link>
    );
}

export default NavItem;