"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="w-full bg-background/60 backdrop-blur-sm mt-auto">
      <Separator />
      <div className="container py-6 px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between w-full">
            <div className="flex items-center gap-6 flex-wrap justify-center">
                <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                    src="/next.svg" 
                    alt="Next.js Logo" 
                    width={100} 
                    height={25} 
                    className="dark:filter dark:invert" 
                />
                </Link>
                <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                    src="/vercel.svg" 
                    alt="Vercel Logo" 
                    width={30} 
                    height={18} 
                    className="filter invert dark:invert-0" 
                />
                </Link>
                <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                    src="/shadcn.svg" 
                    alt="Shadcn UI Logo" 
                    width={32} 
                    height={19} 
                    className="dark:filter dark:invert" 
                />
                </Link>
            
                <Link href="https://www.uia.no" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image 
                    src="/uia.svg" 
                    alt="UiA Logo" 
                    width={80} 
                    height={10} 
                    className="filter invert dark:invert-0" 
                />
                </Link>
                
            </div>  
        </div>
        <span className="mono text-muted-foreground">
        &copy; {new Date().getFullYear()} Simon Portillo.
        </span>
    </div>
    
    </footer>
  )
}
