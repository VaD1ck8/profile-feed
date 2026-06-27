import { format, parseISO as parseISOfns } from "date-fns";

/** Parse an ISO date string ("YYYY-MM-DD") into a local Date. */
export const parseISO = parseISOfns;

/** "2016-08-09" -> "9-08-2016" (card style). */
export function formatCardDate(iso) {
  return format(parseISOfns(iso), "d-MM-yyyy");
}

/** Date -> "09_08_2016" (date-field style). */
export function formatFieldDate(date) {
  return format(date, "dd_MM_yyyy");
}
