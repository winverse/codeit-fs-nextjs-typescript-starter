import { clsx } from 'clsx';
import { getAuthorLabel } from '@/domains/posts/utils/constants';
import * as styles from './PostCard.css';

interface PostCardProps {
  post: any;
  isSelected?: any;
  onSelect?: any;
}

export default function PostCard({
  post,
  isSelected = false,
  onSelect,
}: PostCardProps) {
  return (
    <button
      type="button"
      className={clsx(styles.card, isSelected && styles.selected)}
      onClick={() => onSelect?.(post)}
    >
      <span className={styles.title}>{post.title}</span>
      <span className={styles.content}>{post.content}</span>
      <span className={styles.meta}>{getAuthorLabel(post.authorId)}</span>
    </button>
  );
}
