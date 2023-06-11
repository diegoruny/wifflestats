import { useQuery } from "@tanstack/react-query"

import { DataTable } from "@/components/data-table"

import { Team, columns } from "./columns"

const axios = require("axios").default

async function getData(): Promise<Team[]> {
	// Fetch data from your API here.
	const res = await axios.get("http://localhost:4000/teams")
	return res.data
}

export default async function Standings() {
	const data = await getData()

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={data} />
		</div>
	)
}
