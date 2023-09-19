import Image from "next/image"
import Link from "next/link"
import { Globe, LogIn } from "lucide-react"
import { signOut } from "next-auth/react";
import { siteConfig } from "@/config/site"
import { getAuthSession } from "@/lib/auth"
import { buttonVariants } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropDownMenu"
import Logo from "../Logo"
import UserAvatar from "../UserAvatar"
import { ThemeToggle } from "./ThemeToggle"

export async function Header() {
  const session = await getAuthSession()
  const gUser = session?.user

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Logo />

        {/* TODO: SearchBar */}

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

            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <UserAvatar
                    className="h-5 w-5"
                    user={{
                      name: gUser?.name || null,
                      image: gUser?.image || null,
                    }}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onSelect={(e) => {
                      e.preventDefault()
                      signOut({
                        callbackUrl: `${window.location.origin}/sign-in`,
                      })
                    }}
                    className="cursor-pointer"
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
