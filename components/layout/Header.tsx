"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, LogIn } from "lucide-react"
import { useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/Button"

import { Icons } from "../Icons"
import Logo from "../Logo"
import UserAuthNav from "../UserAuthNav"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  const session = useSession()
  const gUser = session?.data?.user

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Logo />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.website}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Image
                  src="https://joshuaedo.sirv.com/joshuaedo/public/images/original/me-modified.png"
                  alt="Joshua Edo's Logo"
                  width={100}
                  height={100}
                  className="h-5 w-5 fill-current"
                />
                <span className="sr-only">Joshua Edo&apos;s Portfolio</span>
              </div>
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "ghost" })}
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>

            {session ? (
              <UserAuthNav gUser={gUser} />
            ) : (
              <Link href={siteConfig.signIn.url}>
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <LogIn className="h-5 w-5" />
                  <span className="sr-only">Sign In</span>
                </div>
              </Link>
            )}

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
