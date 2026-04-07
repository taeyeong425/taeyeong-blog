import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "vibe.taeyeong 소개",
};

export default function AboutPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none">
      <h1>About</h1>
      <p>안녕하세요, 백태영입니다.</p>
      <p>
        이 블로그는 바이브코딩으로 만든 것들을 기록하는 공간입니다.
        AI와 함께 뭔가를 만들 때마다 — 어떻게 만들었는지, 뭘 배웠는지, 어디서 막혔는지 —
        그 과정을 그대로 씁니다.
      </p>
      <p>
        완성도보다는 솔직한 기록을 목표로 합니다.
        바이브코딩을 배워가는 사람이 남기는 현장 노트 같은 블로그입니다.
      </p>
      <h2>Links</h2>
      <ul>
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
