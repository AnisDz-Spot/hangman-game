import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GameBG from "@/components/GameBG";

const specialElite = localFont({
  src: [
    { path: "./fonts/special-elite-regular.woff", weight: "400" },
    { path: "./fonts/special-elite-regular.woff2", weight: "400" },
    { path: "./fonts/special-elite-regular.ttf", weight: "400" },
  ],
  variable: "--font-elite",
});

export const metadata: Metadata = {
  title: "Whispered Words",
  description: "Hidden words. Fading chances. How long can you keep alive?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${specialElite.variable} w-screen overflow-x-hidden antialiased`}
      >
        <GameBG />
        <div className="relative z-10 w-full flex flex-col justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
