import { motion } from "framer-motion";
import Link from "next/link";
import { BlurImage } from "./BlurImage";

interface CardProps {
    card: {
        src: string;
        title: string;
        category: string;
        content: React.ReactNode;
        url: string;
        author?: {
            name: string;
            avatarSrc: string;
        };
        readTime?: number;
    };
    index: number;
    layout?: boolean;
    isFeatured?: boolean; 
}

export const Card = ({ card, isFeatured }: CardProps) => {
    const content = (
        <motion.div
            className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden relative block"
            layoutId={card.title}
        >
            <div className="absolute inset-x-0 h-full bg-gradient-to-b from-black/50 z-30" />
            <div className="relative z-40 p-8 flex flex-col justify-between h-full">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white text-sm font-medium"
                    >
                        {card.category}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white text-xl md:text-3xl font-semibold max-w-xs mt-2"
                    >
                        {card.title}
                    </motion.p>
                </div>
                {card.author && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center mt-auto text-white text-sm"
                    >
                        <div className="flex items-center space-x-3">
                            {card.author.avatarSrc && (
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative mr-2"
                                >
                                    <BlurImage
                                        src={card.author.avatarSrc}
                                        alt={`${card.author.name}'s avatar`}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                </motion.div>
                            )}
                            <div>
                                <p className="text-white font-semibold text-lg">{card.author.name}</p>
                                {card.readTime !== undefined && (
                                    <p className="text-white text-sm">{card.readTime} min read</p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
            <BlurImage
                src={card.src}
                alt={card.title}
                fill
                className="object-cover absolute inset-0"
            />
        </motion.div>
    );

    return isFeatured ? (
        <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            {content}
        </a>
    ) : (
        <Link href={card.url} passHref>
            {content}
        </Link>
    );
};
