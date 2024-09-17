import { FooterNavigation } from '@/app/lib/constants';
import Link from 'next/link';

type ExternalLinkProps = {
    href: string;
    children: React.ReactNode;
};

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
    <a
        className="text-gray-500 hover:text-gray-600 transition dark:text-gray-400 dark:hover:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
    >
        {children}
    </a>
);

function Footer() {
    return (
        <footer className='flex flex-col justify-center mx-auto max-w-4xl w-full items-start '>
            <hr className="w-full border border-gray-200 dark:border-gray-800 mb-8" />
            <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-6xl font-bold text-gray-900 dark:text-gray-100">R.</h2>
                </div>
                <div className="flex flex-col space-y-4">
                    {FooterNavigation.map(({ href, label }) => (
                        <Link key={href} href={href} className="text-gray-500 hover:text-gray-600 transition dark:text-gray-400 dark:hover:text-gray-300">
                            {label}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col space-y-4">
                    <ExternalLink href="https://twitter.com/ramthenmala">Twitter</ExternalLink>
                    <ExternalLink href="https://github.com/ramthenmala">GitHub</ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/in/ramdevengineer/">LinkedIn</ExternalLink>
                    <ExternalLink href="https://www.instagram.com/ramthenmala/">Instagram</ExternalLink>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
