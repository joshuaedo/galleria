import "@/styles/globals.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import Footer from "../components/layout/Footer"
import { Header } from "../components/layout/Header"
import Providers from "../components/layout/Providers"
import { Toaster } from "../components/ui/Toaster"
import { siteFont } from "../lib/fonts"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="stylesheet" href={siteFont.url} />
        </head>
        <body
          className={cn(
            "general-sans min-h-screen bg-background font-sans antialiased"
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
