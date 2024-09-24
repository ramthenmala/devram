"use client";
import { motion } from "framer-motion";
import { CloudIcon } from '@heroicons/react/24/outline';
import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiDocker,
    SiKubernetes,
    SiGooglecloud,
    SiPostgresql,
    SiMongodb,
    SiSass,     
    SiLess,     
    SiStyledcomponents,
} from 'react-icons/si';

const techStack = [
    { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-blue-600 dark:text-blue-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-yellow-500 dark:text-yellow-400" /> },
    { name: 'React', icon: <SiReact className="w-8 h-8 text-blue-500 dark:text-blue-300" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 text-gray-800 dark:text-gray-300" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8 text-green-600 dark:text-green-400" /> },
    { name: 'Docker', icon: <SiDocker className="w-8 h-8 text-blue-400 dark:text-blue-300" /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="w-8 h-8 text-blue-500 dark:text-blue-400" /> },
    { name: 'GCP', icon: <CloudIcon className="w-8 h-8 text-blue-500 dark:text-blue-400" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8 text-blue-700 dark:text-blue-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-green-700 dark:text-green-500" /> },
    { name: 'SCSS', icon: <SiSass className="w-8 h-8 text-pink-500 dark:text-pink-300" /> },
    { name: 'LESS', icon: <SiLess className="w-12 h-12 text-blue-600 dark:text-blue-400" /> }, // Double size
    { name: 'styled-components', icon: <SiStyledcomponents className="w-12 h-12 text-pink-600 dark:text-pink-400" /> }, // Double size
];

function TechStack() {
    return (
        <section className="mx-auto max-w-4xl py-4 px-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center"
                    >
                        {tech.icon}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                            className="mt-2 text-lg font-medium dark:text-white"
                        >
                            {tech.name}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default TechStack;
