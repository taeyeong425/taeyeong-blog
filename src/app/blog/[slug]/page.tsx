import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { getAllPostsMeta, getPostBySlug } from "@/lib/posts";
import PostBody from "@/components/blog/PostBody";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-3">
          <time dateTime={post.date}>
            {post.date
              ? format(new Date(post.date), "yyyy년 M월 d일", { locale: ko })
              : ""}
          </time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="text-3xl font-bold leading-tight mb-4">{post.title}</h1>
        {post.description && (
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            {post.description}
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <PostBody content={post.content} />
    </article>
  );
}
