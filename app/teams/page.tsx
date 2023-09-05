import { DataTable } from "@/components/ui/data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const getData = async (range: string) => {
	const encodedRange = encodeURIComponent(range)
	const response = await fetch(
		`https://wifflestats.vercel.app/api/${encodedRange}`
	)
	const data = await response.json()

	// Assuming data is an array of objects
	const slicedData = data.slice(0, 1)[0]

	const columns = Object.keys(slicedData).map((key) => ({
		accessorKey: slicedData[key].toLowerCase(),
		header: slicedData[key].toUpperCase(),
	}))

	const values = data.slice(1)

	return { columns, values }
}

export default async function Teams() {
	const hittingRange = "Team Hitting!A1:L13"
	const pitchingRange = "Team Pitching!A1:N13"

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
		<div className="mt-12 p-2 md:container md:min-w-[526px] md:max-w-full">
			{/* <p>{prueba}</p> */}
			<h1 className="text-center font-bold">Stats by Teams</h1>
			<br />
			<Tabs defaultValue="teamHitting" className="">
				<TabsList>
					<TabsTrigger value="teamHitting">Hitting</TabsTrigger>
					<TabsTrigger value="teamPitching">Pitching</TabsTrigger>
				</TabsList>
				<TabsContent value="teamHitting">
					<DataTable columns={hittingColumns} data={hittingValues} />
				</TabsContent>
				<TabsContent value="teamPitching">
					<DataTable columns={pitchingColumns} data={pitchingValues} />
				</TabsContent>
			</Tabs>
		</div>
	)
}
