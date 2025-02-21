import { Geist, Geist_Mono } from "next/font/google";
import CursorEffect from "./CursorEffect";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Innewgen",
  description: "Innovate. Build. Transform.",
  icons: "/INNEWGEN.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
