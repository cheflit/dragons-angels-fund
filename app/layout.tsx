import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dragons & Angels Fund",
  description: "Invest in the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
