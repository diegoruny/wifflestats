import Image from "next/image"
import Link from "next/link"
import logoTournament from "public/logohcwiffleag.jpg"

import { siteConfig } from "@/config/site"
import { sponsors } from "@/lib/sponsors"
import { Button, buttonVariants } from "@/components/ui/button"
import SponsorsSection from "@/components/sponsorsSection"

import { Team, columns } from "./standings/columns"
import { DataTable } from "./standings/data-table"

async function getData(): Promise<Team[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "Team 1",
      gamesPlayed: 10,
      wins: 5,
      losses: 5,
      ties: 0,
      homeRuns: 10,
      strikeOuts: 10,
      battingAverage: 0.5,
      winningStreak: 2,
      losingStreak: 3,
      lastFiveGames: "WLLWW",
      ranking: 1,
      points: 10,
    },
    // ...
  ]
}

export default async function IndexPage() {
  const data = await getData()
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={logoTournament}
            alt="Tournament Logo"
            width={300}
            height={300}
            className="rounded-full"
          />
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Haynies Corner Wiffleball League <br className="hidden sm:inline" />
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Check the standings for the current season of the Wiffleball League.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <DataTable columns={columns} data={data} />
        </div>
      </section>
      <SponsorsSection sponsors={sponsors} />
    </>
  )
}
