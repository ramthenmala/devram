import { useState, useEffect } from 'react';
import useDelayedRender from 'use-delayed-render';
import CrossIcon from '../icons/CrossIcon';
import MenuIcon from '../icons/MenuIcon';
import MenuList from './MobileMenu/MenuList';
import { cn } from '@/app/lib/Utils';

function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
        isMenuOpen,
        {
            enterDelay: 20,
            exitDelay: 300,
        }
    );

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? '' : 'hidden';
    }

    useEffect(() => {
        return function cleanup() {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <button
                className='burger visible md:hidden'
                aria-label="Toggle menu"
                type="button"
                onClick={toggleMenu}
            >
                <MenuIcon data-hide={isMenuOpen} />
                <CrossIcon data-hide={!isMenuOpen} />
            </button>
            {isMenuMounted && (
                <ul
                    className={cn(
                        'menu',
                        'flex flex-col absolute bg-gray-100 dark:bg-gray-900',
                        isMenuRendered && 'menuRendered'
                    )}
                >
                    <MenuList isMenuRendered={isMenuRendered} />
                </ul>
            )}
        </>
    );
}

export default MobileMenu