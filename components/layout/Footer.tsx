"use client"

import React, { FC } from "react"

import { useDate } from "@/hooks/use-date"

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const { year, wish } = useDate()
  return (
    <footer
      className={`flex items-center justify-between border-t p-4 text-center text-xs font-medium md:px-5 lg:px-6`}
    >
      <p>&#169; {+year + ` Joshua Edo • Galleria • All Rights Reserved`}</p>
      <p className="hidden lg:flex">{wish}</p>
    </footer>
  )
}

export default Footer
