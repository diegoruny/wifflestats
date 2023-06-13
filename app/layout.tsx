import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Alert from "@/components/alertmsg"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/logohcwiffleag.ico",
		shortcut: "/logohcwiffleag.ico",
		apple: "/logohcwiffleag.ico",
	},
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable
					)}
				>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<div className="relative flex min-h-screen flex-col">
							<SiteHeader />
							<div className="flex-1">{children}</div>
						</div>
						<div className="fixed bottom-0 z-50 w-full rounded-lg bg-destructive-foreground">
							<Alert />
						</div>

						<TailwindIndicator />
					</ThemeProvider>
				</body>
			</html>
		</>
	)
}
