import { useFeed } from "@/hooks/useFeed.js";
import Profile from "@/features/profile/Profile.jsx";
import ViewToggle from "@/features/view/ViewToggle.jsx";
import DateRangeFilter from "@/features/filter/DateRangeFilter.jsx";
import PostGrid from "@/features/feed/PostGrid.jsx";
import EmptyState from "@/shared/ui/EmptyState.jsx";
import LoadMore from "@/shared/ui/LoadMore.jsx";
import IconLeft from "@/shared/icons/Vector1.svg?react";
import IconAvatar from "@/shared/icons/Group1.svg?react";
import IconBlob from "@/shared/icons/Vector2.svg?react";

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
