import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer"
import { sans, serif, mono } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Portfolio website",
  description: "Portfolio website built with Next.js, TypeScript, and Shadcn UI.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
      <div className="flex flex-col min-h-screen">
        <Navbar />
          {children}
        <Footer />
      </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
