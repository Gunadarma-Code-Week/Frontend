import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { signInService } from "@/services/auth";

const handler = NextAuth({
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

          console.log("SignIn Service Response:", response);

          if (response && response.data) {
            const user = {
              id: response.data.id,
              email: response.data.email,
              access_token: response.data.access_token,
            };
            return user;
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
  ],
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
