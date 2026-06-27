import GridIcon from "../../shared/icons/Group23.svg?react";
import ListIcon from "../../shared/icons/Group 13.svg?react";

/**
 * Grid <-> rows switch. Controlled: parent owns `view`, this reports changes.
 */
export default function ViewToggle({ view, onChange }) {
  return (
    <div className="view-toggle">
      <button
        type="button"
        className={`view-toggle__btn ${view === "grid" ? "is-active" : ""}`}
        aria-pressed={view === "grid"}
        aria-label="Grid view"
        onClick={() => onChange("grid")}
      >
        <GridIcon />
      </button>
      <button
        type="button"
        className={`view-toggle__btn ${view === "rows" ? "is-active" : ""}`}
        aria-pressed={view === "rows"}
        aria-label="Rows view"
        onClick={() => onChange("rows")}
      >
        <ListIcon />
      </button>
    </div>
  );
}
