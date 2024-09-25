import Head from "next/head";

const SEOHead = ({
    title = "Ram | JavaScript Developer",
    description = "Welcome to my portfolio! Explore my featured projects and blog where I share insights on JavaScript, web development, and tech trends.",
    keywords = "JavaScript, React, Node.js, TypeScript, Tech Blog, Web Development, Software Engineering, Portfolio",
    image = "https://devram.vercel.app/default-avatar.jpg",
    url = "https://devram.vercel.app/",
    siteName = "Ram's Portfolio"
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />
            <link rel="icon" href="/favicon.ico" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <script type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ram",
            "url": "${url}",
            "description": "${description}",
            "sameAs": [
              "https://github.com/ramthenmala",
              "https://x.com/ramthenmala", 
              "https://www.linkedin.com/in/ramdevengineer/"
            ],
            "jobTitle": "JavaScript Developer"
          }
        `}
            </script>
        </Head>
    );
};

export default SEOHead;
