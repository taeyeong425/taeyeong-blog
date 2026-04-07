import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import readingTime from "reading-time";
import type { Post, PostMeta } from "@/types/post";

const POSTS_DIR = path.join(process.cwd(), "posts");

function getPostFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
}

export function getAllPostsMeta(): PostMeta[] {
  return getPostFiles()
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(POSTS_DIR, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        published: data.published ?? true,
        coverImage: data.coverImage,
        readingTime: stats.text,
        plainText: content,
      } as PostMeta;
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    published: data.published ?? true,
    coverImage: data.coverImage,
    readingTime: stats.text,
    content: processed.toString(),
  };
}

export function getAllTags(): string[] {
  const posts = getAllPostsMeta();
  const tagSet = new Set(posts.flatMap((p) => p.tags));
  return Array.from(tagSet).sort();
}
