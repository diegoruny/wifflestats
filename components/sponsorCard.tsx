import React from "react"
import Image from "next/image"
import { SponsorCardProps } from "types/sponsors"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { AspectRatio } from "./ui/aspect-ratio"

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor }) => {
	return (
		<a href={sponsor.link}>
			<Card className="hover:bg-accent hover:text-accent-foreground flex h-[250px] w-56 flex-col justify-around">
				<CardHeader className="items-center p-3">
					<div className="w-[200px]">
						<AspectRatio ratio={4 / 3}>
							<Image
								src={`/images/${sponsor.image}`}
								alt={`${sponsor.name} Logo`}
								fill
							/>
						</AspectRatio>
					</div>
				</CardHeader>
				<CardContent className="p-4 text-center text-base">
					<CardTitle className="text-muted-foreground">
						{sponsor.name}
					</CardTitle>
				</CardContent>
			</Card>
		</a>
	)
}

export default SponsorCard
