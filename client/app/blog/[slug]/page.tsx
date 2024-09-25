import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import client from '@/client';
import PageLayout from '@/app/(site)/pagelayout';
import { calculateReadingTime, portableTextToPlainText } from '../../lib/Utils';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SEOHead from '@/components/SEOHead'; 

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
    "nextPost": *[_type == "post" && publishedAt > ^.publishedAt][0]{
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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post: PostProps = await fetchPost(params.slug);

  return {
    title: post.title,
    description: `Read ${post.title} by ${post.author.name}. Published on ${new Date(post.publishedAt).toLocaleDateString()}`,
    openGraph: {
      title: post.title,
      description: `Read ${post.title} by ${post.author.name}.`,
      url: `https://devram.vercel.app/blog/${params.slug}`,
      images: [
        {
          url: post.mainImage?.asset.url || '/default-image.jpg',
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: `Read ${post.title} by ${post.author.name}.`,
      images: [post.mainImage?.asset.url || '/default-image.jpg'],
    },
  };
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post: PostProps = await fetchPost(slug);

  const readTime = calculateReadingTime(portableTextToPlainText(post.body));

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };

  const CodeBlock = ({ code, language }: { code: string; language: string }) => (
    <SyntaxHighlighter language={language} style={solarizedDark} className="my-4 bg-gray-800 text-white rounded-md">
      {code}
    </SyntaxHighlighter>
  );

  return (
    <PageLayout>
      <SEOHead
        title={post.title}
        description={`Read ${post.title} by ${post.author.name}. Published on ${new Date(post.publishedAt).toLocaleDateString()}`}
        url={`https://yourwebsite.com/blog/${slug}`}
        image={post.mainImage?.asset.url || '/default-image.jpg'}
      />

      <section className="mx-auto max-w-4xl px-4 pb-10">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title }
          ]}
        />

        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{post.title}</h1>

        <div className="flex items-center justify-between mb-8">
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
                {formatDate(post.publishedAt)} - {readTime} min read
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href="mailto:devramthenmala@gmail.com"
              className="btn btn-primary"
            >
              <span>Message</span>
            </a>
          </div>
        </div>

        {post.mainImage && (
          <Image
            src={post.mainImage.asset.url}
            alt="Main Image"
            width={1200}
            height={600}
            className="w-full mb-4 rounded-md dark:bg-gray-800"
            placeholder="blur"
            blurDataURL="/placeholder-image.jpg"
          />
        )}

        <div className="prose prose-gray dark:prose-dark">
          <PortableText
            value={post.body}
            components={{
              block: {
                h1: ({ children }: any) => <h1 className="text-2xl font-bold mb-2">{children}</h1>,
                h2: ({ children }: any) => <h2 className="text-xl font-bold mb-2">{children}</h2>,
                h3: ({ children }: any) => <h3 className="text-lg font-bold mb-2">{children}</h3>,
                normal: ({ children }: any) => <p className="mb-4">{children}</p>,
                blockquote: ({ children }: any) => <blockquote className="border-l-4 border-gray-500 pl-4 italic mb-4">{children}</blockquote>,
              },
              marks: {
                code: ({ children }: any) => <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">{children}</code>,
              },
              list: {
                bullet: ({ children }: any) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
                number: ({ children }: any) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
              },
              types: {
                myCodeField: ({ value }: any) => {
                  const { code, language } = value;
                  return <CodeBlock code={code} language={language} />;
                },
                image: ({ value }: any) => {
                  if (value?.asset?._ref) {
                    const imageUrl = `https://cdn.sanity.io/images/41ix8b1y/production/${value.asset._ref.split('-')[1]}`;
                    return (
                      <Image
                        src={imageUrl}
                        alt="Image"
                        width={1200}
                        height={600}
                        className="w-full mb-4 rounded-md dark:bg-gray-800"
                      />
                    );
                  }
                  return null;
                },
              },
            }}
          />
        </div>

        <div className="flex justify-between mt-10">
          {post.previousPost && (
            <a
              href={`/blog/${post.previousPost.slug.current}`}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-400 transition-colors duration-200 ease-in-out"
            >
              <ArrowLongLeftIcon className="h-5 w-5" />
              <span>Previous: {post.previousPost.title}</span>
            </a>
          )}
          {post.nextPost && (
            <a
              href={`/blog/${post.nextPost.slug.current}`}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-400 transition-colors duration-200 ease-in-out"
            >
              <span>Next: {post.nextPost.title}</span>
              <ArrowLongRightIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Post;
