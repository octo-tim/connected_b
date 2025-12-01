import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "connectedB",
  description: "데이터 기반 육아 플랫폼",
};

import { AuthProvider } from "@/context/AuthContext";
import { PurchaseProvider } from "@/context/PurchaseContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable} suppressHydrationWarning={true}>
        <AuthProvider>
          <PurchaseProvider>
            <div className="container">
              {children}
            </div>
          </PurchaseProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
