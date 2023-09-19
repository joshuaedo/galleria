"use client"

import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import debounce from "lodash.debounce"

import { fetchGalleriaPhotos } from "@/lib/requests"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command"

import Loader from "./Loader"

interface GalleryProps {}

const Gallery: FC<GalleryProps> = ({}) => {
  const [input, setInput] = useState<string>("")
  const pathname = usePathname()
  const commandRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(commandRef, () => {
    setInput("")
  })

  const {
    data: queryResults,
    refetch,
    isFetched,
    isFetching,
  } = useQuery({
    queryFn: () => fetchGalleriaPhotos(input),
    queryKey: ["search-query"],
    enabled: false,
  })

  const request = debounce(async () => {
    refetch()
  }, 300)

  const debounceRequest = useCallback(() => {
    request()
  }, [request])

  useEffect(() => {
    setInput("")
  }, [pathname])

  return (
    <div className="">
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
      {isFetching && <Loader />}

      {/* Gallery */}

      {/* {isFetched && (

)}


(queryResults?.length ?? 0) > 0 ?  */}
    </div>
  )
}

export default Gallery
