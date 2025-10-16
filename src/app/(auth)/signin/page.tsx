"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const { error } = await authClient.signUp.email({
      email,
      password,
      name,
      callbackURL: "/jokes",
    });
    if (error) {
      return console.log("Error:", error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      newUserCallbackURL: "/dashboard",
      callbackURL: "/jokes",
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Sign in to continue</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6">
          <Button
            variant="outline"
            className="w-full h-11"
            onClick={handleGoogleSignIn}
          >
            <GoogleIcon className="mr-2 h-5 w-5" />
            Continue with Google
          </Button>

          <div className="relative">
            <Separator />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="bg-background px-3 text-xs text-muted-foreground">
                or continue with email
              </span>
            </span>
          </div>

          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
          >
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Jane Doe"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="mt-2 h-11">
              Sign in
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground">
            By continuing, you agree to our Terms and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.24 1.3-1.67 3.8-5.5 3.8-3.32 0-6.02-2.75-6.02-6.1S8.68 5.7 12 5.7c1.9 0 3.18.8 3.9 1.5l2.65-2.56C17.19 3.3 14.8 2.4 12 2.4 6.98 2.4 2.9 6.5 2.9 11.6S6.98 20.8 12 20.8c6.96 0 8.1-4.9 8.1-7.1 0-.48-.05-.78-.12-1.12H12z"
      />
    </svg>
  );
}
