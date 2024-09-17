"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twCn } from "@/app/lib/Utils";

interface CTAAnimationProps {
    words?: string[];
    duration?: number;
    className?: string;
}

const CTAAnimation: React.FC<CTAAnimationProps> = ({
    words = [],
    duration = 3000,
    className,
}) => {
    const [currentWord, setCurrentWord] = useState<string>(words[0] || '');
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const startAnimation = useCallback(() => {
        const nextWord = words[(words.indexOf(currentWord) + 1) % words.length] || '';
        setCurrentWord(nextWord);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        if (!isAnimating && words.length > 0) {
            const timer = setTimeout(() => startAnimation(), duration);
            return () => clearTimeout(timer);
        }
    }, [isAnimating, duration, startAnimation, words]);

    if (words.length === 0) return null;

    return (
        <AnimatePresence
            onExitComplete={() => setIsAnimating(false)}
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                exit={{ opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 2, position: "absolute" }}
                className={twCn("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2", className)}
                key={currentWord}
            >
                {currentWord.split(" ").map((word, wordIndex) => (
                    <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: wordIndex * 0.3, duration: 0.3 }}
                        className="inline-block whitespace-nowrap"
                    >
                        {word.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={letterIndex}
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ delay: wordIndex * 0.3 + letterIndex * 0.05, duration: 0.2 }}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};


const CTASection: React.FC = () => {
    const words = ["innovative", "impactful", "dynamic", "exceptional"];

    return (
        <div className="relative max-w-4xl mx-auto text-center z-10">
            <h2 className="text-4xl font-extrabold mb-4">
                Transforming
                <CTAAnimation words={["creative", "remarkable", "modern", "engaging"]} />
                visions into reality with Ram's expertise
            </h2>

            <a
                href="#contact"
                className="inline-block px-6 py-3 text-lg font-semibold bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
                Get in Touch
            </a>
        </div>
    );
};

export default CTASection;