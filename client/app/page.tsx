import PageLayout from "./(site)/pagelayout";
import TechStack from "@/components/Techstack";
import HeroSection from "@/components/HeroSection";
import Hero from "@/components/Hero";
import { BlogList } from "@/components/BlogList";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <PageLayout>
        <HeroSection />
        <TechStack />

        <Hero
          title='Featured Projects'
          description="Front-End Engineer with proven experience at TCS, Pit Solutions and DoubleSpring in helping companies create and maintain a better code base for reusability."
          readMore={true}
          path='https://github.com/ramthenmala/' />


        <Projects />

        <Hero
          title='Blog'
          description="Front-End Engineer with proven experience at TCS, Pit Solutions and DoubleSpring in helping companies create and maintain a better code base for reusability."
          readMore={true}
          path='/blog' />
        
        <BlogList />

      </PageLayout>
    </>
  );
}
