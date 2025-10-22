import React from "react"

import { DataTable } from "@/components/ui/data-table"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import mockPlayerHitting from "../../mockPlayerHitting.json"
import mockPlayerPitching from "../../mockPlayerPitching.json"

// async function getData(range: string) {
async function getData(dataSource) {
	// Fetch data from your API here.

	// const encodedRange = encodeURIComponent(range)
	// const response = await fetch(`http://localhost:3000/api/${encodedRange}`)

	// const data = await response.json()
	const data = dataSource

	// Assuming data is an array of objects
	const slicedData = data.slice(0, 1)[0]

	const columns = Object.keys(slicedData).map((key) => ({
		accessorKey: slicedData[key].toLowerCase(),
		header: slicedData[key].toUpperCase(),
	}))

	const values = data.slice(1)

	return { columns, values }
}

export default async function Players() {
	const hittingRange = "individual Hitting!A1:M173"
	const pitchingRange = "individual Pitching!A1:R70"

	const [hittingData, pitchingData] = await Promise.all([
		getData(mockPlayerHitting),
		getData(mockPlayerPitching),
	])

	const [hittingColumns, hittingValues] = [
		hittingData.columns,
		hittingData.values,
	]
	const [pitchingColumns, pitchingValues] = [
		pitchingData.columns,
		pitchingData.values,
	]
	return (
		<section className="mt-12 p-2 md:container md:min-w-[526px] md:max-w-full">
			<h1 className="text-center font-bold">Stats by Players</h1>
			<br />
			<Tabs defaultValue="hitting" className="">
				<TabsList>
					<TabsTrigger value="hitting">Hitting</TabsTrigger>
					<TabsTrigger value="pitching">Pitching</TabsTrigger>
				</TabsList>
				<TabsContent value="hitting">
					<DataTable columns={hittingColumns} data={hittingValues} />
				</TabsContent>
				<TabsContent value="pitching">
					<DataTable columns={pitchingColumns} data={pitchingValues} />
				</TabsContent>
			</Tabs>
		</section>
	)
}
