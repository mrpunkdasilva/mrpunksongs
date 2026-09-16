import type { Metadata } from "next";
import { Inria_Sans, Protest_Guerrilla } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer/footer.component";
import { HamburgerMenu } from "@/components/hamburger-menu/hamburger-menu.component";
import { PsychedelicBg } from "@/components/psychedelic-bg/psychedelic-bg.component";
import { FloatingShapesCanvas } from "@/components/floating-shapes/floating-shapes.component";

const inriaSans = Inria_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const protestGuerrilla = Protest_Guerrilla({
  variable: "--font-protest-guerrilla",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mr Punk's Songs",
  description: "Site oficial de Mr Punk da Silva - Músicas, streaming e mais.",
  keywords: ["Mr Punk da Silva", "música", "spotify", "tiktok", "streaming"],
  openGraph: {
    title: "Mr Punk's Songs",
    description: "Site oficial de Mr Punk da Silva - Músicas, streaming e mais.",
    type: "website",
    locale: "pt_BR",
    siteName: "Mr Punk's Songs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Punk's Songs",
    description: "Site oficial de Mr Punk da Silva - Músicas, streaming e mais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inriaSans.variable} ${protestGuerrilla.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <PsychedelicBg />
        <FloatingShapesCanvas />
        <HamburgerMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
