import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PROFILE } from "@/constants/profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${PROFILE.name} · ${PROFILE.title}`,
  description: `${PROFILE.title} · ${PROFILE.primaryStack}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
