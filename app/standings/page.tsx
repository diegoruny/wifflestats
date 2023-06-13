import axios from "axios"

import { DataTable } from "@/components/data-table"

import { Team, columns } from "./columns"

async function getData(): Promise<Team[]> {
	// Fetch data from your API here.
	const res = await axios.get<Team[]>(
		"https://wifflestats.vercel.app/api/sheetData"
	)
	return res.data
}

export default async function Standings() {
	const data = await getData()

	return (
		<div className="container mx-auto mb-8 py-10">
			<DataTable columns={columns} data={data} />
		</div>
	)
}
