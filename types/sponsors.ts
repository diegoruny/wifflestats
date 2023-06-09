export type Sponsor = {
  name: string
  image: string
  link: string
}

export type SponsorCardProps = {
  sponsor: Sponsor
}

export type SponsorSectionProps = {
  sponsors: Sponsor[]
}
