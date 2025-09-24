"use client"

import { motion } from "motion/react"
import Image from "next/image"

export function HeroSection() {
  return (
    <motion.section 
      className="relative w-[100vw] h-[calc(40vh+5rem)] sm:h-[calc(55vh+5rem)] lg:h-[calc(80vh+5rem)] flex items-center justify-center overflow-hidden -mx-4 sm:ml-[calc(-50vw+50%)] sm:w-[100vw] -mt-19 "
      style={{ maxWidth: 'none', top: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gruppe.JPG"
          alt="Group photo"
          fill
          quality={100}
          className="object-cover object-center"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/gruppe.JPG"
        />
        {/* Gradient overlay mask from bottom to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent" />
      </div>

      {/* Content */}
  <div className="relative z-10 text-left text-white/90 pt-48 sm:pt-60 px-4 sm:px-6 max-w-4xl">
        <motion.h1 
          className="serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Om oss
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/80"
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