"use client";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950	`}
      >
        <QueryClientProvider client={queryClient}>
          <GoogleOAuthProvider clientId="547925249102-peqs356ts4psih266o2e3qcc15ip0pts.apps.googleusercontent.com">
            {children}
            <Toaster />
            <ReactQueryDevtools />
          </GoogleOAuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
