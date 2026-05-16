import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/app/data/portfolio";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personal.name} | CS Student & Developer`,
  description: personal.tagline,
  keywords: ["Computer Science", "Developer", "Portfolio", "Full Stack", "Machine Learning"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${jetbrainsMono.className} min-h-full bg-[#050a0e] text-[#e2e8f0]`}>
        {children}
      </body>
    </html>
  );
}
