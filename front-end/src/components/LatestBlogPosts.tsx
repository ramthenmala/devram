import React from 'react';
import Link from 'next/link';
import client from '../../client';
import { calculateReadingTime, portableTextToPlainText } from '@/lib/utils';
import BlurFade from "@/components/magicui/blur-fade";
import { ArrowRightIcon } from '@radix-ui/react-icons';

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
    }[0...5] 
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
            <div className="flex flex-col gap-6 pb-5">
                {posts.map((post: BlogPost, index: number) => (
                    <BlurFade delay={0.04 * 13 + index * 0.05} key={post.slug.current}>
                        <Link href={`/blog/${post.slug.current}`}>
                            <div className="w-full flex flex-col pb-4 border-b border-gray-200 dark:border-gray-700">
                                <h2 className="text-xl font-bold tracking-tight title">{post.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {post.body ? `${portableTextToPlainText(post.body).slice(0, 150)}...` : ""}
                                </p>
                                <p className="h-6 text-muted-foreground text-sm">
                                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                    <span className="mx-2 text-muted-foreground">•</span>
                                    {post.readTime} min read
                                </p>
                            </div>
                        </Link>
                    </BlurFade>
                ))}
            </div>

            <div className="mt-4 text-center">
                <BlurFade delay={0.04 * 13}>
                    <Link href="/blog"
                        className="text-gray-500 hover:text-gray-700 transition-colors duration-300 flex items-center justify-center"
                    >
                        View All Posts
                        <ArrowRightIcon className="ml-2" />
                    </Link>
                </BlurFade>
            </div>
        </section>
    );
};

export default LatestBlogPosts;
