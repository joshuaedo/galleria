import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/Button"
import Gallery from "@/components/Gallery"
import { Hero } from "@/components/Hero"
import { Icons } from "@/components/Icons"
import { AntiHero } from '../components/AntiHero';

export default function HomePage() {
  return (
    <div className="container space-y-6 py-6">
      <Hero />

      <Link href={siteConfig.signIn.url} className={buttonVariants()}>
        {siteConfig.signIn.title}
      </Link>

      <AntiHero />

      <Gallery />
    </div>
  )
}
