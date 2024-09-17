"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { twCn } from "@/app/lib/Utils";
import { motion } from "framer-motion";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className={twCn(
                    "flex w-full overflow-x-scroll py-10 md:py-20 scroll-smooth",
                    "scrollbar-hide"
                )}
                ref={carouselRef}
                onScroll={checkScrollability}
            >
                <div
                    className={twCn(
                        "flex flex-row gap-4 pl-4",
                        "max-w-7xl mx-auto"
                    )}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut" },
                            }}
                            className="rounded-3xl"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>


            <section className="mx-auto max-w-4xl relative">
                <motion.div
                    className="absolute inset-x-0 bottom-0 flex justify-end gap-2 mr-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.button
                        className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowLeftIcon className="h-6 w-6 text-gray-500" />
                    </motion.button>

                    <motion.button
                        className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowRightIcon className="h-6 w-6 text-gray-500" />
                    </motion.button>
                </motion.div>
            </section>

        </div>
    );
};
