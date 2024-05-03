"use client"

import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/Button"

import { Icons } from "../Icons"
import SignInWithGoogle from "../SignInWithGoogle"
import UserAuthNav from "../UserAuthNav"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  const session = useSession()
  const gUser = session?.data?.user

  const { title, creator, github } = siteConfig

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="font-medium">
          <Link href="/">{title}</Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={creator.website} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Image
                  src={creator.logo}
                  alt={`${creator.name}'s logo`}
                  width={100}
                  height={100}
                  className="h-5 w-5 fill-current"
                />
                <span className="sr-only">{creator.name}&apos;s Portfolio</span>
              </div>
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={github}
              className={buttonVariants({ variant: "ghost" })}
            >
              <Icons.gitHub className="h-5 w-5" />
            </Link>

            {gUser ? <UserAuthNav gUser={gUser} /> : <SignInWithGoogle />}

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
