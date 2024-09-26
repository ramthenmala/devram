import React from 'react';
import client from '../../client'; // Adjust the path as necessary
import Link from 'next/link';
import { PortableTextBlock } from '@/types/portableText';
import { calculateReadingTime, portableTextToPlainText } from '@/lib/utils';
import BlurFade from "@/components/magicui/blur-fade";

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
    body: PortableTextBlock[];
    author?: {
        name: string;
        avatarSrc?: string;
    };
    readTime?: number;
}

// Fetching the last 5 blog posts
const fetchLatestBlogPosts = async (): Promise<BlogPost[]> => {
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
    }[0...5]  // Fetch the last 5 posts
  `;

    try {
        const posts = await client.fetch(query);
        return posts.map((post: any) => ({
            ...post,
            readTime: calculateReadingTime(portableTextToPlainText(post.body)),
        }));
    } catch (error) {
        console.error('Error fetching latest blog posts:', error);
        return [];
    }
};

const LatestBlogPosts: React.FC = async () => {
    const posts = await fetchLatestBlogPosts();

    return (
        <section>
            <div className="flex flex-col gap-6 border-b border-gray-200 dark:border-gray-700 pb-5">
                {posts.map((post: BlogPost, index: number) => (
                    <BlurFade delay={0.04 * 13 + index * 0.05} key={post.slug.current}>
                        <Link href={`/blog/${post.slug.current}`}>
                            <div className="w-full flex flex-col">
                                <h3 className="text-2xl font-bold tracking-tight mb-2">{post.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">
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

            <div className="mt-4">
                <BlurFade delay={0.04 * 13} >
                    <Link href="/blog" className="text-blue-500 hover:underline">
                        View All Posts
                    </Link>
                </BlurFade>
            </div>
        </section>
    );
};

export default LatestBlogPosts;
