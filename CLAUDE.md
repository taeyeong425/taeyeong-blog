# taeyeong-blog

개인 기술 블로그. Next.js App Router + 마크다운 파일 기반 포스트 관리.

## 자주 쓰는 명령어

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 실행
```

## 기술 스택

| 분류 | 라이브러리 | 버전 |
|------|-----------|------|
| 프레임워크 | Next.js (App Router) | 16.x |
| 언어 | TypeScript (strict) | 5.x |
| 스타일 | Tailwind CSS v4 | 4.x |
| 마크다운 파싱 | gray-matter + remark + remark-gfm | - |
| 날짜 포맷 | date-fns (ko locale) | 4.x |
| 본문 스타일 | @tailwindcss/typography (`prose`) | 0.5.x |

## 프로젝트 구조

```
taeyeong-blog/
├── posts/                        # 마크다운 포스트 (파일명 = slug)
├── public/                       # 정적 에셋
└── src/
    ├── app/
    │   ├── layout.tsx             # 루트 레이아웃 (Header, Footer 포함)
    │   ├── page.tsx               # 홈 (최근 글 5개)
    │   ├── blog/
    │   │   ├── page.tsx           # 전체 글 목록
    │   │   └── [slug]/page.tsx    # 포스트 상세
    │   └── about/page.tsx
    ├── components/
    │   ├── layout/                # Header, Footer
    │   └── blog/                  # PostCard, PostBody
    ├── lib/
    │   └── posts.ts               # 마크다운 파싱 로직 (fs 기반, 서버 전용)
    └── types/
        └── post.ts                # Post, PostMeta 타입 정의
```

## 포스트 작성

`posts/` 디렉토리에 `.md` 파일을 추가한다. 파일명이 URL slug가 된다.

```markdown
---
title: "글 제목"
date: "2026-04-07"
description: "글 요약 (목록 카드와 meta description에 사용)"
tags: ["Next.js", "React"]
published: true        # false면 빌드에서 제외
coverImage: "/images/cover.png"  # 선택 사항
---

본문 내용 (GitHub Flavored Markdown 지원)
```

## 코딩 컨벤션

### 컴포넌트
- 기본은 Server Component. 브라우저 API·이벤트 핸들러가 필요할 때만 `"use client"` 선언
- 파일명과 컴포넌트명은 PascalCase (`PostCard.tsx`)
- props 타입은 파일 내부에 `interface XxxProps`로 선언

### 타입
- `any` 금지. 불가피하면 `unknown` 후 narrowing
- 외부에서 공유되는 타입은 `src/types/`에 정의
- 타입만 import할 경우 `import type` 사용

### 데이터 페칭
- `src/lib/posts.ts`의 함수만 사용 (직접 `fs` 호출 금지)
- 서버 전용 함수이므로 Client Component에서 직접 호출 불가

### 스타일
- Tailwind 유틸리티 클래스 우선
- 다크모드는 `dark:` prefix로 처리
- 포스트 본문은 `prose prose-gray dark:prose-invert` 클래스 조합 사용

### 경로 alias
- `@/` → `src/` (예: `import { getAllPostsMeta } from "@/lib/posts"`)

## 새 페이지·기능 추가 시 체크리스트

- [ ] `export const metadata` 또는 `generateMetadata` 추가
- [ ] 동적 라우트면 `generateStaticParams` 추가
- [ ] 새 공유 타입은 `src/types/post.ts`에 추가
- [ ] `npm run build`로 타입 오류·빌드 오류 확인
