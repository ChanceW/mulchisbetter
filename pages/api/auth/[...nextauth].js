import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (
          credentials.email === "office@mulchisbetter.com" &&
          credentials.password === "admin"
        ) {
          return true;
        }
        return null;
      },
    }),
  ],
});
