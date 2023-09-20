import { Photo } from "@/types/unsplash";
import { toast } from "@/hooks/use-toast";
import { axiosPexelsInstance } from "./axios";

export const fetchSearchPhotos = async (input: string) => {
  if (!input) return [];

  try {
    const res = await axiosPexelsInstance.get(
      `/searchs`, {
        params: {
          page: 1,
          query: input,
        }
      }
    );
    console.log(res)
    // return data.results as Photo[]

  } catch (error) {
    toast({
      description: "Error fetching photos",
      variant: "destructive",
    });
    console.log("Error fetching photos:", error);
  }
};

export const fetchCuratedPhotos = async () => {

  try {
    const res = await axiosPexelsInstance.get(
      `/curated`, {
        params: {
          page: 1,
        }
      }
    );
    console.log(res)
    // return data.results as Photo[]

  } catch (error) {
    toast({
      description: "Error fetching photos",
      variant: "destructive",
    });
    console.log("Error fetching photos:", error);
  }
};






