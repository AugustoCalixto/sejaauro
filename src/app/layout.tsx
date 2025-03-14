"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import WhatsappButton from "@/components/WhatsAppButton";
import Maintenance from "@/components/Maintence";
import { ChangeEvent, useEffect, useState } from "react";


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


  const changePass = (ev: ChangeEvent<HTMLInputElement>) => {
    if (ev.currentTarget.value == "@52b48") {
      setPass(true);
      localStorage.setItem("authenticated", "true");
    } else {
      setPass(false);
      localStorage.setItem("authenticated", "false");
    }
  }

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
