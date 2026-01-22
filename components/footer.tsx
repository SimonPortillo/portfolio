"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="w-full mt-auto">
      <Separator />
      <div className="container py-4 sm:py-6 px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between w-full">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link
              href="https://www.uia.no"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/uia.svg"
                alt="UiA Logo"
                width={64}
                height={8}
                className="filter invert dark:invert-0"
              />
            </Link>
            <Link
              href="https://egde.no"
              rel="noopener noreferrer"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/egde.svg"
                alt="Logo"
                width={64}
                height={8}
                className="grayscale brightness-100 contrast-250 invert dark:invert-0"
              />
            </Link>
            <Link
              href={"https://www.miljofyrtarn.no/"}
              rel="noopener noreferrer"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
             <Image
                src="/miljofyrtarn.svg"
                alt="Logo"
                width={100}
                height={8}
                className="grayscale brightness-100 contrast-250 invert dark:invert-0"
              /> 
            </Link>
          </div>
        </div>
        <div className="text-center md:text-left mt-4">
          <span className="mono text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="https://github.com/SimonPortillo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Simon Portillo
            </Link>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}
