import { ImagesSchemaWithPhotos, type ImagesResults } from "@/lib/models"
import { toast } from "@/hooks/use-toast"

import { axiosPexelsInstance } from "./axios"

export const fetchSearchPhotos = async (
  input: string
): Promise<ImagesResults | undefined> => {
  if (!input) return []

  try {
    const res = await axiosPexelsInstance.get(`/search`, {
      params: {
        page: 1,
        query: input,
      },
    })
    console.log(res)

    const imagesResults: ImagesResults = await res.json()

    console.log(imagesResults)

    //         // Parse data with Zod schema
    //         const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)

    //         if (parsedData.total_results === 0) return undefined

    //         return parsedData
  } catch (error) {
    // toast({
    //   description: "Error fetching photos",
    //   variant: "destructive",
    // });
    // console.log("Error fetching photos:", error);
    throw error
  }
}
