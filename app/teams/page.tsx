"use client"

import { DataTable } from "@/components/ui/data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import mockTeamHitting from "../../mockTeamHitting.json"
import mockTeamPitching from "../../mockTeamPitching.json"

export default function Teams() {
	// Simple approach - create columns directly
	const hittingColumns = [
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
			accessorKey: "Team",
			header: () => "TEAM",
		},
		{
			accessorKey: "G",
			header: () => "G",
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
	]

	return (
		<section className="mt-12 p-2 md:container md:min-w-[526px] md:max-w-full">
			<h1 className="text-center text-3xl font-bold tracking-tight">Stats by Teams</h1>

			<Tabs defaultValue="teamHitting" className="mt-8">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="teamHitting">Hitting</TabsTrigger>
					<TabsTrigger value="teamPitching">Pitching</TabsTrigger>
				</TabsList>

				<TabsContent value="teamHitting" className="mt-6">
					<DataTable columns={hittingColumns} data={mockTeamHitting} />
				</TabsContent>

				<TabsContent value="teamPitching" className="mt-6">
					<DataTable columns={pitchingColumns} data={mockTeamPitching} />
				</TabsContent>
			</Tabs>
		</section>
	)
}
