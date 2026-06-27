import { startOfDay, endOfDay } from "date-fns";
import { parseISO } from "./date.js";

/**
 * Return posts whose date falls within [from, to] (inclusive).
 * Either bound may be null (open-ended). Pure: no mutation, no state.
 *
 * @param {Array} posts
 * @param {{ from: Date|null, to: Date|null }} range
 */
export function filterByDate(posts, { from, to }) {
  if (!from && !to) return posts;

  const fromTime = from ? startOfDay(from).getTime() : null;
  const toTime = to ? endOfDay(to).getTime() : null;

  return posts.filter((p) => {
    const t = parseISO(p.date).getTime();
    if (fromTime !== null && t < fromTime) return false;
    if (toTime !== null && t > toTime) return false;
    return true;
  });
}
