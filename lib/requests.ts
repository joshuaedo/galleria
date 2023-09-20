import { ImagesSchemaWithPhotos, type ImagesResults } from "@/lib/models"
import { toast } from "@/hooks/use-toast"

import { axiosPexelsInstance } from "./axios"

export const fetchPhotos = async (): Promise<ImagesResults | undefined> => {
  try {
    const cur = await axiosPexelsInstance.get(`/curated`, {
      params: {
        page: 1,
        per_page: 40,
      },
    })
    const curatedResults: ImagesResults = cur.data

    console.log(cur.data)

    const cat = await axiosPexelsInstance.get(`/search`, {
      params: {
        page: 1,
        query: "Cats",
      },
    })
    const searchResults: ImagesResults = cat.data

    console.log(cat.data)

    // Parse data with Zod schema
    const parsedData = ImagesSchemaWithPhotos.parse(curatedResults)

    return parsedData
  } catch (error) {
    throw error
  }
}

export const searchTerms = [
  "Cats",
  "Beach",
  "Nature",
  "Sunset",
  "Food",
  "Travel",
  "Flowers",
  "Cars",
  "Technology",
  "Love",
]
