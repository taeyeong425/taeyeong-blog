import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";

export default function HomePage() {
  const posts = getAllPostsMeta().slice(0, 5);

  return (
    <div>
      <section className="mb-16">
        <h1 className="text-3xl font-bold mb-3">vibe.taeyeong</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          바이브코딩으로 만든 것들을 기록합니다.
          AI와 함께 뭔가를 만들 때마다 그 과정과 배운 것들을 여기에 씁니다.
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">최근 글</h2>
          <Link
            href="/blog"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            전체 보기 →
          </Link>
        </div>
        {posts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 py-8">아직 작성된 글이 없습니다.</p>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </section>
    </div>
  );
}
