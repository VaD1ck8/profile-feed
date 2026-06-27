import { useRef, useState } from "react";
import Popover from "@mui/material/Popover";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { formatFieldDate } from "@/lib/date.js";
import { CalendarIcon } from "@/shared/icons/index.jsx";

export default function DateField({
  role,
  label,
  value,
  minDate,
  maxDate,
  onChange,
}) {
  const fieldRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`date-field ${value ? "has-value" : ""}`}
      data-role={role}
      ref={fieldRef}
    >
      <input
        className="date-field__input"
        type="text"
        readOnly
        placeholder={label}
        value={value ? formatFieldDate(value) : ""}
        onClick={() => setOpen(true)}
        aria-label={label}
      />

      {value && (
        <button
          type="button"
          className="date-field__btn date-field__btn--clear"
          aria-label={`Clear ${label} date`}
          onClick={() => onChange(null)}
        >
          ×
        </button>
      )}

      <button
        type="button"
        className="date-field__btn"
        aria-label={`Open ${label} calendar`}
        onClick={() => setOpen(true)}
      >
        <CalendarIcon />
      </button>

      <Popover
        open={open}
        anchorEl={fieldRef.current}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              borderRadius: "10px",
              border: "1px solid var(--color-border)",
              boxShadow: "var(--shadow-pop)",
            },
          },
        }}
      >
        <DateCalendar
          value={value}
          minDate={minDate}
          maxDate={maxDate}
          onChange={(d) => {
            onChange(d);
            setOpen(false);
          }}
        />
      </Popover>
    </div>
  );
}
