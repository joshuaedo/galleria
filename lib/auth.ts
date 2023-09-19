import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

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
                session.user = {
                    id: token.id,
                    name: token.name || null,
                    email: token.email || null,
                    image: token.picture || null,
                    username: token.username || null,
                };
            }
    
            
            return session;
        },
        redirect(){
            return "/"
        }
    },

};

export const getAuthSession = () => getServerSession(authOptions);