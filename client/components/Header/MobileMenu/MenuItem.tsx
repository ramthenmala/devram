import Link from 'next/link';

export default function MenuItem({
    href,
    label,
    delay,
}: {
    href: string;
    label: string;
    delay: number;
}) {
    return (
        <li
            className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <Link href={href} className="flex w-auto pb-4">
                {label}
            </Link>
        </li>
    );
}
