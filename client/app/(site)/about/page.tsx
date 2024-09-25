"use client";

import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import SEOHead from "@/components/SEOHead";
import client from '@/client';
import PageLayout from '../pagelayout';

interface AboutPageData {
  title: string;
  body: any;
}

async function fetchAboutPageData(): Promise<AboutPageData> {
  const query = `*[_type == "about"][0]{
    title,
    body
  }`;

  return client.fetch(query);
}

const AboutPage = async () => {
  const aboutPageData = await fetchAboutPageData();

  return (
    <PageLayout>
      <SEOHead
        title="About Us | Ram's Portfolio"
        description="Learn more about Ram, a JavaScript Developer passionate about modern web technologies."
        url="https://devram.vercel.app/about"
      />
      <section className="mx-auto max-w-4xl px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose dark:prose-dark pb-10 text-gray-900 dark:text-prose-dark-text"
        >
          <h1 className="text-4xl font-bold mb-6">{aboutPageData.title}</h1>
          <PortableText value={aboutPageData.body} />
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
