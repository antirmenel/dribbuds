import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "DRIBBUDS",
  description: "Experience seamless creative collaboration with DRIBBUDS — where ideas meet rhythm and innovation.",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
