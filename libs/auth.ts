import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/User.model";
import { Connectdb } from "./Configdb";
import bcrypt from "bcrypt"
import GoogleProvider from "next-auth/providers/google";

import FacebookProvider from "next-auth/providers/facebook";
export const authOptions: NextAuthOptions = {

    providers: [
        CredentialsProvider({
            name: "credentials",

            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                if (!credentials) return null;

                await Connectdb();

                const user = await User.findOne({
                    email: credentials.email,
                });

                if (!user) return null;

                const isMatch = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isMatch) return null;

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar
                };
            },
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT,
            clientSecret: process.env.CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }

            }

        }),

        FacebookProvider({
            clientId: process.env.FB_ID!,
            clientSecret: process.env.FB_SECRET!,
        })
    ],
    callbacks: {
        async jwt({ token, user }) {

            if (user) {
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.avatar = (user as any).avatar
            }
            return token
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.name = token.name as string
                session.user.email = token.email as string
                session.user.avatar = token.avatar as string
            }
            return session
        },
    },

    pages: {
        signIn: "/login"
    },
    session: { strategy: "jwt" },

    secret: process.env.NEXTAUTH_SECRET,
};
