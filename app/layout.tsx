import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dross:Network - Aviation, SEO & Digital Products",
  description:
    "A collection of digital products and services by Alexander Dross, spanning aviation technology, SEO services, web performance, and more.",
  keywords: [
    "Dross Network",
    "Aviation",
    "SEO",
    "Digital Products",
    "Alexander Dross",
    "Web Performance",
    "AIP",
    "Aircraft Marketplace",
  ],
  authors: [{ name: "Alexander Dross" }],
  creator: "Alexander Dross",
  publisher: "Dross:Network",
  metadataBase: new URL("https://v0.dross.net"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://v0.dross.net",
    title: "Dross:Network - Aviation, SEO & Digital Products",
    description: "A collection of digital products and services spanning aviation, SEO, and web technology.",
    siteName: "Dross:Network",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dross:Network",
    description: "Aviation, SEO & Digital Products",
    creator: "@drossnetwork",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
