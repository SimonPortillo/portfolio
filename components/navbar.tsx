"use client"

import * as React from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator";

export function Navbar() {
  return (
    <div className="sticky top-0 w-full bg-background/60 backdrop-blur-sm z-50">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full">
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
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
        <div className="flex-1 flex justify-end pr-4">
          <ThemeToggle />
        </div>
      </div>
      <Separator className="" />
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
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
