import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import {nanoid} from "nanoid";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/sign-in'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user = session.user || {}; // Initialize session.user if it doesn't exist
                session.user.id = token.id as string | null | undefined;
                session.user.name = token.name || null;
                session.user.email = token.email || null;
                session.user.username = token.username as string | null | undefined;
                session.user.image = token.picture || null;
            }
            return session;
        },
        redirect(){
            return "/"
        }
    },

};

export const getAuthSession = () => getServerSession(authOptions);