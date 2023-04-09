import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      clientId: process.env.REACT_APP_ClientID as string,
      clientSecret: process.env.REACT_APP_ClientSecret as string,
    }),
  ],
  secret: "hello",
};

export default NextAuth(authOptions);
