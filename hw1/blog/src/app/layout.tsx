import type { Metadata } from "next";
import {Golos_Text, Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const font = Golos_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
  description: "Blog app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={font.className}>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
