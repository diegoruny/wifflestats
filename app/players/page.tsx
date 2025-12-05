"use client"

import { DataTable } from "@/components/ui/data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import mockPlayerHitting from "../../mockPlayerHitting.json"
import mockPlayerPitching from "../../mockPlayerPitching.json"

export default function Players() {
	// Simple approach - create columns directly
	const hittingColumns = [
		{
			accessorKey: "Player",
			header: () => "PLAYER",
		},
		{
			accessorKey: "Team",
			header: () => "TEAM",
		},
		{
			accessorKey: "G",
			header: () => "G",
		},
		{
			accessorKey: "AB",
			header: () => "AB",
		},
		{
			accessorKey: "R",
			header: () => "R",
		},
		{
			accessorKey: "H",
			header: () => "H",
		},
		{
			accessorKey: "2B",
			header: () => "2B",
		},
		{
			accessorKey: "3B",
			header: () => "3B",
		},
		{
			accessorKey: "HR",
			header: () => "HR",
		},
		{
			accessorKey: "RBI",
			header: () => "RBI",
		},
		{
			accessorKey: "BB",
			header: () => "BB",
		},
		{
			accessorKey: "K",
			header: () => "K",
		},
		{
			accessorKey: "AVG",
			header: () => "AVG",
		},
	]

	const pitchingColumns = [
		{
			accessorKey: "Player",
			header: () => "PLAYER",
		},
		{
			accessorKey: "Team",
			header: () => "TEAM",
		},
		{
			accessorKey: "G",
			header: () => "G",
		},
		{
			accessorKey: "GS",
			header: () => "GS",
		},
		{
			accessorKey: "W",
			header: () => "W",
		},
		{
			accessorKey: "L",
			header: () => "L",
		},
		{
			accessorKey: "SV",
			header: () => "SV",
		},
		{
			accessorKey: "IP",
			header: () => "IP",
		},
		{
			accessorKey: "H",
			header: () => "H",
		},
		{
			accessorKey: "R",
			header: () => "R",
		},
		{
			accessorKey: "ER",
			header: () => "ER",
		},
		{
			accessorKey: "BB",
			header: () => "BB",
		},
		{
			accessorKey: "K",
			header: () => "K",
		},
		{
			accessorKey: "HR",
			header: () => "HR",
		},
		{
			accessorKey: "ERA",
			header: () => "ERA",
		},
		{
			accessorKey: "WHIP",
			header: () => "WHIP",
		},
		{
			accessorKey: "K/9",
			header: () => "K/9",
		},
	]

	return (
		<section className="mt-12 p-2 md:container md:min-w-[526px] md:max-w-full">
			<h1 className="text-center text-3xl font-bold tracking-tight">Stats by Players</h1>

			<Tabs defaultValue="hitting" className="mt-8">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="hitting">Hitting</TabsTrigger>
					<TabsTrigger value="pitching">Pitching</TabsTrigger>
				</TabsList>

				<TabsContent value="hitting" className="mt-6">
					<DataTable columns={hittingColumns} data={mockPlayerHitting} />
				</TabsContent>

				<TabsContent value="pitching" className="mt-6">
					<DataTable columns={pitchingColumns} data={mockPlayerPitching} />
				</TabsContent>
			</Tabs>
		</section>
	)
}
