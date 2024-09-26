import client from '../../../../client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Breadcrumbs from '@/components/Breadcrumbs';
import { calculateReadingTime, portableTextToPlainText } from '@/lib/utils';
import BlurFade from "@/components/magicui/blur-fade";
import ListenButton from '@/components/ListenButton';

interface Author {
  name: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

interface PostProps {
  title: string;
  body: any[];
  mainImage?: {
    asset: {
      url: string;
    };
  };
  author: Author;
  publishedAt: string;
  readTime?: number;
  nextPost?: {
    title: string;
    slug: {
      current: string;
    };
  };
  previousPost?: {
    title: string;
    slug: {
      current: string;
    };
  };
}

const fetchPost = async (slug: string) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    mainImage {
      asset -> {
        url
      }
    },
    publishedAt,
    author -> {
      name,
      image {
        asset -> {
          url
        }
      }
    },
    "nextPost": *[_type == "post" && publishedAt > ^.publishedAt]| order(publishedAt asc)[0]{
      title,
      slug {
        current
      }
    },
    "previousPost": *[_type == "post" && publishedAt < ^.publishedAt]| order(publishedAt desc)[0]{
      title,
      slug {
        current
      }
    }
  }`;

  const post = await client.fetch(query, { slug });
  return post;
};

const speakText = (text: string) => {
  const speech = window.speechSynthesis;
  const speechUtterance = new SpeechSynthesisUtterance(text);

  speechUtterance.rate = 1;
  speechUtterance.pitch = 1;

  speech.speak(speechUtterance);
};

export default async function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post: PostProps = await fetchPost(slug);

  if (!post) {
    // return notFound();
  }

  const readTime = calculateReadingTime(portableTextToPlainText(post.body));

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };

  const CodeBlock = ({ code, language }: { code: string; language: string }) => (
    <SyntaxHighlighter language={language} style={tomorrowNightBright} className="my-4 bg-gray-800 text-white rounded-md">
      {code}
    </SyntaxHighlighter>
  );

  return (
    <section id="blog" className="max-w-4xl mx-auto pb-10">
      <BlurFade delay={0.02}>
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title }
          ]}
        />
      </BlurFade>

      <BlurFade delay={0.04}>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{post.title}</h1>
      </BlurFade>

      <div className="flex items-center justify-between mb-8">
        <BlurFade delay={0.06}>
          <div className="flex items-center space-x-4">
            {post.author.image && (
              <Image
                src={post.author.image.asset.url}
                alt={post.author.name}
                width={50}
                height={50}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div>
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{post.author.name}</p>
              <p className="text-gray-500 dark:text-gray-400">
                {formatDate(post.publishedAt)}
                <span className="mx-2 text-muted-foreground">•</span>
                {readTime} min read
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="flex space-x-4">
          <BlurFade delay={0.06}>
            <a
              href="mailto:devramthenmala@gmail.com"
              className="py-2 rounded-full font-medium inline-flex items-center justify-center tracking-tight bg-black text-white px-6"
            >
              <span>Message</span>
            </a>
          </BlurFade>

          <BlurFade delay={0.06}>
            <ListenButton text={portableTextToPlainText(post.body)} />
          </BlurFade>
        </div>
      </div>

      {post.mainImage && (
        <BlurFade delay={0.08}>
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full mb-4 rounded-md dark:bg-gray-800"
            placeholder="blur"
            blurDataURL="/placeholder-image.jpg"
          />
        </BlurFade>
      )}

      <BlurFade delay={0.12}>
        <article className="prose dark:prose-invert">
          <PortableText
            value={post.body}
            components={{
              types: {
                myCodeField: ({ value }: any) => {
                  const { code, language } = value;
                  return <CodeBlock code={code} language={language} />;
                },
              },
            }}
          />
        </article>
      </BlurFade>

      <div className="flex justify-between mt-10">
        {post.previousPost && (
          <BlurFade delay={0.16}>
            <a
              href={`/blog/${post.previousPost.slug.current}`}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-400 transition-colors duration-200 ease-in-out"
            >
              <ArrowLongLeftIcon className="h-5 w-5" />
              <span>Previous: {post.previousPost.title}</span>
            </a>
          </BlurFade>
        )}
        {post.nextPost && (
          <BlurFade delay={0.16}>
            <a
              href={`/blog/${post.nextPost.slug.current}`}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-400 transition-colors duration-200 ease-in-out"
            >
              <span>Next: {post.nextPost.title}</span>
              <ArrowLongRightIcon className="h-5 w-5" />
            </a>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
