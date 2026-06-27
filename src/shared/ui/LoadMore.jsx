export default function LoadMore({ hidden, onClick }) {
  if (hidden) return null;
  return (
    <button type="button" className="load-more" onClick={onClick}>
      LOAD MORE
    </button>
  );
}
