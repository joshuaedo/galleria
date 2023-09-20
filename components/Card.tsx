"use client"

import { CSSProperties, HTMLAttributes, forwardRef } from "react"
import Image from "next/image"
import { Info } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard"

type Props = {
  item?: {
    alt: string
    src: {
      large: string
    }
    id: number
    color: string
  }
  alt: string
  src: string
  color: string
  isOpacityEnabled?: boolean
  isDragging?: boolean
} & HTMLAttributes<HTMLDivElement>

// eslint-disable-next-line react/display-name
const Card = forwardRef<HTMLDivElement, Props>(
  ({ alt, src, color, isOpacityEnabled, isDragging, style, ...props }, ref) => {
    const styles: CSSProperties = {
      opacity: isOpacityEnabled ? "0.4" : "1",
      cursor: isDragging ? "grabbing" : "grab",
      lineHeight: "0.5",
      ...style,
    }

    const bgColor = `bg-${color}-500`

    return (
      <div
        className="flex justify-center pb-4"
        ref={ref}
        style={styles}
        {...props}
      >
        <div className="relative overflow-hidden">
          <HoverCard>
            <HoverCardTrigger asChild>
              <>
                <Image
                  src={src}
                  height={1000}
                  width={1000}
                  alt={alt}
                  style={{
                    boxShadow: isDragging
                      ? "none"
                      : "rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px",
                    maxWidth: "100%",
                  }}
                  className="h-[320px] w-[233px] rounded-sm object-cover transition ease-in-out hover:scale-105 md:h-[380px] md:w-[310px]"
                />
                <div
                className="shadow-lg"
                  style={{
                    zIndex: 10,
                    position: "absolute",
                    right: "1rem",
                    top: "1rem",
                    height: "1rem", 
                    width: "1rem",
                    borderRadius: "50%", 
                    backgroundColor: color, 
                  }}
                />
              </>
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
)

export default Card
