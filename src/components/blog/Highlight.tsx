"use client";

interface HighlightProps {
  text: string;
  query: string;
}

export default function Highlight({ text, query }: HighlightProps) {
  if (!query.trim()) return <>{text}</>;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark
            key={i}
            className="bg-yellow-200 dark:bg-yellow-800 text-inherit rounded-sm px-0.5"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}
