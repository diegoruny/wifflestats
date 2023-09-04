import Image from "next/image"
import Link from "next/link"
import logoTournament from "public/logohcwiffleag.jpg"

import { sponsors } from "@/lib/sponsors"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Separator } from "@/components/ui/separator"
import SponsorsSection from "@/components/sponsorsSection"
import { StatsLinkCards } from "@/components/statsLinkCards"

interface DataItem {
	w: number
	l: number
}

interface Column {
	accessorKey: string
	header: string
}

interface APIResponse {
	data: DataItem[]
}

async function getData() {
	// Fetch data from your API here.
	const range = "Team Wins and Losses!A1:C13"
	const encodedRange = encodeURIComponent(range)
	const response: Response = await fetch(
		`http://localhost:3000/api/${encodedRange}`
	)

	const data = await response.json()

	// Assuming data is an array of objects
	const slicedData: DataItem = data.slice(0, 1)[0]

	const columns: Column[] = Object.keys(slicedData).map((key) => ({
		accessorKey: key.toLowerCase(),
		header: key.toUpperCase(),
	}))

	// Add a new column for win percentage
	columns.push({
		accessorKey: "%",
		header: "Win %",
	})

	const values = data.slice(1) // creo que aca esta el error de que no se muestra la tabla

	// Calculate win percentage for each row
	const updatedValues = values.map((value) => {
		const winPercentage = (value.w / (value.w + value.l)).toFixed(3)
		return {
			...value,
			"%": winPercentage,
		}
	})

	return { columns, values: updatedValues }
}

export default async function IndexPage() {
	const data = await getData()
	const [columns, values] = [data.columns, data.values]

	return (
		<>
			<section className="container grid h-screen items-center gap-6 text-center md:py-10">
				<div className="flex flex-col items-center gap-6">
					<div className=" w-[200px] ">
						<AspectRatio ratio={1 / 1}>
							<Image
								src={logoTournament}
								alt="Tournament Logo"
								className="rounded-full object-cover"
							/>
						</AspectRatio>
					</div>
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						Haynies Corner Wiffleball League <br className="hidden sm:inline" />
					</h1>
					<p className="text-muted-foreground max-w-[700px] text-lg">
						Check the standings for the the Wiffleball League.
					</p>
					<Link href={"#stats-section"}>
						<Button>Show me the stats!</Button>
					</Link>
				</div>
			</section>
			<Separator id="stats-section" />
			<section className="pt-20 sm:h-screen">
				<div className="flex flex-col gap-8">
					<h2 className="scroll-m-20 border-b text-center text-3xl font-semibold tracking-tight transition-colors">
						2022 Season
					</h2>
					<DataTable columns={columns} data={values} />
					<StatsLinkCards />
				</div>
			</section>

			<SponsorsSection sponsors={sponsors} />

			<div className="h-24 w-full"></div>
		</>
	)
}
