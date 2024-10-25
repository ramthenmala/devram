import LatestBlogPosts from "@/components/LatestBlogPosts";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/ProjectCard";
import { ResumeCard } from "@/components/ResumeCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import type { Metadata } from "next";
import { ProjectsWorked } from "@/components/ProjectsWorked";

export const metadata: Metadata = {
  title: "Ram | JavaScript Developer | Portfolio & Insights",
  description: "Discover Ram's portfolio featuring innovative projects and expert insights on JavaScript, web development, and the latest tech trends.",
  keywords: "JavaScript, React, Node.js, TypeScript, Tech Blog, Web Development, Software Engineering, Portfolio, Frontend Developer, Full Stack Developer",
  authors: [{ name: "Ram", url: "https://twitter.com/ramthenmala" }],
  openGraph: {
    title: "Ram | JavaScript Developer | Portfolio & Insights",
    description: "Explore Ram's portfolio showcasing innovative projects, coding insights, and the latest trends in JavaScript and web development.",
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
    title: "Ram | JavaScript Developer | Portfolio & Insights",
    description: "Join Ram on a journey through innovative web development projects and insights into the world of JavaScript.",
    images: ["https://devram.vercel.app/default-avatar.jpg"],
    site: "@ramthenmala",
  },
};


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-20 md:size-44 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="projectsworked">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Projects I worked on
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Key Projects & Technical Expertise
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I have worked on projects like the Sharjah Police website and HRMS, leading front-end development using React.js, Next.js, D3.js, and Sanity.io for CMS management. I also crafted responsive prototypes with HTML/HTML5, CSS3, JavaScript, and jQuery, and developed key e-commerce features such as shopping carts and checkout pages using Bootstrap CSS and JavaScript.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.projectsWorked.map((project, id) => (
                  <BlurFade
                    key={project?.title}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <ProjectsWorked
                      title={project?.title}
                      description={project?.description}
                      location={project?.location}
                      dates={project?.dates}
                      image={project?.image}
                      links={project?.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>

        <section id="blog-posts">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-4">
                    Blogging
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Sharing My Insights
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Through my blog, I aim to share my experiences, lessons learned, and the exciting
                    journey in the tech world. Writing helps me articulate my thoughts and connect
                    with others who share similar passions. Join me as I explore topics ranging from
                    coding and technology to personal growth and creativity.
                  </p>
                </div>
              </div>
            </BlurFade>

            <LatestBlogPosts />
          </div>
        </section>

        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm bg-gray-900 text-white dark:bg-white dark:text-gray-900">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Feel free to drop me a DM{" "}
                  <Link
                    href={DATA.contact.social.X.url}
                    className="text-blue-500 hover:underline dark:text-blue-400"
                  >
                    with any direct questions on twitter
                  </Link>
                  , and I&apos;ll get back to you as soon as I can. Please note that I won&apos;t respond to any unsolicited messages.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>


      </main>
    </>
  );
}
