import React from 'react';
import SEOHead from "@/components/SEOHead";
import PageLayout from '../pagelayout';

const Contact: React.FC = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Contact Us | Ram's Portfolio"
        description="Get in touch with Ram, a JavaScript Developer."
        url="https://devram.vercel.app/contact"
      />
      <section className="mx-auto max-w-4xl px-4 pt-16 text-center">
        <div className="text-gray-900 dark:text-prose-dark-text">
          <p className="text-lg font-medium mb-4 mt-4">
            <span className="ml-2">Feel free to reach out at:</span>
          </p>
          <p className="text-4xl font-semibold">
            <a href="mailto:devramthenmala@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">
              devramthenmala@gmail.com
            </a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
