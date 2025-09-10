"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <div className="sticky top-0 w-full bg-background/50 backdrop-blur-sm z-50 border-b border-border/40">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center w-full py-2">
          {/* Left section - empty for balance */}
          <div className="justify-self-start">
            {/* Empty div for balance */}
          </div>

          {/* Center section - Navigation */}
          <div className="justify-self-center">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/">Hjem</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Prosjekter</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href="/projects"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium">
                              Oversikt over gruppeprosjekter
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              Utforsk de ulike prosjektene vi har utviklet gjennom vår akademiske reise.
                              Hvert prosjekt demonstrerer forskjellige ferdigheter og teknologier.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/projects/project_1" title="Kartverket Reporting System">
                        En full-stack C# .NET applikasjon for rapportering av feil i kartdata.
                      </ListItem>
                      <ListItem href="/projects/project_2" title="NukeTown">
                        En app for å finne nærmeste tilfluktsrom i en nødsituasjon.
                      </ListItem>
                      <ListItem href="/projects/project_3" title="Teknologiradar">
                        En teknologiradar som konsept for Digin.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/about">Om oss</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right section - Theme Toggle */}
          <div className="flex-1 flex justify-end">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between py-3">
          <div className="font-semibold text-lg">Portfolio</div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hjem
              </Link>
              <Link 
                href="/projects" 
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prosjekter
              </Link>
              <div className="px-3 py-1">
                <div className="text-sm font-medium text-muted-foreground mb-2">Spesifikke prosjekter:</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    href="/projects/project_1" 
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Kartverket Reporting System
                  </Link>
                  <Link 
                    href="/projects/project_2" 
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    NukeTown
                  </Link>
                  <Link 
                    href="/projects/project_3" 
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Teknologiradar
                  </Link>
                </div>
              </div>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Om oss
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
