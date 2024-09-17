import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; 

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/ramthenmala',
        icon: <FaGithub className="w-8 h-8 text-gray-600 border border-gray-300 rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white" />,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ramdevengineer/',
        icon: <FaLinkedin className="w-8 h-8 text-gray-600 border border-gray-300 rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white" />,
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/ramthenmala',
        icon: <FaInstagram className="w-8 h-8 text-gray-600 border border-gray-300 rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white" />,
    },
];

export default function SocialLinks({ className }: { className?: string }) {
    return (
        <section className={`flex gap-6 ${className}`}>
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                >
                    {link.icon}
                </a>
            ))}
        </section>
    );
}
