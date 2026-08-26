'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost, deletePost, updatePost } from '@/lib/api/posts';
import { queryKeys } from '@/lib/query-keys';

export function useCreatePostMutation() {
  const queryClient = useQueryClient();

  return useMutation<any, Error, any>({
    mutationFn: createPost,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.posts });
      await queryClient.invalidateQueries({
        queryKey: queryKeys.infinitePosts,
      });
    },
  });
}

interface UpdatePostVariables {
  postId: any;
  input: any;
}

export function useUpdatePostMutation() {
  const queryClient = useQueryClient();

  return useMutation<any, Error, UpdatePostVariables>({
    mutationFn: ({ postId, input }) => updatePost(postId, input),
    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.posts });
      await queryClient.invalidateQueries({
        queryKey: queryKeys.post(variables.postId),
      });
      await queryClient.invalidateQueries({
        queryKey: queryKeys.infinitePosts,
      });
    },
  });
}

export function useDeletePostMutation() {
  const queryClient = useQueryClient();

  return useMutation<any, Error, any>({
    mutationFn: deletePost,
    onSuccess: async (_, deletedPostId) => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.posts });
      queryClient.removeQueries({ queryKey: queryKeys.post(deletedPostId) });
      await queryClient.invalidateQueries({
        queryKey: queryKeys.infinitePosts,
      });
    },
  });
}
