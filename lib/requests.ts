import { Photo } from "@/types/unsplash";
import { createApi } from "unsplash-js";
import { toast } from "@/hooks/use-toast";

const api = createApi({
  // accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  accessKey: 'JNMzh82UOTRmT5cjZp15n-DKPzC5lqrPbAI83stoatQ',
});

export const fetchGalleriaPhotos = async (input: string) => {
  if (!input) return [];

  try {
   const data = await api.search
    .getPhotos({ query: input, orientation: 'landscape' })

      console.log(data.data.results);
      // return data.response.results as Photo[];

  } catch (error) {
    toast({
      description: "Error fetching photos",
      variant: "destructive",
    });
    console.log("Error fetching photos:", error);
  }
};






