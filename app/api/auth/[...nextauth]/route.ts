import type { NextAuthOptions } from "next-auth/index"
import NextAuth, { getServerSession } from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
},
pages: {
    signIn: '/'
},
providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
],
callbacks: {
    async session({ token, session }: any) {
        if (token) {
            session.user.id = token.id
            session.user.name = token.name
            session.user.email = token.email
            session.user.username = token.username
            session.user.image = token?.picture
        }

        return session;
    },
    redirect(){
        return "/"
    }
},

}

const handler = NextAuth(authOptions)

export const getAuthSession = (req: any, res: any) => getServerSession(req, res, authOptions)

export { handler as GET, handler as POST }
