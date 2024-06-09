import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sendRequest } from "@/utils/api";
import { JWT } from "next-auth/jwt";

export const authOptions: AuthOptions = {
  secret: process.env.NO_SECRET,
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const res = await sendRequest<IBackendRes<JWT>>({
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
          method: 'POST',
          body: {
            username: credentials?.username,
            password: credentials?.password
          }
        })

        if (res && res.data) {
          // Any object returned will be saved in `user` property of the JWT
          return res.data as any;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, trigger }) => {

      // Login with social media
      if (trigger === 'signIn' && account?.provider !== 'credentials') {

        // Call API login social media (Github)
        const res = await sendRequest<JWT>({
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login-social`,
          method: 'POST',
          body: {
            type: account?.provider.toLocaleUpperCase(),
            name: user.name,
            email: user.email,
          }
        })

        if (res) {
          token.access_token = res.access_token;
          token.user = res.user;
        }
      }

      // Login with Credentials
      if (trigger === 'signIn' && account?.provider === 'credentials') {
        // local data
        // @ts-ignore
        token.access_token = user.access_token;
        // @ts-ignore
        token.user = user.user;
      }
      return token;
    },
    session: ({ session, token, user }) => {
      if (token) {
        session.access_token = token.access_token;
        session.user = token.user;
      }
      return session;
    }
  }
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }