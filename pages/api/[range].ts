/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import type { NextApiRequest, NextApiResponse } from "next"
// import { google } from "googleapis"

// // Define the type for the service account key.
// interface ServiceAccount {
// 	client_email: string
// 	private_key: string
// }

// // Load the service account key JSON file.
// // DEPLOYMENT: Uncomment the following line and comment the one after it.
// const serviceAccount = JSON.parse(
// 	process.env.GOOGLE_APPLICATION_CREDENTIALS || ""
// ) as ServiceAccount
// // DEVELOPMENT: Uncomment the following line and comment the one above it.
// // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// // import serviceAccount from "../../secret.json"

// // Define the scopes for the Google Sheets API.
// const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

// // Authenticate with the service account.
// const auth = new google.auth.JWT(
// 	serviceAccount.client_email,
// 	undefined,
// 	serviceAccount.private_key,
// 	scopes
// )

// // Your Google Sheets API configuration.
// const spreadsheetId = process.env.SPREADSHEET_ID2

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse
// ) {
// 	try {
// 		// Get the Google Sheets client.
// 		const sheets = google.sheets({ version: "v4", auth: auth })
// 		const range =
// 			typeof req.query.range === "string"
// 				? decodeURIComponent(req.query.range)
// 				: ""
// 		console.log("Range:", range)
// 		// Get the values from the spreadsheet.
// 		const response = await sheets.spreadsheets.values.get({
// 			spreadsheetId,
// 			range,
// 		})
// 		//show the response in the console
// 		// const rawHeaders = response.data.values?.slice(0, 1)?.[0] ?? []

// 		// // Assuming the first row is headers, we remove it.
// 		// const rows = response.data.values?.slice(1) ?? []

// 		// if (!rows) {
// 		// 	throw new Error("No data found in the sheet")
// 		// }
// 		// // Clean headers
// 		// const headers = rawHeaders
// 		// 	.map((header) => {
// 		// 		// Skip if the header is an empty string
// 		// 		if (header === "") return null

// 		// 		// Remove spaces from the header, convert to lowercase, and ensure it's a string
// 		// 		return String(header).replace(/ /g, "").toLowerCase()
// 		// 	})
// 		// 	.filter((header) => header !== null)

// 		// // Clean and process the data as necessary.
// 		// const cleanedData = rows.map((row) => {
// 		// 	const data: Record<string, string | number> = {}
// 		// 	headers.forEach((header, index) => {
// 		// 		if (header) {
// 		// 			// Check if header is not null
// 		// 			data[header] = index === 0 ? String(row[index]) : Number(row[index])
// 		// 		}
// 		// 	})
// 		// 	// Add the id field
// 		// 	// data["id"] = data["name"]
// 		// 	return data
// 		// })
// 		const headers = response.data.values?.slice(0, 1) ?? []
// 		console.log("headers:", headers)
// 		// Assuming the first row is headers, we remove it.
// 		const rows = response.data.values?.slice(1)

// 		if (!rows) {
// 			throw new Error("No data found in the sheet")
// 		}

// 		// Clean and process the data as necessary.
// 		const cleanedData = rows.map((row) => ({
// 			id: String(row[0]),
// 			team: String(row[0]),
// 			gamesPlayed: Number(row[1]),
// 			wins: Number(row[2]),
// 			losses: Number(row[3]),
// 			ties: Number(row[4]),
// 			homeRuns: Number(row[5]),
// 			strikeOuts: Number(row[6]),
// 			battingAverage: Number(row[7]),
// 			winningStreak: Number(row[8]),
// 			losingStreak: Number(row[9]),
// 			lastFiveGames: String(row[10]),
// 			ranking: Number(row[11]),
// 			points: Number(row[12]),
// 		}))
// 		console.log("cleanedData:", cleanedData)
// 		// Return the cleaned data as JSON.
// 		const cleanedData2 = [headers.filter((header) => header), ...cleanedData] // filter out null headers
// 		res.status(200).json(cleanedData2)
// 	} catch (error) {
// 		console.error(error)
// 		res.status(500).json({ message: "Error fetching data" })
// 	}
// }
import fs from "fs"
import path from "path"
import { NextApiRequest, NextApiResponse } from "next"
import { google } from "googleapis"

// Define the type for the service account key.
interface ServiceAccount {
	client_email: string
	private_key: string
}

// Load the service account key JSON file.
let serviceAccount: ServiceAccount
if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
	try {
		const credentialsPath = path.resolve(
			process.cwd(),
			process.env.GOOGLE_APPLICATION_CREDENTIALS
		)
		const credentialsContent = fs.readFileSync(credentialsPath, "utf-8")
		serviceAccount = JSON.parse(credentialsContent)
	} catch (error) {
		throw new Error(
			"Failed to parse GOOGLE_APPLICATION_CREDENTIALS: " + error.message
		)
	}
} else {
	throw new Error("GOOGLE_APPLICATION_CREDENTIALS is not set")
}

const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

const auth = new google.auth.JWT(
	serviceAccount.client_email,
	undefined,
	serviceAccount.private_key,
	scopes
)

const spreadsheetId = process.env.SPREADSHEET_ID2

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const sheets = google.sheets({ version: "v4", auth })

		const range =
			typeof req.query.range === "string"
				? decodeURIComponent(req.query.range)
				: ""
		console.log("Range:", range)

		const response = await sheets.spreadsheets.values.get({
			spreadsheetId,
			range,
		})

		const rawHeaders = response.data.values?.[0] || []
		const rows = response.data.values?.slice(1) || []

		if (!rows.length) {
			throw new Error("No data found in the sheet")
		}

		const headers = rawHeaders
			.map((header) => String(header).replace(/ /g, "").toLowerCase())
			.filter(Boolean)

		const cleanedData = rows.map((row) => {
			const data: Record<string, string | number> = {}
			headers.forEach((header, index) => {
				data[header] = index === 0 ? String(row[index]) : Number(row[index])
			})
			return data
		})

		const cleanedData2 = [headers, ...cleanedData]
		res.status(200).json(cleanedData2)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: "Error fetching data" })
	}
}
