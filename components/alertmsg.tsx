import Link from "next/link"
import { AlertTriangle } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const Alertmsg = () => {
	return (
		<Alert variant={"destructive"}>
			<AlertTriangle className="h-5 w-5" />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>
				This is an unfinished project and is not on developmnent. Please{" "}
				<Link
					className="hover:text-primary-foreground  underline"
					href={siteConfig.links.portfolioContact}
				>
					contact us
				</Link>{" "}
				if you need more info.
				<br />
				The brands and logos are property of their respective owners.they have
				only been used for educational purposes.
			</AlertDescription>
		</Alert>
	)
}

export default Alertmsg
