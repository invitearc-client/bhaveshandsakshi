import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garimaandvishal.vercel.app/"),

  openGraph: {
    title: "Garima Weds Vishal",
    description: "Join as they begin their forever. 30 & 31 January, 2027",
    url: "https://garimaandvishal.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Garima Weds Vishal",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Garima Weds Vishal",
    description: "Join as they begin their forever. 30 & 31 January, 2027",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://garimaandvishal.vercel.app/og.jpg",
    "og:image:type": "image/jpeg",
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
