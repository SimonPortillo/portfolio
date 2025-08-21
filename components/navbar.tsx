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
    <div className="sticky top-0 w-full bg-background/95 backdrop-blur-sm z-50">
      <div className="flex items-center justify-between w-full">
        {/* Left section - empty for balance */}
        <div className="flex-1 flex justify-start">
          {/* Empty div for flex balance */}
        </div>

        {/* Center section - Navigation */}
        <div className="flex-1 flex justify-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          href="/projects"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Group Projects Overview
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Explore the various projects we&apos;ve developed throughout our academic journey.
                            Each project demonstrates different skills and technologies.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/projects/project_1" title="Kartverket Reporting System">
                      A full stack C# .NET application for reporting errors in geospatial data.
                    </ListItem>
                    <ListItem href="/projects/project_2" title="NukeTown">
                      An emergency shelter finder app built with React helping users find nearby shelters during crises.
                    </ListItem>
                    <ListItem href="/projects/project_3" title="In progress">
                      Coming soon! 
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About</Link>
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
