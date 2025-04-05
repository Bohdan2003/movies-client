import { Header } from "@/components/Header/Header";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Regular, Medium, SemiBold, Bold
});


export const metadata: Metadata = {
  title: "Movies",
  description: "It`s the best movies service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} bg-black`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
