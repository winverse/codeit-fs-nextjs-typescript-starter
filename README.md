# Next.js TypeScript starter

Next.js 프로젝트에 TypeScript 타입을 단계적으로 적용하는 학생용 시작 저장소입니다. 하나의 clone 안에서 백엔드와 프런트엔드를 함께 실행하고, 교재 순서대로 타입을 누적해 완성합니다.

## 처음 확인할 상태

- `backend`: 게시글 API를 제공하는 로컬 서버입니다.
- `frontend-starter`: `/posts`, `/posts/[postId]`, `/context`, `/query` 화면을 제공하는 Next.js 프로젝트입니다.
- 첫 실행 화면과 API 호출은 동작하지만, 학습 대상 타입 자리에는 의도적으로 `any`가 남아 있습니다.

공통 UI, 스타일, 로컬 API 서버와 화면 골격은 제공 코드입니다. 학생은 교재가 지정한 `src/domains/posts`와 `src/lib`의 타입·컴포넌트·Hook·요청 함수를 중심으로 수정합니다. 같은 clone에서 앞 단계의 변경을 유지한 채 다음 단계를 이어갑니다.

## 처음 실행하기

터미널 1에서 백엔드를 실행합니다.

```bash
cd backend
pnpm install --frozen-lockfile
pnpm dev
```

터미널 2에서 프런트엔드를 실행합니다.

```bash
cd frontend-starter
cp .env.example .env.local
pnpm install --frozen-lockfile
pnpm dev
```

브라우저에서 `http://localhost:3000`을 열고 과정 안내와 실습 라우트를 확인합니다. 백엔드는 `http://localhost:4000`에서 실행되어야 합니다.

## 포맷 및 검증

```bash
cd frontend-starter
pnpm format
pnpm exec next typegen
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

`pnpm format`은 프로젝트 파일을 Prettier 형식으로 수정합니다. `next typegen`은 `PageProps`처럼 라우트 구조에서 생성되는 전역 타입을 준비합니다. `pnpm build`는 정적 페이지 생성 중 API를 읽으므로 먼저 백엔드를 실행합니다.
