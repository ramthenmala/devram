'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';
import { HeaderNavigation } from '@/app/lib/constants';

function Header() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const isDarkMode = resolvedTheme === 'dark';

    return (
        <nav className="flex items-center justify-between  relative max-w-4xl w-full border-gray-200 dark:border-gray-700 mx-auto px-2 md:px-0 pt-8 pb-8 sm:pb-16 text-gray-900 bg-opacity-60 dark:text-gray-100">

            <div>
                <MobileMenu />

                {HeaderNavigation.map(({ href, label }) => (
                    <NavItem key={label} href={href} text={label} />
                ))}
            </div>

            <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
                onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
            >
                {mounted && (isDarkMode ? (
                    <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                ) : (
                    <SunIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                ))}
            </button>
        </nav>
    );
}

export default Header;
