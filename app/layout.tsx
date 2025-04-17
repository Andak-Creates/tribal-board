import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideNav from "./ui-comps/SideNav";
import TopBar from "./ui-comps/topBar";
import LayoutWrapper from "./ui-comps/layoutWrapper";
import ClientWrapper from "./ui-comps/ClientWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
