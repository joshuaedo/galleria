"use client"

import * as React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const Providers = ({
  children,
  ...themeProviderProps
}: {
  children: React.ReactNode
  themeProviderProps?: ThemeProviderProps
}) => {
  const queryClient = new QueryClient()

  return (
    <NextThemesProvider {...themeProviderProps} enableSystem>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextThemesProvider>
  )
}

export default Providers
