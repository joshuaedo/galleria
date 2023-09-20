"use client"

import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { DndContext } from "@dnd-kit/core"
import { useQuery } from "@tanstack/react-query"

import { fetchPhotos } from "@/lib/requests"
import { Button } from "@/components/ui/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command"

import { searchTerms } from "../lib/requests"
import Card from "./Card"
import { PageLoader } from "./Loader"
import DNDGallery from "./dnd/DNDGallery"

interface GalleryProps {}

const Gallery: FC<GalleryProps> = ({}) => {
  const {
    data: photoResults,
    isFetched,
    isFetching,
  } = useQuery({
    queryFn: () => fetchPhotos(),
    queryKey: ["photo"],
    enabled: true,
  })

  const router = useRouter()
  const [input, setInput] = useState<string>("")
  const commandRef = useRef<HTMLDivElement>(null)
  const photos = photoResults?.photos
  const [isDropped, setIsDropped] = useState(false)

  return (
    <div className="space-y-6">
      {/* SearchBar */}
      <div className="scrollbar-hide flex w-full items-center justify-center md:justify-start">
        <div className="relative flex w-[240px] items-center overflow-visible md:w-[400px] lg:w-[560px]">
          <Command
            ref={commandRef}
            className="relative h-fit w-full rounded-lg border bg-transparent"
          >
            <CommandInput
              onValueChange={(text) => {
                setInput(text)
              }}
              value={input}
              className="focus border-none bg-transparent outline-none ring-0 focus:border-none focus:outline-none"
              placeholder="Explore Galleria"
            />
          </Command>
        </div>
      </div>

      {/* Loader */}
      {isFetching && <PageLoader />}

      {/* Gallery */}
      {/* {isFetched && photos && (
        <main className="grid grid-cols-1 gap-4 pb-[9vh] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {photos.map((photo) => (
            <Card
              key={photo.id}
              alt={photo.alt}
              src={photo.src.large}
              id={photo.id}
            />
          ))}
        </main>
      )} */}

      {isFetched && photos && <DNDGallery photos={photos} />}
    </div>
  )
}

export default Gallery
