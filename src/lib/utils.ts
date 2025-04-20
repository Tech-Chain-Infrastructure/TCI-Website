// utils.ts

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names conditionally and merges Tailwind classes intelligently.
 * 
 * @param inputs - Any number of class values (strings, arrays, conditionals, etc.)
 * @returns A single merged string of class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
