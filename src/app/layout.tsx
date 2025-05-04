import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'
import WhatsAppButton from "@/components/WhatsappButton"; // Import the new component


const neueMachina = localFont({
  src: '../assets/fonts/NeueMachina-Ultrabold.otf',
  variable: '--font-neue'
});

const segoe = localFont({
  src: '../assets/fonts/SegoeUI.ttf',
  variable: '--font-segoe'
});

const agrandir = localFont({
  src: '../assets/fonts/Agrandir-Regular.otf',
  variable: '--font-agrandir'
});

const agrandirHeavy = localFont({
  src: '../assets/fonts/Agrandir-GrandHeavy.otf',
  variable: '--font-agrandir-heavy'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const ibm = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm'
});

export const metadata: Metadata = {
  title: "BasicTech - Software Development Services",
  description: "Custom software development solutions for your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueMachina.variable} ${segoe.variable} ${agrandir.variable} ${ibm.variable} ${inter.variable} ${agrandirHeavy.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

