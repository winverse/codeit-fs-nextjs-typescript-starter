import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { InfinitePostsPage } from "@/features/posts/components/InfinitePostsPage";
import { getPostPage } from "@/lib/api/posts";
import { queryKeys } from "@/lib/query-keys";

export default async function InfinitePostsRoutePage() {
  const queryClient = new QueryClient();

  await queryClient.infiniteQuery({
    queryKey: queryKeys.infinite,
    queryFn: ({ pageParam }) => getPostPage(pageParam),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <InfinitePostsPage />
    </HydrationBoundary>
  );
}
