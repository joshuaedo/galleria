import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    name: string | null
    image: string | null
  }

  interface Session {
    user: {
      name: string | null
      image: string | null
    }
  }
}
