import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ResumeBuilder Pro - Create & Export Beautiful Resumes Instantly",
  description:
    "Create ATS-optimized resumes with our professional markdown-based builder. Trusted by corporate professionals worldwide.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "resume builder",
    "markdown resume",
    "pdf resume generator",
    "tech resume builder",
    "developer resume tool",
    "online resume",
    "markdown cv",
  ],
  authors: [
    { name: "Isabel Muñiz", url: "https://im-devportfolio.netlify.app/" },
  ],
  openGraph: {
    title: "Markdown Resume Builder",
    description:
      "Write your resume in Markdown and export it as a clean, professional PDF.",
    url: "https://yourdomain.com",
    siteName: "Markdown Resume Builder",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Markdown Resume Builder Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markdown Resume Builder",
    description:
      "A fast and free way to create beautiful resumes with Markdown.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
