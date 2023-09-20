import { ImagesSchemaWithPhotos, type ImagesResults } from "@/lib/models"
import { toast } from "@/hooks/use-toast"

import { axiosPexelsInstance } from "./axios"
import { PexelsPhoto, PhotoItem } from '../types/photos';

// Function to add color values to photo objects
function addColorValues(photos, colors) {
  const photosWithColors = []

  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i]
    const color = colors[i % colors.length] // Cycle through colors

    // Create a new photo object with the added color property
    const photoWithColor = {
      ...photo,
      color,
    }

    photosWithColors.push(photoWithColor)
  }

  return photosWithColors
}

export const fetchPhotos = async (): Promise<ImagesResults | undefined> => {
  try {
    const cur = await axiosPexelsInstance.get(`/curated`, {
      params: {
        page: 1,
        per_page: 50,
      },
    })
    const curatedResults: ImagesResults = cur.data

    // Parse data with Zod schema

    // Add color values to the photos
    parsedData.photos = addColorValues(parsedData.photos, filterTerms)

    console.log(parsedData)

    return parsedData as PhotoItem[]
  } catch (error) {
    throw error
  }
}

export const filterTerms = ["purple", "green", "blue", "yellow", "red"]
