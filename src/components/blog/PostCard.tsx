import Link from "next/link";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import type { PostMeta } from "@/types/post";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
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
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
          {post.description}
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
