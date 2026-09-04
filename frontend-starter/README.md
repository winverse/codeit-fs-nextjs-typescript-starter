# frontend-starter

이 저장소에 포함된 학생용 시작 프로젝트입니다.

## 목적

- `frontend-starter`: 학생이 교재를 따라가며 타입을 채워 넣는 시작본
- `backend`: 함께 실행하는 공용 API 서버

## 실행 순서

1. 백엔드 실행

```bash
cd ../backend
pnpm install --frozen-lockfile
pnpm dev
```

2. 스타터 프론트엔드 실행

```bash
cp .env.example .env.local
pnpm install --frozen-lockfile
pnpm dev
```

## 환경 변수

`.env.example`을 복사하면 로컬 백엔드 주소가 설정됩니다.

```bash
cp .env.example .env.local
```

## 라우트 구성

- `/`: 학생용 시작 인덱스
- `/posts`: 3장~5장 학습 구간
- `/posts/[postId]`: `useParams` 시작본
- `/context`: 6장 Context 학습 구간
- `/query`: 7장 TanStack Query 학습 구간

## 교재 적용 후 포맷 및 검증

백엔드를 실행한 상태에서 다음 명령을 순서대로 실행합니다.

```bash
pnpm format
pnpm exec next typegen
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

`pnpm format`은 프로젝트 파일을 Prettier 형식으로 수정합니다.
