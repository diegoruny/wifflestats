"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// The data is related to a wiffleball tournament stats page.
// The data is fake, but the structure is real.
export type Team = {
	id: string
	team: string
	gamesPlayed: number
	wins: number
	losses: number
	ties: number
	homeRuns: number
	strikeOuts: number
	battingAverage: number
	winningStreak: number
	losingStreak: number
	lastFiveGames: string
	ranking: number
	points: number
	gamesBehind: number
}

export const columns: ColumnDef<Team>[] = [
	{
		accessorKey: "team",
		header: "Team",
	},
	{
		accessorKey: "gamesPlayed",
		header: "GP",
	},
	{
		accessorKey: "wins",
		header: "W",
	},
	{
		accessorKey: "losses",
		header: "L",
	},
	{
		accessorKey: "ties",
		header: "T",
	},
	{
		accessorKey: "homeRuns",
		header: "HR",
	},
	{
		accessorKey: "strikeOuts",
		header: "SO",
	},
	{
		accessorKey: "battingAverage",
		header: "BA",
	},
	{
		accessorKey: "winningStreak",
		header: "WS",
	},
	{
		accessorKey: "losingStreak",
		header: "LS",
	},
	{
		accessorKey: "lastFiveGames",
		header: "L5G",
	},
	{
		accessorKey: "ranking",
		header: "Rank",
	},
	{
		accessorKey: "points",
		header: "Pts",
	},
]
