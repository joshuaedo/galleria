"use client"

import React, { FC } from "react"
import { useQuery } from "@tanstack/react-query"

import { fetchPhotos } from "@/lib/requests"

import DNDGallery from "./DNDGallery"
import { PageLoader } from "./Loader"

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

  const photos = photoResults?.photos

  return (
    <div className="space-y-6">
      {/* Loader */}
      {isFetching && <PageLoader />}

      {/* @ts-expect-error */}
      {isFetched && photos && <DNDGallery photos={photos} />}
    </div>
  )
}

export default Gallery
