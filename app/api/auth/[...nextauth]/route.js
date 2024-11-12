import NextAuth from 'next-auth/next'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github"; 
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/user';
import bcrypt from 'bcryptjs'; 

export const authoptions = NextAuth({
  providers: [
    CredentialsProvider({
      name : 'Credentials',
      credentials : {},

      async authorize(credentials){
        const {email, password} = credentials;
        try {
          await connectToDatabase();
          const user = await User.findOne({email}); 

          if(!user) return null;

          const passwordMatch = await bcrypt.compare(password, user.password); 

          if(!passwordMatch) return null;
           
          return user;
          
        } catch (error) {
          console.log("Error", error);
          
        }

      }
    }),

    // OAuth authentication providers...
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    TwitterProvider({
    clientId: process.env.TWITTER_ID,
    clientSecret: process.env.TWITTER_SECRET,
    version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, 
  pages :{
    signIn : "/",
  },

})

export { authoptions as GET, authoptions as POST }