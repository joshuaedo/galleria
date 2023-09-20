"use client"

import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import debounce from "lodash.debounce"

import { fetchSearchPhotos } from "@/lib/requests"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command"

import { PageLoader } from "./Loader"

interface GalleryProps {}

const Gallery: FC<GalleryProps> = ({}) => {
  const [input, setInput] = useState<string>("")
  const pathname = usePathname()
  const commandRef = useRef<HTMLDivElement>(null)

  const {
    data: queryResults,
    refetch,
    isFetched,
    isFetching,
  } = useQuery({
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

  return (
    <div className="space-y-6">
      {/* SearchBar */}
      <Command
        ref={commandRef}
        className="relative h-fit w-[15rem] overflow-visible rounded-lg border bg-transparent md:w-[25rem] lg:w-[35rem]"
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

      {/* Loader */}
      {isFetching && <PageLoader />}

      {/* Gallery */}

      {/* {isFetched && (

)}


(queryResults?.length ?? 0) > 0 ?  */}
    </div>
  )
}

export default Gallery
