import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import logoTournament from "public/logohcwiffleag.jpg"

import { sponsors } from "@/lib/sponsors"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/data-table"
import SponsorsSection from "@/components/sponsorsSection"

import { Team } from "./standings/columns"
import { columns } from "./standings/simpleColumns"

async function getData(): Promise<Team[]> {
	// Fetch data from your API here.
	const res = await axios.get<Team[]>(
		"https://wifflestats.vercel.app/api/sheetData"
	)
	return res.data
}

export default async function IndexPage() {
	const data = await getData()
	return (
		<>
			<section className="container grid items-center gap-6 pb-8 pt-6 text-center md:py-10">
				<div className="flex flex-col items-center gap-2">
					<Image
						src={logoTournament}
						alt="Tournament Logo"
						width={300}
						height={300}
						className="rounded-full"
					/>
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
						HAYNIES CORNER WIFFLEBALL LEAGUE <br className="hidden sm:inline" />
					</h1>
					<p className="max-w-[700px] text-lg text-muted-foreground">
						Check the standings for the the Wiffleball League.
					</p>
				</div>
			</section>
			<section>
				<div className="container flex flex-col gap-8">
					<h2 className="scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
						Current Season
					</h2>
					<DataTable columns={columns} data={data} />
					<Button variant={"link"} className="w-fit place-self-end">
						<Link href="/standings">VIEW MORE</Link>
					</Button>
				</div>
			</section>
			<SponsorsSection sponsors={sponsors} />
			<div className="h-16 w-full"></div>
		</>
	)
}
