"use client";
import { motion } from "framer-motion";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type HeroProps = {
    title: string;
    description?: string;
    readMore?: boolean;
    path?: string;
    className?: string;
};

const Hero = ({ title, description, readMore, path, className }: HeroProps) => {
    return (
        <section className="mx-auto max-w-4xl px-2">
            <motion.div
                className={`${className} pt-10`}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    className="font-bold text-4xl md:text-4xl tracking-tight mb-4 text-black dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className="mb-4 text-gray-600 dark:text-gray-400 md:pr-20 text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {description}
                </motion.p>

                {readMore && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link href={`${path}`} className="hover:underline flex items-center gap-3 dark:text-white">
                            Read all posts <ArrowLongRightIcon className="w-8 h-8" />
                        </Link>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default Hero;
