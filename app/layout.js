import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  icons: "/INNEWGEN.ico",
  description:
    "Innovate. Build. Transform. We provide cutting-edge technology solutions, AI integration, web and mobile development, and digital innovation services.",
  keywords:
    "Innewgen, technology solutions, AI development, web development, mobile apps, digital transformation, software solutions, IT services, startup, business growth, branding, innovation",
  author: "Innewgen",
  robots: "index, follow",
  url: "https://innewgen.vercel.app",
  openGraph: {
    title: "Innewgen - Innovate. Build. Transform.",
    description:
      "Empowering businesses with cutting-edge AI solutions, web development, and digital transformation.",
    url: "https://innewgen.vercel.app",
    type: "website",
    image: "https://innewgen.vercel.app/preview.jpg",
    site_name: "Innewgen",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innewgen - Innovate. Build. Transform.",
    description:
      "We specialize in web development, AI solutions, mobile apps, and full-stack development to bring your ideas to life.",
    image: "https://innewgen.vercel.app/preview.jpg",
    creator: "@Innewgen",
  },
  facebook: {
    facebook: "https://www.facebook.com/Innewgen.Official",
  },
  instagram: {
    profile: "https://www.instagram.com/innewgen.official/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content={metadata.keywords}
        />
        <meta
          name="author"
          content={metadata.author}
        />
        <meta
          name="robots"
          content={metadata.robots}
        />
        <meta
          property="og:title"
          content={metadata.openGraph.title}
        />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta
          property="og:url"
          content={metadata.openGraph.url}
        />
        <meta
          property="og:type"
          content={metadata.openGraph.type}
        />
        <meta
          property="og:image"
          content={metadata.openGraph.image}
        />
        <meta
          property="og:site_name"
          content={metadata.openGraph.site_name}
        />
        <meta
          name="twitter:card"
          content={metadata.twitter.card}
        />
        <meta
          name="twitter:title"
          content={metadata.twitter.title}
        />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta
          name="twitter:image"
          content={metadata.twitter.image}
        />
        <meta
          name="twitter:creator"
          content={metadata.twitter.creator}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorEffect />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
