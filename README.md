# taeyeong-blog

바이브코딩으로 만든 것들을 기록하는 개인 기술 블로그.
AI와 함께 만든 프로젝트들의 과정, 배운 것들, 막혔던 것들을 그대로 씁니다.

🔗 **[https://taeyeong-blog.vercel.app](https://taeyeong-blog.vercel.app)**

---

## 기술 스택

| 분류 | 라이브러리 |
|------|-----------|
| 프레임워크 | Next.js 16 (App Router) |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS v4 |
| 마크다운 | gray-matter + remark |
| 배포 | Vercel |

## 로컬 실행

```bash
npm install
npm run dev
```

`http://localhost:3000` 에서 확인.

## 포스트 작성

`posts/` 폴더에 `.md` 파일을 추가하면 자동으로 블로그에 반영됩니다.
파일명이 URL slug가 됩니다.

```markdown
---
title: "글 제목"
date: "2026-04-07"
description: "글 요약"
tags: ["태그"]
published: true
---

본문 내용
```

---

---

# taeyeong-blog (English)

A personal tech blog documenting things built with vibe coding.
Writing about the process, lessons learned, and roadblocks encountered while building with AI.

🔗 **[https://taeyeong-blog.vercel.app](https://taeyeong-blog.vercel.app)**

---

## Tech Stack

| Category | Library |
|----------|---------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Markdown | gray-matter + remark |
| Deploy | Vercel |

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Writing Posts

Add a `.md` file to the `posts/` folder and it will automatically appear on the blog.
The filename becomes the URL slug.

```markdown
---
title: "Post Title"
date: "2026-04-07"
description: "Post summary"
tags: ["tag"]
published: true
---

Post content
```
