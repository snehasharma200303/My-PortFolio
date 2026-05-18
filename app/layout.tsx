import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Sneha Sharma | Full Stack Developer",
  description:
    "Portfolio of Sneha Sharma — Software Engineering undergraduate specialising in React.js, Node.js, and full-stack web development.",
  keywords: ["Sneha Sharma", "Full Stack Developer", "React.js", "Node.js", "Portfolio"],
  authors: [{ name: "Sneha Sharma" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      {/* ivory background set globally */}
      <body className="antialiased bg-ivory-50 text-ink-900 overflow-x-hidden">
        {children}
       
      </body>
    </html>
  );
}
