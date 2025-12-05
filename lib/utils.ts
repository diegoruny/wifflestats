import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges multiple class names and Tailwind CSS classes with conflict resolution
 *
 * This utility combines clsx for conditional class names and tailwind-merge
 * for resolving Tailwind class conflicts (e.g., "px-2 px-4" becomes "px-4").
 *
 * @param inputs - Class values to merge (strings, objects, arrays, conditionals)
 * @returns Merged class name string with conflicts resolved
 *
 * @example
 * cn("base-class", { active: true }, ["additional", "classes"])
 * // Returns: "base-class active additional classes"
 *
 * @example
 * cn("px-2 py-1", "px-4") // Tailwind conflict resolution
 * // Returns: "py-1 px-4" (px-4 overrides px-2)
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
