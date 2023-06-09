import { AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const Alertmsg = () => {
	return (
		<Alert variant={"destructive"}>
			<AlertTriangle className="h-5 w-5" />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>
				This website is under construction. Please check back later. The info
				Presented here its just for development purposes and not accurate.
			</AlertDescription>
		</Alert>
	)
}

export default Alertmsg
