import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import NavbarWrapper from "./components/NavbarWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins", 
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
      <body>
      <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
