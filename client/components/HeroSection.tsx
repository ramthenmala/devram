"use client";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks"; // Import your SocialLinks component

const SectionWithAnimation = () => {
    return (
        <section className="mx-auto max-w-4xl px-2">
            <div className="flex flex-col-reverse sm:flex-row items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} // Slide up and fade in effect
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }} // Customize duration and delay
                    className="flex flex-col pr-8"
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }} // Slide left and fade in effect
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl font-bold dark:text-white"
                    >
                        Ram.
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }} // Slide left and fade in effect
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-700 dark:text-white mb-4 text-2xl"
                    >
                        Front end Full Stack Developer
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} // Slide left and fade in effect
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <SocialLinks />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} // Slide up and fade in effect
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-600 dark:text-gray-200 text-xl tracking-wide pt-6 pb-14"
                    >
                        I work with the JavaScript ecosystem. Welcome to my small piece of the
                        internet, where I write and share about different topics related to the tech
                        industry and lifestyle.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} // Scale up and fade in effect
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto"
                >
                    {/* Add any content or image here if needed */}
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWithAnimation;
