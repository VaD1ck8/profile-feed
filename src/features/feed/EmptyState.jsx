/**
 * Shown when no posts match the active filter.
 */
export default function EmptyState({ hidden }) {
  if (hidden) return null;
  return <p className="posts__empty">No posts match the selected dates.</p>;
}
