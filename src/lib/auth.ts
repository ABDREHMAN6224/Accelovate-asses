import { PrismaAdapter } from "@auth/prisma-adapter"
import { AuthOptions } from "next-auth"
import { prisma } from "./db"
import Google from "next-auth/providers/google"
import Email from "next-auth/providers/email"

export const authOptions:AuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers:[
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
        }),
        // Email({
        //     server: {
        //       host: process.env.EMAIL_SERVER_HOST!,
        //       port: parseInt(process.env.EMAIL_SERVER_PORT!),
        //       auth: {
        //         user: process.env.EMAIL_SERVER_USER!,
        //         pass: process.env.EMAIL_SERVER_PASSWORD!,
        //       },
        //     },
        //     from: process.env.EMAIL_FROM!,
        //     maxAge: 24 * 60 * 60, 
        //   }),

    ],
    session:{
        strategy:"jwt"
    },
    pages:{
        signIn:"/signin",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                // @ts-ignore
                session.user.id = token.id;
            }
            return session;
        },
    },
}