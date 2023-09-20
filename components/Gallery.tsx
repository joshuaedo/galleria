"use client"

import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { DndContext } from "@dnd-kit/core"
import { useQuery } from "@tanstack/react-query"

import { fetchPhotos } from "@/lib/requests"
import { Button } from "@/components/ui/Button"

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
  const commandRef = useRef<HTMLDivElement>(null)
  const photos = photoResults?.photos
  const [isDropped, setIsDropped] = useState(false)

  return (
    <div className="space-y-6">
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

      {/* @ts-expect-error */}
      {isFetched && photos && <DNDGallery photos={photos} />}
    </div>
  )
}

export default Gallery
