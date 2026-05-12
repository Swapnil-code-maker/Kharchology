import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import {
  ThemeProvider,
} from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kharchology",
  description:
    "Smart expense tracking and financial analytics platform",
};

export default function RootLayout({
  children,
}) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body
        className="min-h-full flex flex-col"
      >

        <ThemeProvider>

          {children}

          <Toaster
            position="top-right"
          />

        </ThemeProvider>

      </body>

    </html>
  );
}