import type { Sponsor } from "@/types/sponsors"

/**
 * List of league sponsors with their branding information
 *
 * Each sponsor includes:
 * - name: Company/organization name
 * - link: Official website URL
 * - image: Filename of logo in /public/images/
 *
 * @remarks
 * Logos should be SVG or high-resolution PNG/WebP for best display quality.
 * Image files must exist in the /public/images/ directory.
 */
export const sponsors: Sponsor[] = [
	{
		name: "Haynies Corner Arts District",
		link: "https://hayniescorner.com",
		image: "haycorart_logo.svg",
	},
	{
		name: "Craddock Finishing",
		link: "https://www.craddockfinishing.com/",
		image: "Craddock-Horizontal-Logo-black.svg",
	},
]
