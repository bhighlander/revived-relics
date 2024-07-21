import type { Metadata } from "next";
import { Belleza } from "next/font/google";
import "./../globals.css";
import Navbar from "../homeUi/navbar";
import Footer from "../homeUi/footer";
import MobileNavbar from "../homeUi/mobileNav";
import Image from "next/image";

// sets global font to Belleza using google fonts
const inter = Belleza({ 
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Revived Relics",
  description: "Restoring life to the things you love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <head>
        <title>Revived Relics</title>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="home-body flex-grow">
          <div className="navbar-container">
            <div className="menu-button">
              <MobileNavbar />
            </div>
            <div className="nav-logo-mobile">
              <Image src="/logotransparent.png" width={80} height={80} alt="Revived Relics" />
            </div>
            <Navbar />
          </div>
        </div>
        <main className="flex-grow p-4">{children}</main>
        <footer className="footer">
          <Footer />
        </footer>
      </body>
    </html>
    </>
  );
}
