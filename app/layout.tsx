"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import NavbarWrapper from "./components/NavbarWrapper";
import QueryClientContextProvider from "./components/QueryClientContextProvider";
import { Auth0Provider } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const onRedirectCallBack = (appState: any) => {
    router.push(
      appState && appState.returnTo
        ? appState.returnTo
        : "http://localhost:3000/"
    );
  };
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Auth0Provider
          domain="dev-7krhoqox642nn4l8.us.auth0.com"
          clientId="GHVmEVShIrj1IIC2irsjS3BEPEVDB9Iy"
          authorizationParams={{
            redirect_uri: "http://localhost:3000/",
            audience: "http://localhost:3001/",
          }}
          onRedirectCallback={onRedirectCallBack}
          cacheLocation="localstorage"
        >
          <QueryClientContextProvider>
            <NavbarWrapper />
            {children}
          </QueryClientContextProvider>
        </Auth0Provider>
      </body>
    </html>
  );
}
