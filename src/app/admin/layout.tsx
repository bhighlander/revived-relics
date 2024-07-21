import type { Metadata } from "next";
import { Belleza } from "next/font/google";

const inter = Belleza({ 
  weight: '400',
  style: 'normal',
  subsets: ['latin']
  });

export const metadata: Metadata = {
  title: "Revived Relics Admin Page",
  description: "Admin area for the Revived Relics project",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
