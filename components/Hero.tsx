import { FC } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/Button"

import { Icons } from "./Icons"

interface HeroProps {}

export const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">
          Hi I&apos;m Josh, and welcome to Galleria.
        </h1>
        <p className="max-w-[700px] text-lg font-normal text-muted-foreground">
          Immerse yourself in our extensive collection of captivating images.
          Tailor your experience with personalized searches, and unlock a world
          of possibilities by signing in today.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.signIn.url}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          {siteConfig.signIn.title}
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          <Icons.gitHub className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
