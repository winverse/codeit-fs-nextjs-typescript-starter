'use client';

import { skipToken, useQuery } from '@tanstack/react-query';
import { getPost, getPosts } from '@/lib/api/posts';
import { queryKeys } from '@/lib/query-keys';

export function usePostsQuery(initialPosts?: any) {
  return useQuery<any, Error>({
    queryKey: queryKeys.list,
    queryFn: getPosts,
    initialData: initialPosts,
  });
}

export function usePostQuery(postId: any) {
  return useQuery<any, Error>({
    queryKey: queryKeys.detail(postId),
    queryFn: postId ? () => getPost(postId) : skipToken,
  });
}
