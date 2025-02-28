import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Vyber potřebné varianty
  variable: "--font-poppins", // Definuje CSS proměnnou
});

export const metadata: Metadata = {
  title: "Overtheseas",
  description: "Your study abroad companion",
  icons: {
    icon:  "/ots-logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
      <link rel="icon" href="/ots-logo.png" sizes="32x32" type="image/x-icon" />
      </head>
      <body>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
