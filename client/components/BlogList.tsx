"use client";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Carousel } from "./Carousel";
import client from "@/client";

interface BlogPost {
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage: { asset: { url: string } };
    body: any;
    author: {
        name: string;
        avatar?: {
            asset: {
                url: string;
            };
        };
    };
}

const query = `
*[_type == "post"] | order(publishedAt desc) [0...10] {
  title,
  slug,
  publishedAt,
  mainImage {
    asset->{
      url
    }
  },
  body,
  author->{
    name,
    avatar {
      asset->{
        url
      }
    }
  }
}`;

export function BlogList() {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const result = await client.fetch<BlogPost[]>(query);
                setPosts(result);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
            }
        }

        fetchPosts();
    }, []);

    const cards = posts.map((post, index) => (
        <Card
            key={post.slug.current}
            card={{
                category: "Blog Post",
                title: post.title,
                src: post.mainImage.asset.url,
                content: (
                    <p>{post.body[0]?.children?.[0]?.text || "Blog content"}</p>
                ),
                author: {
                    name: post.author.name,
                    avatarSrc: post.author.avatar?.asset?.url || "/default-avatar.png",
                },
                readTime: 5,
                url: `/blog/${post.slug.current}`,
            }}
            index={index}
            layout={true}
        />
    ));

    return (
        <div className="w-full h-full pb-12">
            <Carousel items={cards} />
        </div>
    );
}
