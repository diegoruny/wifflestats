import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import logoTournament from "public/logohcwiffleag.jpg"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MainNavProps {
	items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="flex items-center space-x-2">
				<Image
					src={logoTournament}
					alt="Tournament Logo"
					className="h-6 w-6 rounded-full"
				/>
				<span className="inline-block font-bold ">{siteConfig.name}</span>
			</Link>
			{items?.length ? (
				<nav className="hidden gap-6 sm:flex">
					{items?.map(
						(item, index) =>
							item.href && (
								<Link
									key={index}
									href={item.href}
									className={cn(
										"flex items-center text-sm font-medium text-muted-foreground",
										item.disabled && "cursor-not-allowed opacity-80"
									)}
								>
									{item.title}
								</Link>
							)
					)}
				</nav>
			) : null}
		</div>
	)
}
