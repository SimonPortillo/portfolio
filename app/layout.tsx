import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer"
import { sans, serif, mono } from "@/fonts/fonts";
import { Background } from "@/components/background";

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
    <html lang="no" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {/* Background Effect */}
          <Background />
          
          {/* Main Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
