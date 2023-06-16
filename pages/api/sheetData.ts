import type { NextApiRequest, NextApiResponse } from "next"
import { google } from "googleapis"

// Define the type for the service account key.
// interface ServiceAccount {
// 	client_email: string
// 	private_key: string
// }

// Load the service account key JSON file.
// DEPLOYMENT: Uncomment the following line and comment the one after it.
// const serviceAccount = JSON.parse(
// 	process.env.GOOGLE_APPLICATION_CREDENTIALS || ""
// ) as ServiceAccount
// DEVELOPMENT: Uncomment the following line and comment the one above it.
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
import serviceAccount from "../../secret.json"

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
const spreadsheetId = process.env.SPREADSHEET_ID2
const range = "Team Wins and Losses!K11:O17"

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
		//show the response in the console

		const headers = response.data.values?.slice(0, 1) ?? []
		console.log("headers:", headers)
		// Assuming the first row is headers, we remove it.
		const rows = response.data.values?.slice(1)

		if (!rows) {
			throw new Error("No data found in the sheet")
		}

		// Clean and process the data as necessary.
		const cleanedData = rows.map((row) => ({
			id: String(row[0]),
			team: String(row[0]),
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
