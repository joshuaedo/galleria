import "@/styles/globals.css"
import { Metadata } from "next"
import { GeistSans } from "geist/font/sans"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import Footer from "../components/layout/Footer"
import { Header } from "../components/layout/Header"
import Providers from "../components/layout/Providers"
import { Toaster } from "../components/ui/Toaster"

const { title, creator, description, siteName, images, url } = siteConfig

export const generateMetadata = async ({}): Promise<Metadata> => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: images[0],
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
      creator: creator.name,
      images,
    },
    robots: {
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
      },
    },
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            GeistSans.className,
            "min-h-screen bg-background font-sans antialiased"
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
              <Toaster />
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
