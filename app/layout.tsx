import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Lora, Roboto_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Portfolio website",
  description: "Showcasing my work and projects",
};

// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-sans'
// })

// const lora = Lora({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-serif'
// })

// const robotoMono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-mono'
// })

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
        <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
