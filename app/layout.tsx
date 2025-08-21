import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Portfolio website",
  description: "Showcasing my work and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
