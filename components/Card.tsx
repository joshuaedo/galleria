"use client"

import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

interface CardProps {
  alt: string
  src: string
}

const Card: FC<CardProps> = ({ alt, src }) => {
  return (
    <div className="flex justify-center pb-4">
      <div className="relative overflow-hidden">
        <Image
          src={src.large}
          height={1000}
          width={1000}
          alt={alt}
          className="h-[320px] w-[233px] rounded-sm object-cover transition ease-in-out hover:scale-105 md:h-[380px] md:w-[310px]"
        />
      </div>
    </div>
  )
}

export default Card
