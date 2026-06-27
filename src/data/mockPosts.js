/**
 * data/posts.js — mock feed data.
 * In a real app this would come from an API; the shape is kept flat
 * and serialisable so the render/filter layers stay framework-agnostic.
 *
 * `date` is the canonical ISO date used for filtering.
 */

const SEEDS = [
  "mountain", "ocean", "spiral", "sunset", "alps", "noir",
  "city", "cabin", "forest", "dunes", "river", "bridge",
  "harbor", "field", "glass", "night",
];

// Spread the posts across 2016 so the date filter is meaningful.
const ISO_DATES = [
  "2016-12-09", "2016-11-21", "2016-10-03", "2016-09-08",
  "2016-08-30", "2016-08-09", "2016-07-17", "2016-06-25",
  "2016-05-14", "2016-04-11", "2016-03-28", "2016-03-02",
  "2016-02-19", "2016-02-17", "2016-01-22", "2016-01-05",
];

export const POSTS = SEEDS.map((seed, i) => ({
  id: i + 1,
  image: `https://picsum.photos/seed/${seed}/480/480`,
  label: i === 0 ? "Today" : "Post",
  date: ISO_DATES[i],
  likes: 128,
  comments: 31,
  likesAlt: 67,
  commentsAlt: 22,
  title: "Image upload",
  uploadDate: "2016-04-11",
}));
