import client from '../../../client';
import Link from 'next/link';
import { calculateReadingTime, portableTextToPlainText } from '@/lib/utils';
import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ram's Tech Blog | Insights on JavaScript & Web Development",
  description: "Explore Ram's blog for insightful articles on JavaScript, web development trends, coding tutorials, and personal growth experiences.",
  keywords: "JavaScript, Web Development, Tech Blog, Coding, Programming, Software Engineering, Personal Growth, Tutorials, Technology Insights",
  authors: [{ name: "Ram", url: "https://twitter.com/ramthenmala" }],
  openGraph: {
    title: "Ram's Tech Blog | Insights on JavaScript & Web Development",
    description: "Join Ram as he shares his journey in tech, offering valuable insights and tutorials on JavaScript and web development.",
    url: "https://devram.vercel.app/blog",
    siteName: "Ram's Tech Blog",
    images: [
      {
        url: "https://devram.vercel.app/default-avatar.jpg",
        width: 800,
        height: 600,
        alt: "Blog post illustration",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram's Tech Blog | Insights on JavaScript & Web Development",
    description: "Discover articles and insights from Ram's tech journey, focusing on JavaScript and web development.",
    images: ["https://devram.vercel.app/default-avatar.jpg"],
    site: "@ramthenmala",
  },
};

interface BlogPost {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
  body: any[];
  author?: {
    name: string;
    avatarSrc?: string;
  };
  readTime?: number;
}

const fetchBlogPosts = async (page: number): Promise<{ posts: BlogPost[], total: number }> => {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      publishedAt,
      mainImage {
        asset->{
          url
        }
      },
      body,
      author-> {
        name,
        avatarSrc
      }
    }[${(page - 1) * pageSize}...${page * pageSize}]
  `;

  const totalQuery = `count(*[_type == "post"])`;

  try {
    const [posts, total] = await Promise.all([
      client.fetch(query),
      client.fetch(totalQuery),
    ]);

    return {
      posts: posts.map((post: any) => ({
        ...post,
        readTime: calculateReadingTime(portableTextToPlainText(post.body)),
      })),
      total,
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { posts: [], total: 0 };
  }
};

const pageSize = 5;

export default async function BlogPage({ params }: { params: { page: string } }) {
  const currentPage = parseInt(params.page) || 1;
  const { posts, total } = await fetchBlogPosts(currentPage);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <section>
      <BlurFade delay={0.04}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Blog
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Through my blog, I aim to share my experiences, lessons learned, and the exciting journey in the tech world. Writing helps me articulate my thoughts and connect with others who share similar passions. Join me as I explore topics ranging from coding and technology to personal growth and creativity.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="flex gap-6 border-b border-gray-200 dark:border-gray-700 pb-5 mt-12">
        {posts
          .sort((a: BlogPost, b: BlogPost) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
          .map((post: BlogPost, index: number) => (
            <BlurFade delay={0.04 * 2 + index * 0.05} key={post.slug.current}>
              <Link href={`/blog/${post.slug.current}`} >
                <div className="w-full flex flex-col">
                  <h2 className="text-3xl font-bold tracking-tight mb-4 title">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.body ? `${portableTextToPlainText(post.body).slice(0, 150)}...` : ""}
                  </p>
                  <p className="h-6 text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString()}
                    <span className="mx-2 text-muted-foreground">•</span>
                    {post.readTime} min read
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2">
        {currentPage > 1 && (
          <Link href={`/blog/${currentPage - 1}`} className="px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            Previous
          </Link>
        )}

        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            key={index + 1}
            href={`/blog/${index + 1}`}
            className={`px-4 py-2 border rounded-md ${currentPage === index + 1
              ? 'bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
              }`}
          >
            {index + 1}
          </Link>
        ))}

        {currentPage < totalPages && (
          <Link href={`/blog/${currentPage + 1}`} className="px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            Next
          </Link>
        )}
      </div>
    </section>
  );
}
