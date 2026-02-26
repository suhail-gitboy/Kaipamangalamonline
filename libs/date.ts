import { format } from "date-fns";

export const functionFormated = (from?: string | Date, to?: string | Date) => {
    if (!from || !to) return "";
    const fromDate = new Date(from);
    const toDate = new Date(to);

    // Format as "Feb 17 – Mar 23"
    return `${format(fromDate, "MMM dd")} – ${format(toDate, "MMM dd")}`;
};