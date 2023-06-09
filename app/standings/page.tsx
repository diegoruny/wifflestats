import { DataTable } from "@/components/data-table"

import { Team, columns } from "./columns"

async function getData(): Promise<Team[]> {
	// Fetch data from your API here.
	return [
		{
			id: "1",
			name: "Team 1",
			gamesPlayed: 10,
			wins: 5,
			losses: 5,
			ties: 0,
			homeRuns: 10,
			strikeOuts: 10,
			battingAverage: 0.5,
			winningStreak: 2,
			losingStreak: 3,
			lastFiveGames: "WLLWW",
			ranking: 1,
			points: 10,
		},
		// ...
	]
}

export default async function Standings() {
	const data = await getData()

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={data} />
		</div>
	)
}
