import PageLayout from "./(site)/pagelayout";
import TechStack from "@/components/Techstack";
import HeroSection from "@/components/HeroSection";
import Hero from "@/components/Hero";
import { BlogList } from "@/components/BlogList";
import { Projects } from "@/components/Projects";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  return (
    <>
      <PageLayout>
        <SEOHead />
        <HeroSection />
        <TechStack />

        <Hero
          title='Featured Projects'
          description="Explore my GitHub showcase, where I highlight a selection of innovative projects that demonstrate my skills and passion for development. From interactive web applications to powerful back-end solutions, each project reflects my commitment to quality and creativity in the JavaScript ecosystem. Dive in and see what I’ve been working on!"
          readMore={true}
          path='https://github.com/ramthenmala/' />

        <Projects />

        <Hero
          title='Blog'
          description="Explore my blog, where I share insights, tips, and tutorials on various tech industry topics. From in-depth explorations of JavaScript frameworks to practical advice on best coding practices, each post reflects my journey and passion for development. Join me as I discuss the latest trends and challenges in the ever-evolving tech landscape!"
          readMore={true}
          path='/blog' />

        <BlogList />
      </PageLayout>
    </>
  );
}
