import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          vibe.taeyeong
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
