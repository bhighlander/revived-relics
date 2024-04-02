import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import MobileNavbar from "./ui/mobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {/* Implements both navbar and mobilenavbar components, will return based on screen size */}
        <Navbar />
        <MobileNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
