"use client"

import { FC } from "react"
import Image from "next/image"
import { Info } from "lucide-react"

import { Button } from "@/components/ui/Button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard"

interface CardProps {
  alt: string
  src: string
}

const Card: FC<CardProps> = ({ alt, src }) => {
  return (
    <div className="flex justify-center pb-4">
      <div className="relative overflow-hidden">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Image
              src={src}
              height={1000}
              width={1000}
              alt={alt}
              className="h-[320px] w-[233px] rounded-sm object-cover transition ease-in-out hover:scale-105 md:h-[380px] md:w-[310px]"
            />
          </HoverCardTrigger>
          <HoverCardContent className="w-fit p-2">
            <div className="flex items-center">
              <span className="text-xs text-muted-foreground">{alt}</span>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  )
}

export default Card
