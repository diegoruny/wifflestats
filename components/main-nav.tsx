import Image from "next/image"
import Link from "next/link"
import logoTournament from "public/logohcwiffleag.jpg"
import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import type { NavItem } from "@/types/nav"

interface MainNavProps {
	items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="flex items-center space-x-2">
				<div className="overflow-hidden rounded-full">
					<Image src={logoTournament} alt="Tournament Logo" height={40} width={40} />
				</div>
				<span className="inline-block font-semibold ">{siteConfig.name}</span>
			</Link>
			{items?.length ? (
				<nav className="hidden gap-6 sm:flex">
					{items?.map(item =>
						item.href ? (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"text-muted-foreground hover:text-accent-foreground flex items-center text-sm font-semibold hover:font-extrabold",
									item.disabled && "cursor-not-allowed opacity-80"
								)}
							>
								{item.title}
							</Link>
						) : null
					)}
				</nav>
			) : null}
		</div>
	)
}
