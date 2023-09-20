import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/Button"
import Gallery from "@/components/Gallery"
import { Hero } from "@/components/Hero"
import { Icons } from "@/components/Icons"

import { AntiHero } from "../components/AntiHero"
import { getAuthSession } from "../lib/auth"

export default function HomePage() {
  const session = getAuthSession()

  return (
    <div className="container space-y-6 py-6">
      {!session ? (
        <>
          <Hero />
          <Link href={siteConfig.signIn.url} className={buttonVariants()}>
            {siteConfig.signIn.title}
          </Link>
        </>
      ) : (
        <>
          <AntiHero />
          <Gallery />
        </>
      )}
    </div>
  )
}
