import { NextResponse } from "next/server";
import { calculateReadingTime, portableTextToPlainText } from '@/lib/utils';
import client from "../../../client";

interface BlogPost {
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage?: { asset: { url: string } };
    body: any[];
    author?: { name: string; avatarSrc?: string };
    readTime?: number;
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const searchTerm = searchParams.get("searchTerm");

    if (!searchTerm) {
        return NextResponse.json({ message: "Search term is required" }, { status: 400 });
    }

    const query = `
    *[_type == "post" && 
      (title match "${searchTerm}*" || 
       body[].children[].text match "${searchTerm}*")
    ] | order(publishedAt desc) {
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
        const posts: BlogPost[] = await client.fetch(query);
        const formattedPosts = posts.map((post) => ({
            ...post,
            readTime: calculateReadingTime(portableTextToPlainText(post.body)),
        }));

        return NextResponse.json(formattedPosts);
    } catch (error) {
        console.error("Error fetching search results:", error);
        return NextResponse.json({ message: "Error fetching search results" }, { status: 500 });
    }
}
