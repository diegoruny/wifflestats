"use client"

//Typescript component for the hamburger navigation menu
import * as React from "react"
import Link from "next/link"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { MainNav } from "./main-nav"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet"

const HamburgerNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<HamburgerMenuIcon />
			</SheetTrigger>
			<SheetContent side={"left"}>
				<SheetHeader className="m-4 items-center">
					<SheetTitle>
						<MainNav items={siteConfig.mainNav} />
					</SheetTitle>
				</SheetHeader>
				{siteConfig.mainNav.length ? (
					<nav className="mt-5 flex flex-col gap-3">
						{siteConfig.mainNav.map(
							(item, index) =>
								item.href && (
									<SheetClose asChild key={index}>
										<Link
											href={item.href}
											className={cn("border-b text-xl font-semibold")}
										>
											{item.title}
										</Link>
									</SheetClose>
								)
						)}
					</nav>
				) : null}
			</SheetContent>
		</Sheet>
	)
}

export default HamburgerNav
