import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/authProvider";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import toast, { Toaster } from 'react-hot-toast';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev links",
  description: "GURU Level challenge by Frontendmentor.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={cn(
          "min-h-screen bg-light-gray font-sans antialiased",
          fontSans.variable
        )}>
          {children}
          <Toaster
            position="bottom-center"
          />
        </body>
      </AuthProvider>
    </html>
  );
}
