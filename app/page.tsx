"use client"

import Gallery from "@/components/Gallery"
import { AntiHero } from "../components/AntiHero"

export const dynamic = "force-dynamic"

export default function HomePage() {

  return (
    <div className="container space-y-6 py-6">
      <AntiHero />
      <Gallery />
    </div>
  )
}
