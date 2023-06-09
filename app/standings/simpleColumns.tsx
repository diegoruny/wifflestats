"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Team } from "./columns"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// The data is related to a wiffleball tournament stats page.
// The data is fake, but the structure is real.

export const columns: ColumnDef<Team>[] = [
	{
		accessorKey: "name",
		header: "Team Name",
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
		accessorKey: "ranking",
		header: "Rank",
	},
	{
		accessorKey: "points",
		header: "Pts",
	},
]
