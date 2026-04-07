export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-3xl mx-auto px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} vibe.taeyeong ·{" "}
        <a
          href="https://github.com/taeyeong425/taeyeong-blog"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          GitHub
        </a>
        {" · "}
        <a
          href="https://www.linkedin.com/in/baektaeyeong/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
