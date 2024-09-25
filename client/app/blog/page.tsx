"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import client from '@/client';
import { PortableTextBlock } from '@/types/portableText';
import PageLayout from "@/app/(site)/pagelayout";
import { calculateReadingTime, portableTextToPlainText } from "../lib/Utils";
import Image from 'next/image';
import Link from 'next/link';
import SEOHead from "@/components/SEOHead";

interface BlogPost {
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  body: PortableTextBlock[];
  author?: {
    name: string;
    avatarSrc: string;
  };
  readTime?: number;
}

const pageSize = 5;

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
    }
    [${(page - 1) * pageSize}...${page * pageSize}]
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

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const loadPosts = async () => {
      const { posts, total } = await fetchBlogPosts(currentPage);
      setPosts(posts);
      setTotal(total);
    };

    loadPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <PageLayout>
      <SEOHead
        title="Blog | Ram's Portfolio"
        description="Explore my blog where I share insights and tutorials on JavaScript, web development, and tech trends."
        url="https://devram.vercel.app/blog"
        image="https://devram.vercel.app/default-avatar.jpg"
      />
      <Hero
        title="Blog"
        description="I'm a seasoned developer with over 12 years of experience working within the dynamic JavaScript ecosystem. My expertise spans a range of cutting-edge technologies, including TypeScript, React, Next.js, Node.js, Docker, Kubernetes, and cloud platforms like GCP."
      />

      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="space-y-8">
          {posts.map((post) => (
            <motion.div
              key={post.slug.current}
              className="flex gap-6 border-b border-gray-200 dark:border-gray-700 pb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hidden md:block flex-shrink-0 w-1/3">
                <Image
                  src={post.mainImage?.asset?.url || ""}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug.current}`} className="text-gray-900 dark:text-white hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.body ? `${portableTextToPlainText(post.body).slice(0, 150)}...` : ""}
                </p>
                <div className="flex items-center space-x-4">
                  {post.author?.avatarSrc && (
                    <Image
                      src={post.author.avatarSrc}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  <div>
                    <p className="text-gray-800 dark:text-gray-100 font-semibold">
                      {post.author?.name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {post.readTime !== undefined && <span>{post.readTime} min read</span>}
                      {post.publishedAt && (
                        <span className="ml-4">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              Previous
            </button>
          )}

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 border rounded-md ${currentPage === index + 1
                ? 'bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                }`}
            >
              {index + 1}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              Next
            </button>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;
