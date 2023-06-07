import React from "react"
import Image from "next/image"
import { SponsorCardProps } from "types/sponsors"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor }) => {
  return (
    <a href={sponsor.link}>
      <Card className="relative flex h-[200px] w-[300px] flex-col overflow-hidden">
        <CardContent className="relative h-[150px] w-full overflow-hidden">
          <Image
            src={`/images/${sponsor.image}`}
            alt={`${sponsor.name} Logo`}
            className="h-full w-full object-contain p-6"
            fill={true}
          />
        </CardContent>
        <CardHeader className="relative flex h-[50px] w-full items-center justify-center">
          <CardTitle className="text-muted-foreground">
            {sponsor.name}
          </CardTitle>
        </CardHeader>
      </Card>
    </a>
  )
}

export default SponsorCard
