"use client";

interface PostBodyProps {
  content: string;
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div
      className="prose prose-gray dark:prose-invert max-w-none
        prose-headings:font-semibold
        prose-a:text-blue-600 dark:prose-a:text-blue-400
        prose-code:before:content-none prose-code:after:content-none
        prose-code:bg-gray-100 dark:prose-code:bg-gray-800
        prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
