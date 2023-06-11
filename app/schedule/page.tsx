"use client"

import React from "react"
import GoogleSheet from "@/mockDB/googleSheet"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const Schedule = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<GoogleSheet />
			</QueryClientProvider>
		</>
	)
}

export default Schedule
