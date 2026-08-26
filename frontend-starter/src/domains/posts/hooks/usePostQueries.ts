'use client';

import { useQuery } from '@tanstack/react-query';
import { getPost, getPosts } from '@/lib/api/posts';
import { queryKeys } from '@/lib/query-keys';

export function usePostsQuery(initialPosts?: any) {
  return useQuery<any, Error>({
    queryKey: queryKeys.posts,
    queryFn: getPosts,
    initialData: initialPosts,
  });
}

export function usePostQuery(postId: any) {
  return useQuery<any, Error>({
    queryKey: queryKeys.post(postId ?? 'empty'),
    queryFn: () => getPost(postId ?? ''),
    enabled: Boolean(postId),
  });
}
