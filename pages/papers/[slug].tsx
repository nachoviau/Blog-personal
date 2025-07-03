import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

interface PaperPageProps {
  post: Post;
}

export default function PaperPage({ post }: PaperPageProps) {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto">
        {/* Back to papers */}
        <Link 
          href="/papers"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a Papers
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-gray-400 text-lg">
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="text-gray-300 leading-relaxed">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-4xl font-bold text-white mt-12 mb-8">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-semibold text-white mt-10 mb-6">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-semibold text-white mt-8 mb-4">{children}</h3>,
                p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                code: ({ children }) => <code className="bg-gray-700 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="text-gray-300">{children}</li>,
                blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 mb-4">{children}</blockquote>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <Link 
              href="/papers"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              ← Ver todos los papers
            </Link>
            <div className="text-gray-400 text-sm">
              Compartido el {new Date(post.date).toLocaleDateString('es-ES')}
            </div>
          </div>
        </footer>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  try {
    const filenames = fs.readdirSync(postsDirectory);
    
    const paths = filenames
      .filter((filename) => filename.endsWith('.md'))
      .map((filename) => ({
        params: {
          slug: filename.replace(/\.md$/, ''),
        },
      }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Error reading posts for paths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps<PaperPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Use the raw markdown content for ReactMarkdown

    const post: Post = {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      content: content,
    };

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error reading post:', error);
    return {
      notFound: true,
    };
  }
}; 