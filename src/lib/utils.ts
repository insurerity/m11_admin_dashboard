import { clsx, type ClassValue } from "clsx";
import { rankItem } from "@tanstack/match-sorter-utils";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const searchFilter = (
  // Typescript is causing problems here so temporarily using any
  row: any,
  columnId: string,
  value: any,
  addMeta: Function
) => {
  const omit = ["", undefined, null];

  if (omit.includes(value)) {
    return true;
  }

  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};
