import { useState } from "react";
import DateField from "./DateField.jsx";

/**
 * Two linked from/to fields. Holds the local range and reports it upward.
 * Linking: `from` can't be after `to` (maxDate), `to` can't be before
 * `from` (minDate) — the same constraint the prototype enforced.
 */
export default function DateRangeFilter({ onRangeChange }) {
  const [range, setRange] = useState({ from: null, to: null });

  const update = (patch) => {
    const next = { ...range, ...patch };
    setRange(next);
    onRangeChange(next);
  };

  return (
    <div className="date-filter">
      <span className="date-filter__label">Date</span>

      <DateField
        role="from"
        label="from"
        value={range.from}
        maxDate={range.to ?? undefined}
        onChange={(d) => update({ from: d })}
      />

      <DateField
        role="to"
        label="to"
        value={range.to}
        minDate={range.from ?? undefined}
        onChange={(d) => update({ to: d })}
      />
    </div>
  );
}
