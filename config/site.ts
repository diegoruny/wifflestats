export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Haynie's Corner Wiffleball League",
  description:
    "The official page of the best little wiffleball league in the world. Located in Haynie's Corner Arts.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: 'Teams',
      href: '/teams'
    },
    {
      title: "Standings",
      href: "/standings"
    },
    {
      title: "Schedule",
      href: "/schedule"
    }
  ],
  links: {
    
    github: "https://github.com/diegoruny",
    facebook: "https://www.facebook.com/hayniescornerwiffleballleague/",
  },
}
