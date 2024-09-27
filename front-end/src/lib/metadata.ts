import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ram | JavaScript Developer",
    description: "Explore my portfolio showcasing projects and insights on JavaScript, web development, and tech trends.",
    keywords: "JavaScript, React, Node.js, TypeScript, Tech Blog, Web Development, Software Engineering, Portfolio",
    authors: [{ name: "Ram", url: "https://twitter.com/ramthenmala" }],
    openGraph: {
        title: "Ram | JavaScript Developer",
        description: "Explore my portfolio showcasing projects and insights on JavaScript, web development, and tech trends.",
        url: "https://devram.vercel.app/",
        siteName: "Ram's Portfolio",
        images: [
            {
                url: "https://devram.vercel.app/default-avatar.jpg",
                width: 800,
                height: 600,
                alt: "Ram's default avatar",
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: "summary_large_image",
        title: "Ram | JavaScript Developer",
        description: "Explore my portfolio showcasing projects and insights on JavaScript, web development, and tech trends.",
        images: ["https://devram.vercel.app/default-avatar.jpg"],
        site: "@ramthenmala",
    },
};
