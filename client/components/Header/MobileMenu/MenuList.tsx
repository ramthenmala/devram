import { cn } from '@/app/lib/Utils';
import MenuItem from './MenuItem';

export default function MenuList({ isMenuRendered }: { isMenuRendered: boolean }) {
    return (
        <ul
            className={cn(
                'menu',
                'flex flex-col absolute bg-gray-100 dark:bg-gray-900',
                isMenuRendered && 'menuRendered'
            )}
        >
            <MenuItem href="/" label="Home" delay={150} />
            <MenuItem href="/about" label="About" delay={175} />
            <MenuItem href="/photography" label="Photography" delay={200} />
            <MenuItem href="/blog" label="Blog" delay={250} />
            <MenuItem href="/contact" label="Contact" delay={275} />
        </ul>
    );
}
