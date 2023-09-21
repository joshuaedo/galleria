import { auth } from "@/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import type { NextAuthOptions } from "next-auth/index"
import NextAuth, { getServerSession } from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},

      async authorize(credentials): Promise<any> {
        try {
          const userCredentials = await signInWithEmailAndPassword(
            auth,
            (credentials as any).email || "",
            (credentials as any).password || ""
          )

          if (userCredentials.user) {
            return Promise.resolve(userCredentials.user)
          }

          return Promise.resolve(null)
        } catch (error) {
          console.error(error)
          return Promise.resolve(null)
        }
      },
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
