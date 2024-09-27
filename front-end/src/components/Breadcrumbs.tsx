import { ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface BreadcrumbsProps {
    items: {
        label: string;
        href?: string;
    }[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <nav className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-8">
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-3">
                    {index > 0 && <ChevronRightIcon className="h-3 w-3 text-gray-500 dark:text-gray-400" />}
                    {item.href ? (
                        <Link href={item.href} className="text-blue-600 dark:text-blue-400 hover:underline">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
