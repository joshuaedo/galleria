export type UnsplashPhoto = {
  id: number
  width: number
  height: number
  urls: { large: string; regular: string; raw: string; small: string }
  color: string | null
  user: {
    username: string
    name: string
  }
}

export type PhotoItem = {
  alt: string
  src: {
    large: string
  }
  color: string
  id: number
}
