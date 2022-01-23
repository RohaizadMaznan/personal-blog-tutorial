import { parseISO, format } from "date-fns";

export default function getFormattedDate(date) {
  const parsedDate = parseISO(date);
  const newDate = format(parsedDate, "MMMM dd, yyy");
  return newDate;
}
