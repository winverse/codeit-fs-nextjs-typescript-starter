export const queryKeys = {
  list: ["posts", "list"] as const,
  detail: (postId: string | null) => ["posts", "detail", postId] as const,
  infinite: ["posts", "infinite"] as const,
};
