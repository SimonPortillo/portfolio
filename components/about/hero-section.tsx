"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Stack from "@/components/Stack"

const images = [
  { id: 1, img: "/amund-portrett.JPG" },
  { id: 2, img: "/anders-portrett.JPG" },
  { id: 3, img: "/jone-portrett.JPG" },
  { id: 4, img: "/martin-portrett.JPG" },
  { id: 5, img: "/petter-portrett.JPG" },
  { id: 6, img: "/simon-portrett.JPG" },
];

export function HeroSection() {
  return (
    <motion.section 
      className="relative w-full sm:w-screen flex items-center justify-center overflow-hidden -mt-5 sm:-mt-19 sm:mx-[calc(50%-50vw)] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[88vh]"
      style={{ maxWidth: 'none', top: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image (desktop only) */}
      <div className="hidden sm:block absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/gruppe.JPG"
          alt="Group photo"
          fill
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/gruppe.JPG"
        />
        {/* Gradient overlay mask from bottom to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent" />
      </div>

      {/* Mobile: Stack component */}
  <div className="sm:hidden relative z-10 w-full py-10 px-4 mx-auto max-w-[calc(100vw-2rem)] overflow-x-hidden flex flex-col items-center gap-6">
        <div className="text-left max-w-[min(92vw,36rem)] text-foreground">
          <h1 className="serif text-3xl font-bold leading-tight mb-2">Om oss</h1>
          <p className="text-base leading-relaxed text-foreground/80">
            Vi er en ambisiøs gruppe som er glad i utfordring, vi ser for oss å jobbe med et prosjekt hvor vi får brukt våre ferdigheter og videreutviklet vår kompetanse.
          </p>
        </div>
        <Stack
          randomRotation={false}
          sendToBackOnClick={true}
          cardDimensions={{ width: 220, height: 320 }}
          cardsData={images}
        />
        
      </div>

      {/* Desktop content */}
      <div className="hidden sm:block relative z-10 text-left text-white/90 pt-60 px-6 max-w-4xl">
        <motion.h1 
          className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Om oss
        </motion.h1>
        <motion.p 
          className="text-lg lg:text-2xl leading-relaxed text-white/80 pb-6 sm:pb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Vi er en ambisiøs gruppe som er glad i utfordring, vi ser for oss å jobbe med et prosjekt hvor vi får brukt våre ferdigheter og videreutviklet vår kompetanse.
        </motion.p>
      </div>
    </motion.section>
  );
}