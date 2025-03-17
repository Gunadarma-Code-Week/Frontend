"use server";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { signInService } from "@/services/auth";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "m@example.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials?.email || !credentials?.password) {
            console.error("Email or password is missing");
            return null;
          }

          const user = {
            email: credentials.email,
            password: credentials.password,
          };

          const response = await signInService(user);

          if (response && response.data) {
            const userData = {
              id: response.data.Data.id,
              email: response.data.Data.email,
              access_token: response.data.Data.access_token,
            };

            return userData;
          } else {
            console.error("Invalid credentials or no user data returned");
            return null;
          }
        } catch (error) {
          console.error("Error during sign-in:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(
        /\\n/g,
        "\n"
      ),
    }),
  }),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
