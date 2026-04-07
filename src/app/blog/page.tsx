import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import SearchablePosts from "@/components/blog/SearchablePosts";

export const metadata: Metadata = {
  title: "Blog",
  description: "모든 글 목록",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">Blog</h1>
      <SearchablePosts posts={posts} />
    </div>
  );
}
