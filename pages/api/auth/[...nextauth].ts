// @ts-nocheck
import NextAuth, { NextAuthOptions } from "next-auth"
import TwitchProvider from "next-auth/providers/twitch";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../db";

{/* REFRESHING TWITCH TOKEN TO PRESERVE USER LOGIN LIFE*/}
async function refreshAccessToken(token: any) {
  try {
    const url = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=refresh&refresh_token=${token.refreshToken}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: `client_id=${process.env.TWITCH_CLIENT_ID}, client_secret=${process.env.TWITCH_SECRET}, grant_type=refresh, refresh_token=${token.refreshToken}`,
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_at * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID || "",
      clientSecret: process.env.TWITCH_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],

  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  session: {
    strategy: "jwt",
    maxAge: 10000,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          role: user.role,
          id: user.id,
          accessToken: account?.access_token,
          accessTokenExpires: Date.now() + account?.expires_at * 1000,
          //@ts-ignore
          refreshToken: account?.refresh_token,
          user,
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      return refreshAccessToken(token);
    },

    async session({ session, token, user }) {
      session.user.role = token.role;
      session.user = token.user,
      session.user.id = token?.id;
      //session.accessToken = token?.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions)