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
          <a href="https://github.com/taeyeong425/taeyeong-blog" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/baektaeyeong/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>

      <h2>Memo</h2>
      <p>언젠가 만들어보고 싶은 것들. 아이디어가 생길 때마다 여기에 쌓아둔다.</p>
      <ul>
        <li>
          <strong>국내 프로야구 프로젝트</strong> — KBO 데이터 기반으로 뭔가 만들어보고 싶다. 선수 성적 시각화나 경기 결과 트래킹 같은 것.
        </li>
        <li>
          <strong>해외 축구 프로젝트</strong> — 좋아하는 리그 데이터를 가져와서 순위표나 팀 통계를 보여주는 앱.
        </li>
        <li>
          <strong>공공 데이터 활용 프로젝트</strong> — 공공 API로 실생활에 쓸 만한 걸 만들어보고 싶다. 교통, 날씨, 지역 정보 같은 것들.
        </li>
      </ul>
    </div>
  );
}
