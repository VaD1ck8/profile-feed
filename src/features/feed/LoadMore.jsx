/**
 * Pagination button. Hidden once everything is already visible.
 */
export default function LoadMore({ hidden, onClick }) {
  if (hidden) return null;
  return (
    <button type="button" className="load-more" onClick={onClick}>
      LOAD MORE
    </button>
  );
}
