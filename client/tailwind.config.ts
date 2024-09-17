import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Define colors for dark mode text
        'prose-dark-text': '#edf2f7', // Example white text color for dark mode
        'prose-dark-headings': '#f9fafb', // Example white color for dark mode headings
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents, theme }) {
      addComponents({
        '.prose-dark': {
          '--tw-prose-body': theme('colors.prose-dark-text'),
          '--tw-prose-headings': theme('colors.prose-dark-headings'),
          '--tw-prose-links': theme('colors.prose-dark-text'),
          // Add more custom styles if needed
        },
      });
    },
  ],
};

export default config;
