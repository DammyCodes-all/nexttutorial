import { betterAuth } from "better-auth";
import db from "@/index";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "../../auth-schema";
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      enabled: true,
      clientId: process.env.GOOGLE_CLIENT_ID!,
    },
  },
});
