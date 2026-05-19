import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YOUR NAME · CS Student & Developer",
  description: "CS Student building at the intersection of systems, ML, and the web.",
  keywords: ["Computer Science", "Developer", "Portfolio", "Machine Learning", "Full Stack"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlexSans.className}>
      <body>{children}</body>
    </html>
  );
}
