import { SponsorSectionProps } from "@/types/sponsors"

import SponsorCard from "./sponsorCard"

const SponsorsSection: React.FC<SponsorSectionProps> = ({ sponsors }) => {
  return (
    <section className="mt-8 border-t p-8">
      <h2 className="scroll-m-20 text-center text-2xl font-semibold tracking-tight">
        Our Sponsors:
      </h2>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-4">
        {sponsors.map((sponsor) => (
          <li key={sponsor.name}>
            <SponsorCard sponsor={sponsor} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SponsorsSection
