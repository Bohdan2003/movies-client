import type { Metadata } from "next";

//components
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

//style
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
      <div className="flex flex-col min-h-[100vh]">
        <Header/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </div>
      </body>
    </html>
  );
}
