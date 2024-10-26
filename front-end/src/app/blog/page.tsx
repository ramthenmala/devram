"use client";

import { useState, useEffect } from "react";
import client from '../../../client';
import Link from 'next/link';
import { calculateReadingTime, portableTextToPlainText } from '@/lib/utils';
import BlurFade from "@/components/magicui/blur-fade";
import NoMorePosts from "@/components/NoMorePosts";
import { SearchIcon } from "lucide-react";
import Loader from "@/components/Loader";

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

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
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
  `;

  try {
    const posts = await client.fetch(query);
    return posts.map((post: any) => ({
      ...post,
      readTime: calculateReadingTime(portableTextToPlainText(post.body)),
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

// Debounce function
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const allPosts = await fetchBlogPosts();
      setPosts(allPosts);
      setFilteredPosts(allPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  useEffect(() => {
    const lowercasedFilter = debouncedSearchTerm.toLowerCase();
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(lowercasedFilter) ||
      portableTextToPlainText(post.body).toLowerCase().includes(lowercasedFilter)
    );
    setFilteredPosts(filtered);
  }, [debouncedSearchTerm, posts]);

  return (
    <section>
      <BlurFade delay={0.04}>
        <div className="flex flex-row gap-6 items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blog</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Through my blog, I aim to share my experiences, lessons learned, and the exciting journey in the tech world. Writing helps me articulate my thoughts and connect with others who share similar passions. Join me as I explore topics ranging from coding and technology to personal growth and creativity.
            </p>
          </div>
        </div>

        <div className="relative mt-4 w-full mb-8">
          <SearchIcon className="absolute left-2 top-2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          />
        </div>
      </BlurFade>

      <div className="flex flex-col gap-6 pb-5">
        {filteredPosts.map((post: BlogPost, index: number) => (
          <BlurFade delay={0.04 * 2 + index * 0.05} key={post.slug.current}>
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

      {loading && <Loader />}
      {!loading && filteredPosts.length === 0 && <NoMorePosts />}
    </section>
  );
}
