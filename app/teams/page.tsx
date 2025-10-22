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
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "G",
			header: () => "G",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "AB",
			header: () => "AB",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "R",
			header: () => "R",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "H",
			header: () => "H",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "2B",
			header: () => "2B",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "3B",
			header: () => "3B",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "HR",
			header: () => "HR",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "RBI",
			header: () => "RBI",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "BB",
			header: () => "BB",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "K",
			header: () => "K",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "AVG",
			header: () => "AVG",
			cell: ({ getValue }: any) => getValue(),
		},
	]

	const pitchingColumns = [
		{
			accessorKey: "Team",
			header: () => "TEAM",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "G",
			header: () => "G",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "W",
			header: () => "W",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "L",
			header: () => "L",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "SV",
			header: () => "SV",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "IP",
			header: () => "IP",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "H",
			header: () => "H",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "R",
			header: () => "R",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "ER",
			header: () => "ER",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "BB",
			header: () => "BB",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "K",
			header: () => "K",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "HR",
			header: () => "HR",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "ERA",
			header: () => "ERA",
			cell: ({ getValue }: any) => getValue(),
		},
		{
			accessorKey: "WHIP",
			header: () => "WHIP",
			cell: ({ getValue }: any) => getValue(),
		},
	]

	return (
		<section className="mt-12 p-2 md:container md:min-w-[526px] md:max-w-full">
			<h1 className="text-center text-3xl font-bold tracking-tight">
				Stats by Teams
			</h1>

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
