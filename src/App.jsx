import { useFeed } from "./hooks/useFeed.js";
import Profile from "./features/profile/Profile.jsx";
import ViewToggle from "./features/view/ViewToggle.jsx";
import DateRangeFilter from "./features/filter/DateRangeFilter.jsx";
import PostGrid from "./features/feed/PostGrid.jsx";
import EmptyState from "./features/feed/EmptyState.jsx";
import LoadMore from "./features/feed/LoadMore.jsx";
import IconLeft from "./shared/icons/Vector 1.svg?react";
import IconAvatar from "./shared/icons/Group 1.svg?react";
import IconBlob from "./shared/icons/Vector 2.svg?react";
/**
 * Composition root. Owns no state itself — useFeed is the single source
 * of truth; App just wires data down and callbacks up.
 */
export default function App() {
  const { view, setView, setRange, slice, loadMore, hasMore, isEmpty } =
    useFeed();

  return (
    <>
      <div className="page-wrapper">
        <div className="site-header__deco-left" aria-hidden="true">
          <IconLeft />
        </div>

        <header className="site-header">
          <div className="site-header__bg" aria-hidden="true" />

          <div className="site-header__inner">
            <IconAvatar />
            <div className="site-header__profile-col">
              <Profile />
              <DateRangeFilter onRangeChange={setRange} />
            </div>
          </div>
        </header>

        <main className="content">

        <div className="content__toolbar">
          <ViewToggle view={view} onChange={setView} />
        </div>

        <PostGrid posts={slice} view={view} />
        <EmptyState hidden={!isEmpty} />

        <div className="content__footer">
          <LoadMore hidden={!hasMore} onClick={loadMore} />
        </div>
        </main>
      </div>

      <div className="page-blob" aria-hidden="true"><IconBlob /></div>
    </>
  );
}
