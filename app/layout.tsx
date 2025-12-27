import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/app/fonts";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import "./globals.css";


export const metadata: Metadata = {
  // ========== INFO BASICA ==========
  title: {
    default: "Gregory Arcentales | Full Stack Developer",
    template: "%s | Gregory Arcentales",
  },

  description:
    "Portfolio de Gregory Arcentales. Desarrollador Full Stack especializado en React, Angular, Node.js, Java y otras tecnologias. Experiencia en desarrollo web moderno y arquitecturas escalables.",

  // ========== SEO ==========
  keywords: [
    "desarrollador full stack",
    "React",
    "Angular",
    "Node.js",
    "Java",
    "Spring Boot",
    "portafolio",
    "developer",
    "Ecuador",
  ],
  authors: [{ name: "Gregory Arcentales", url: "https://arcentales.dev" }],
  creator: "Gregory Arcentales",
  publisher: "Gregory Arcentales",

  // ========== URL Y CANONICAL ==========
  // metadataBase: new URL("https://tudominio.com"),
  alternates: {
    canonical: "https://arcentales.dev",
    languages: {
      "es-EC": "/es",
      "en-US": "/en",
    },
  },

  // ========== OPEN GRAPH (Facebook, LinkedIn, WhatsApp, Discord) ==========
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://arcentales.dev",
    title: "Gregory Arcentales | Full Stack Developer",
    description:
      "Portfolio profesional con proyectos destacados en desarrollo web full stack",
    siteName: "Gregory Arcentales Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dy7luvgd5/image/upload/v1766855814/portfolio/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Alexander Arcentales - Full Stack Developer",
        type: "image/png",
      },
    ],
  },
  // ========== TWITTER/X ==========
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@tu_usuario", // Tu usuario de Twitter
  //   creator: "@tu_usuario",
  //   title: "Alexander Arcentales | Full Stack Developer",
  //   description: "Portfolio profesional con proyectos destacados",
  //   images: {
  //     url: "/twitter-image.jpg", // 1200x600px
  //     alt: "Alexander Arcentales - Full Stack Developer",
  //   },
  // },

  // ========== ICONOS ==========
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  // ========== CATEGORIZACIÓN ==========
  category: "technology",

  // ========== OTROS ==========
  referrer: "origin-when-cross-origin",

  // ========== ARCHIVES (si tienes un blog con archivo de posts) ==========
  // archives: ["/blog/2024", "/blog/2023"],

  // ========== ASSETS (si quieres precargar recursos) ==========
  // assets: ["https://cdn.ejemplo.com"],

  // ========== BOOKMARKS (raramente usado) ==========
  // bookmarks: ["/proyectos", "/blog"],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es">
    <body className={`${inter.className} ${spaceGrotesk.className}`}>
    <Navbar />
    <main>{children}</main>
    <Footer />
    </body>
    </html>
  );
}
