"use client"

import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DndContext } from "@dnd-kit/core"
import { useQuery } from "@tanstack/react-query"
import debounce from "lodash.debounce"

import { fetchSearchPhotos } from "@/lib/requests"
import { Button } from "@/components/ui/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command"

import { fetchCuratedPhotos, searchTerms } from "../lib/requests"
import Card from "./Card"
import { PageLoader } from "./Loader"

interface GalleryProps {}

const Gallery: FC<GalleryProps> = ({}) => {
  const {
    data: curatedResults,
    isFetched,
    isFetching,
  } = useQuery({
    queryFn: () => fetchCuratedPhotos(),
    queryKey: ["curated"],
    enabled: true,
  })

  const [input, setInput] = useState<string>("")
  const pathname = usePathname()
  const commandRef = useRef<HTMLDivElement>(null)

  const { data: queryResults, refetch } = useQuery({
    queryFn: () => fetchSearchPhotos(input),
    queryKey: ["search-query"],
    enabled: false,
  })

  const request = debounce(async () => {
    refetch()
  }, 500)

  const debounceRequest = useCallback(() => {
    request()
  }, [request])

  useEffect(() => {
    setInput("")
  }, [pathname])

  // console.log(curatedResults.photos)
  // console.log(queryResults.photos)

  const photos = !queryResults?.photos
    ? curatedResults?.photos
    : queryResults?.photos

  console.log(photos)

  const [isDropped, setIsDropped] = useState(false)

  return (
    <div className="space-y-6">
      {/* SearchBar */}
      <div className="scrollbar-hide flex w-full items-center justify-start gap-4 overflow-x-scroll">
        
        <div
        className="relative flex w-[240px] items-center overflow-visible md:w-[400px] lg:w-[560px]"
        >
        <Command
          ref={commandRef}
          className="relative h-fit w-full rounded-lg border bg-transparent"
        >
          <CommandInput
            onValueChange={(text) => {
              setInput(text)
              debounceRequest()
            }}
            value={input}
            className="focus border-none bg-transparent outline-none ring-0 focus:border-none focus:outline-none"
            placeholder="Explore Galleria"
          />
        </Command>
        </div>
        


        <div className="flex gap-4">
          {searchTerms.map((term) => (
            <Button
              key={term}
              variant="outline"
              onClick={() => {
                setInput(term)
                debounceRequest()
              }}
            >
              {term}
            </Button>
          ))}
        </div>
      </div>

      {/* Loader */}
      {isFetching && <PageLoader />}

      {/* Gallery */}
      {isFetched && photos && (
        <main className="grid grid-cols-1 gap-4 pb-[9vh] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {photos.map((photo) => (
            <Card key={photo.id} alt={photo.alt} src={photo.src.large} />
          ))}
        </main>
      )}
    </div>
  )
}

export default Gallery
