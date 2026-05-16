import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YOUR NAME — CS Student & Developer",
  description: "CS Student building at the intersection of systems, ML, and the web.",
  keywords: ["Computer Science", "Developer", "Portfolio", "Machine Learning", "Full Stack"],
  openGraph: {
    title: "YOUR NAME — CS Student & Developer",
    description: "CS Student building at the intersection of systems, ML, and the web.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        style={{
          background: "#050B14",
          color: "#FFFFFF",
          fontFamily: "var(--font-body), sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
