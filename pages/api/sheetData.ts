import type { NextApiRequest, NextApiResponse } from "next"
import { google } from "googleapis"

// Define the type for the service account key.
interface ServiceAccount {
	client_email: string
	private_key: string
}

// Load the service account key JSON file.
const serviceAccount: ServiceAccount = JSON.parse(
	process.env.GOOGLE_APPLICATION_CREDENTIALS || ""
)
// Define the scopes for the Google Sheets API.
const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

// Authenticate with the service account.
const auth = new google.auth.JWT(
	serviceAccount.client_email,
	undefined,
	serviceAccount.private_key,
	scopes
)

// Your Google Sheets API configuration.
const spreadsheetId = process.env.SPREADSHEET_ID
const range = "teams!A1:M11"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		// Get the Google Sheets client.
		const sheets = google.sheets({ version: "v4", auth: auth })

		// Get the values from the spreadsheet.
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId,
			range,
		})

		// Assuming the first row is headers, we remove it.
		const rows = response.data.values?.slice(1)

		if (!rows) {
			throw new Error("No data found in the sheet")
		}

		// Clean and process the data as necessary.
		const cleanedData = rows.map((row) => ({
			id: String(row[0]),
			name: String(row[0]),
			gamesPlayed: Number(row[1]),
			wins: Number(row[2]),
			losses: Number(row[3]),
			ties: Number(row[4]),
			homeRuns: Number(row[5]),
			strikeOuts: Number(row[6]),
			battingAverage: Number(row[7]),
			winningStreak: Number(row[8]),
			losingStreak: Number(row[9]),
			lastFiveGames: String(row[10]),
			ranking: Number(row[11]),
			points: Number(row[12]),
		}))

		// Return the cleaned data as JSON.
		res.status(200).json(cleanedData)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: "Error fetching data" })
	}
}
