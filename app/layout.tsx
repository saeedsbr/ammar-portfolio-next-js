import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Talha Saeed · Full-Stack Developer & Architect",
  description: "Full-Stack Developer & Architect based in Lahore, Pakistan. Expert in Java, Spring Boot, Next.js, and Laravel — building enterprise-grade systems.",
  keywords: ["Full-Stack Developer", "Java", "Spring Boot", "Next.js", "Laravel", "TypeScript", "Portfolio", "Lahore", "Pakistan"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlexSans.className}>
      <body>{children}</body>
    </html>
  );
}
