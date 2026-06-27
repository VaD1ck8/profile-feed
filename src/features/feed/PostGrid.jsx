import PostCard from "./PostCard.jsx";

/**
 * Container that renders the current slice of posts in the active view.
 * Presentation only — it receives data + view and writes markup.
 */
export default function PostGrid({ posts, view }) {
  const cls = view === "rows" ? "posts posts--rows" : "posts posts--grid";
  return (
    <div id="posts" className={cls}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} variant={view} />
      ))}
    </div>
  );
}
