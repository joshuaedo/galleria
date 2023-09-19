"use client"

import React, { FC } from "react"

import { useDate } from "@/hooks/use-date"

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const { year, wish } = useDate()
  return (
    <div
      className={`bebas-neue flex h-10 items-center justify-between px-4 text-center text-sm font-normal md:px-6 md:text-base`}
    >
      <p>&#169; {+year + ` Joshua Edo • ALL RIGHTS RESERVED`}</p>
      <p>{wish}</p>
    </div>
  )
}

export default Footer
