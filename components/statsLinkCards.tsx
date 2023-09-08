import Link from "next/link"
import { PersonIcon } from "@radix-ui/react-icons"
import { BarChartHorizontal, Users } from "lucide-react"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card"

export const StatsLinkCards = () => {
	return (
		<section>
			<div className="flex flex-row justify-evenly ">
				<Link href={"/players"}>
					<Card className="hover:bg-accent hover:text-accent-foreground h-[100px] w-[90px] text-center md:w-32">
						<CardHeader className="items-center p-3">
							<PersonIcon className="h-[34px] w-[34px]" />
						</CardHeader>
						<CardContent className="p-3 pt-0">
							<CardTitle>Players</CardTitle>
							<CardDescription>Stats</CardDescription>
						</CardContent>
					</Card>
				</Link>
				<Link href={"/teams"}>
					<Card className="hover:bg-accent hover:text-accent-foreground h-[100px] w-[90px] text-center md:w-32">
						<CardHeader className="items-center p-3">
							<Users className="h-[34px] w-[34px]" />
						</CardHeader>
						<CardContent className="p-3 pt-0">
							<CardTitle>Teams</CardTitle>
							<CardDescription>Stats</CardDescription>
						</CardContent>
					</Card>
				</Link>
				{/* <Link href={"/standings"}>
					<Card className="h-[100px] w-[90px] text-center md:w-32">
						<CardHeader className="items-center p-3">
							<BarChartHorizontal className="h-[34px] w-[34px]" />
						</CardHeader>
						<CardContent className="p-3 pt-0">
							<CardTitle>All</CardTitle>
							<CardDescription>Stats</CardDescription>
						</CardContent>
					</Card>
				</Link> */}
			</div>
		</section>
	)
}
