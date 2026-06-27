import { useEffect, useMemo, useState } from "react";
import { POSTS } from "@/data/mockPosts.js";
import { filterByDate } from "@/lib/filterByDate.js";

const PAGE_SIZE = 8;
const STORAGE_KEY = "feed-view";
const WIDE = 1200;

function isWide() {
  return window.innerWidth >= WIDE;
}

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "grid";
  } catch {
    return "grid";
  }
}

export function useFeed() {
  const [view, setViewState] = useState(() =>
    isWide() ? readStored() : "grid"
  );
  const [range, setRangeState] = useState({ from: null, to: null });
  const [visible, setVisible] = useState(PAGE_SIZE);

  const setView = (next) => {
    setViewState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
  };

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${WIDE}px)`);
    const handler = (e) => setViewState(e.matches ? readStored() : "grid");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const filtered = useMemo(() => filterByDate(POSTS, range), [range]);
  const slice = useMemo(() => filtered.slice(0, visible), [filtered, visible]);

  const setRange = (next) => {
    setRangeState(next);
    setVisible(PAGE_SIZE);
  };

  const loadMore = () => setVisible((v) => v + PAGE_SIZE);

  return {
    view,
    setView,
    range,
    setRange,
    slice,
    loadMore,
    hasMore: visible < filtered.length,
    isEmpty: filtered.length === 0,
  };
}
