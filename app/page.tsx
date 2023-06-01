import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import logoTournament from "../public/logohcwiffleag.jpg"
import Standings from "./standings/page"

export default function IndexPage() {
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
          <Standings />
        </div>
      </section>
    </>
  )
}
