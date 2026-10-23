"use client";

import { Button } from "@/components/Button";
import { Panel } from "@/components/Panel";
import { PostCard } from "@/features/posts/components/PostCard";
import type { Post, PostPage } from "@/features/posts/types";
import { useInfinitePostsQuery } from "@/features/posts/hooks/useInfinitePostsQuery";
import * as styles from "./InfinitePostsPage.css";

export default function InfinitePostsPage() {
  const infinitePostsQuery = useInfinitePostsQuery();

  const infinitePosts =
    infinitePostsQuery.data?.pages.flatMap((page: PostPage) => page.items) ??
    [];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Panel
          title="useInfiniteQuery: 더 보기 목록"
          description="pages 구조와 nextPage 계산 타입을 정리합니다."
        >
          <div className={styles.infiniteList}>
            {infinitePosts.map((post: Post) => (
              <PostCard key={`infinite-${post.id}`} post={post} />
            ))}
          </div>
          {infinitePostsQuery.error ? (
            <p className={styles.status}>{infinitePostsQuery.error.message}</p>
          ) : null}
          {infinitePostsQuery.hasNextPage ? (
            <Button
              type="button"
              onClick={() => infinitePostsQuery.fetchNextPage()}
              disabled={infinitePostsQuery.isFetchingNextPage}
            >
              {infinitePostsQuery.isFetchingNextPage
                ? "추가 로딩 중"
                : "더 보기"}
            </Button>
          ) : (
            <p>더 이상 불러올 포스트가 없습니다.</p>
          )}
        </Panel>
      </div>
    </main>
  );
}
