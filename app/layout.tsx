import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benny Mansell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
