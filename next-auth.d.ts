import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    name: string
    image: string
  }

  interface Session {
    user: {
      name: string
      image: string
    }
  }
}
