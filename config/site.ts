export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: "HCWL Stats",
	description:
		"The un-official page of the best little wiffleball league in the world. Located in Haynie's Corner Arts.",
	mainNav: [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "Teams",
			href: "/teams",
		},
		{
			title: "Players",
			href: "/players",
		},
		// {
		//   title: "Schedule",
		//   href: "/schedule",
		// },
	],
	links: {
		github: "https://github.com/diegoruny",
		facebook: "https://www.facebook.com/hayniescornerwiffleballleague/",
	},
}
