import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "ResumeBuilder Pro - Professional Resume Builder",
  description: "Create ATS-optimized resumes with our professional markdown-based builder. Trusted by corporate professionals worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-gray-50 text-gray-900 min-h-screen antialiased font-sans"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
