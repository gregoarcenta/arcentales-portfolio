import { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Inter, Space_Grotesk } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Desarrollador Web Full Stack",
  description:
    "Portfolio profesional de desarrollador web moderno con proyectos destacados y blog técnico",
  authors: [{ name: "Developer Portfolio" }],
  openGraph: {
    title: "Portfolio | Desarrollador Web Full Stack",
    description: "Lovable Generated Project",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"]
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"]
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
