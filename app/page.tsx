/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

// import dbMock from "../db.json"

interface DataItem {
	w: number
	l: number
}

interface Column {
	accessorKey: string
	header: string
}
// Acabo de canbiar el fetch url y toca deployear a vercel pero toca comprobar esta tomando la respuesta de la api
async function getData() {
	// Fetch data from your API here.
	const range = "Team Wins and Losses!A1:C13"
	const encodedRange = encodeURIComponent(range)
	const response = await fetch(`${process.env.API_URL}/api/${encodedRange}`)

	console.log(`response: ${JSON.stringify(response)}`)
	const data: (DataItem | string[])[] = await response.json()
	// const rawData = JSON.stringify(data)
	// console.log(`data: ${JSON.stringify(data)}`)
	// const data = dbMock

	// Assuming data is an array of objects
	const slicedData: string[] = data[0] as string[]
	// console.log(`slicedData: ${JSON.stringify(slicedData)}`)
	// Get the column names
	const columns: Column[] = slicedData.map((header) => ({
		accessorKey: header.toLowerCase(),
		header: header.toUpperCase(),
	}))

	// Add a new column for win percentage
	columns.push({
		accessorKey: "%",
		header: "Win %",
	})
	// The rest of "data" are the actual data we want to display in the table.
	const rawValues: DataItem[] = data.slice(1) as DataItem[]
	// console.log(`Raw values: ${JSON.stringify(rawValues)}`)

	// Calculate win percentage for each row
	const values = rawValues.map((value) => {
		const winPercentage = (value.w / (value.w + value.l)).toFixed(3)
		return {
			...value,
			"%": winPercentage,
		}
	})

	return { columns, values }
}

export default async function IndexPage() {
	const { columns, values } = await getData()

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
