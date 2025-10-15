"use server";
import { auth } from "@/lib/auth";
export const signUp = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  // try
  const res = await auth.api.signInEmail({
    body: { email, password, callbackURL: "/dashboard" },
    asResponse: true,
  });
};
