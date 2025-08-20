import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Portfolio website",
  description: "Showcasing my work and projects",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
        <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
