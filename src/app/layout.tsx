import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayur Heals",
  description: "Ayur Heals Website's",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} `}>
      <body className="min-h-screen ">
        <Navbar />

        <div className="container h-full pt-24 max-w-[1380px] mx-auto ">
          {children}
        </div>
      </body>
    </html>
  );
}
