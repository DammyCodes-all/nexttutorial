import type { Metadata } from "next";
import "@/app/index.css";
import { NavBar } from "@/components/navbar";
export const metadata: Metadata = {
  title: { default: "NextJs tutorial", template: "%s | nextTut" },
  description: "Empty for now",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased w-full min-h-screen bg-white`}>
        <NavBar />
        <div className="pt-5 h-full">{children}</div>
      </body>
    </html>
  );
}
