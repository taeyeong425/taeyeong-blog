export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
  coverImage?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingTime: string;
  plainText: string;
}
