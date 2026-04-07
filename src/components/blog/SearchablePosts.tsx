"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import type { PostMeta } from "@/types/post";
import Highlight from "@/components/blog/Highlight";

interface SearchablePostsProps {
  posts: PostMeta[];
}

export default function SearchablePosts({ posts }: SearchablePostsProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.plainText.toLowerCase().includes(q)
    );
  }, [query, posts]);

  return (
    <div>
      <div className="relative mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="제목 또는 내용으로 검색..."
          className="w-full px-4 py-2.5 pl-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
            aria-label="검색어 지우기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {query.trim() && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="font-medium text-gray-700 dark:text-gray-300">&quot;{query}&quot;</span> 검색 결과 {filtered.length}건
        </p>
      )}

      {filtered.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 py-12 text-center text-sm">
          검색 결과가 없습니다.
        </p>
      ) : (
        filtered.map((post) => (
          <SearchPostCard key={post.slug} post={post} query={query.trim()} />
        ))
      )}
    </div>
  );
}

interface SearchPostCardProps {
  post: PostMeta;
  query: string;
}

function SearchPostCard({ post, query }: SearchPostCardProps) {
  const excerpt = useMemo(() => {
    if (!query) return post.description;
    const q = query.toLowerCase();
    const idx = post.plainText.toLowerCase().indexOf(q);
    if (idx === -1) return post.description;
    const start = Math.max(0, idx - 40);
    const end = Math.min(post.plainText.length, idx + query.length + 80);
    const raw = post.plainText.slice(start, end).replace(/[#*`>\-]/g, "").trim();
    return (start > 0 ? "..." : "") + raw + (end < post.plainText.length ? "..." : "");
  }, [post, query]);

  return (
    <article className="group py-8 border-b border-gray-100 dark:border-gray-800 last:border-0">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-2">
          <time dateTime={post.date}>
            {post.date
              ? format(new Date(post.date), "yyyy년 M월 d일", { locale: ko })
              : ""}
          </time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <Highlight text={post.title} query={query} />
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
          <Highlight text={excerpt} query={query} />
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
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
      </Link>
    </article>
  );
}
