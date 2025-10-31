"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import WhatsappButton from "@/components/WhatsAppButton";
import * as pixel from "@/lib/fpixel";
import { ChangeEvent, useEffect, useState } from "react";
import Script from "next/script";
import FacebookPixel from "@/components/FacebookPixel";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "HeroCash Brasil - Maquininhas de Cartão com as Menores Taxas",
//   description: "A HeroCash Brasil oferece as maquininhas de cartão com as menores taxas do mercado. Soluções ideais para MEIs, autônomos e empresas que buscam vender mais e economizar nas taxas.",
//   icons: {
//     icon: '/favicon.ico'
//   }
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [pass, setPass] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("authenticated");
    if (auth == "true") {
      setPass(true)
    } else {
      setPass(false)
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <FacebookPixel />
      </head>
      <body className={inter.className}>
        {
          <ThemeProvider attribute="class">
            <Navbar />
            <div>{children}</div>
            <Footer />
            <WhatsappButton />
          </ThemeProvider>
        }
      </body>
    </html>
  );
}
