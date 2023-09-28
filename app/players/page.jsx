import React from "react"

import { DataTable } from "@/components/ui/data-table"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import dbMock from "../../db.json"

// async function getData(range: string) {
async function getData(range) {
	// Fetch data from your API here.

	const encodedRange = encodeURIComponent(range)
	console.log(`Peticion a la API: ${process.env.API_URL}/api/${encodedRange}`) //petición a la api
	const response = await fetch(`${process.env.API_URL}/api/${encodedRange}`)

	const data = await response.json()
	// const data = dbMock
	// Verificar si data es una matriz
	if (!Array.isArray(data)) {
		console.error(
			"Error: La respuesta de la API no es una matriz. Respuesta:",
			data
		)
		throw new Error("La respuesta de la API no es una matriz")
	}
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
		getData(hittingRange),
		getData(pitchingRange),
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
