import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andy Shen",
  description: "Software engineer, math educator, and avid reader.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " wrapper mt-8 mb-24"}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
