export const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const CommentIcon = () => (
  <svg viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
    <path d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v4l5-4h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
  </svg>
);

export const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 2v2M17 2v2M3 8h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export function Metric({ icon, value }) {
  return (
    <span className="metric">
      {icon}
      {value}
    </span>
  );
}
