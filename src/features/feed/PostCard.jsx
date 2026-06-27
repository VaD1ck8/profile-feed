import { formatCardDate } from "../../lib/date.js";
import { HeartIcon, CommentIcon, Metric } from "../../shared/icons/index.jsx";

/**
 * A single post card. The grid and rows views have genuinely different
 * DOM (two columns vs a 3-column body), so each variant is its own layout.
 */
export default function PostCard({ post, variant }) {
  const date = formatCardDate(post.date);
  const upload = formatCardDate(post.uploadDate);

  const media = (
    <div className="card__media">
      <img loading="lazy" src={post.image} alt={post.title} />
    </div>
  );

  if (variant === "rows") {
    return (
      <article className="card">
        {media}
        <div className="card__body">
          <span className="card__label">{post.label}</span>
          <span className="card__date">{date}</span>
          <span className="card__title">{post.title}</span>
          <div className="card__metrics">
            <Metric icon={<HeartIcon />} value={post.likes} />
            <Metric icon={<CommentIcon />} value={post.comments} />
          </div>
          <div className="card__metrics">
            <Metric icon={<HeartIcon />} value={post.likesAlt} />
            <Metric icon={<CommentIcon />} value={post.commentsAlt} />
          </div>
          <span className="card__upload">{upload}</span>
        </div>
      </article>
    );
  }

  // grid
  return (
    <article className="card">
      {media}
      <div className="card__body">
        <span className="card__label">{post.label}</span>
        <span className="card__date">{date}</span>
        <div className="card__metrics">
          <Metric icon={<HeartIcon />} value={post.likes} />
          <Metric icon={<CommentIcon />} value={post.comments} />
        </div>
        <div className="card__metrics">
          <Metric icon={<HeartIcon />} value={post.likesAlt} />
          <Metric icon={<CommentIcon />} value={post.commentsAlt} />
        </div>
        <span className="card__title">{post.title}</span>
        <span className="card__upload">{upload}</span>
      </div>
    </article>
  );
}
