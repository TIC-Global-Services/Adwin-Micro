import type { Metadata } from "next";
import { Archivo, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adwin Global",
  description: "Welcome to Adwin Global, the international face of Unique Energos Pvt. Ltd., one of India’s fastest-growing manufacturers of power storage and solar energy solutions. With facilities in India, Nepal, and Sri Lanka, we produce 80,000+ batteries monthly and partner with leading global brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${openSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
