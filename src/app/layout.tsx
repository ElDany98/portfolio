import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Meza | Cloud Architect · Platform Engineer · AI Engineering",
  description:
    "De infraestructura a IA. Portfolio profesional de Daniel Meza — Cloud Architect con base en infraestructura real, full-stack y automatización.",
  openGraph: {
    title: "Daniel Meza — Portfolio Profesional",
    description:
      "Cloud Architect · Platform Engineer · AI Engineering. Construyo sistemas que transforman incertidumbre en control.",
    type: "website",
    locale: "es_MX",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
