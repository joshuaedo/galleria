"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/Button"
import Gallery from "@/components/Gallery"
import { Hero } from "@/components/Hero"
import { Icons } from "@/components/Icons"

import { AntiHero } from "../components/AntiHero"

export const dynamic = "force-dynamic"

export default function HomePage() {
  const verifiedWithGoogle = useSession({
    required: true,
    onUnauthenticated() {
      return (
        <>
          <Hero />
          <Link href={siteConfig.signIn.url} className={buttonVariants()}>
            {siteConfig.signIn.title}
          </Link>
        </>
      )
    },
  })

  return (
    <div className="container space-y-6 py-6">
      <AntiHero />
      <Gallery />
    </div>
  )
}

HomePage.requireAuth = true
