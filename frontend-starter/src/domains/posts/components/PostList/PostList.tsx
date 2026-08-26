import PostCard from '@/domains/posts/components/PostCard';
import type { Post } from '@/domains/posts/types';
import * as styles from './PostList.css';

interface PostListProps {
  posts: Post[];
  selectedPostId: string | null;
  onSelectPost: (postId: string) => void;
  emptyText?: string;
}

export default function PostList({
  posts,
  selectedPostId,
  onSelectPost,
  emptyText = '표시할 포스트가 없습니다.',
}: PostListProps) {
  if (posts.length === 0) {
    return <p className={styles.empty}>{emptyText}</p>;
  }

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          isSelected={post.id === selectedPostId}
          onSelect={() => onSelectPost(post.id)}
        />
      ))}
    </div>
  );
}
