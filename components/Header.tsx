import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from './Icons';
import { ThemeToggle } from './ThemeToggle';
import { buttonVariants } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">

        {/* TODO: Galleria Logo */}


        {/* TODO: SearchBar */}


        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.signIn.url}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">Sign In</span>
              </div>
            </Link>
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
                <Icons.twitter   className="h-5 w-5 fill-current" />
                <span className="sr-only">Joshua Edo&apos;s Portfolio</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
