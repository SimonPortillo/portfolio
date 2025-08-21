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
    <>
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
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Portfolio Website
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Built with Next.js and shadcn/ui, this portfolio showcases my work and projects.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="placeholder">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis, cumque id minus tempora architecto cum similique aperiam quas beatae iusto assumenda excepturi eum totam doloremque ullam temporibus veniam quo?
                    </ListItem>
                    <ListItem href="/docs/installation" title="placeholder">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis voluptatem inventore. Enim hic provident nihil illo, est minus alias nesciunt in molestiae earum non nemo repudiandae rerum recusandae nostrum?
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="">
                      dynamically fetch github repos from github api
                    </ListItem>
                    <ListItem href="">
                      test
                    </ListItem>
                    <ListItem href="">
                      test
                    </ListItem>
                    <ListItem href="">
                      test
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
    </>
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
