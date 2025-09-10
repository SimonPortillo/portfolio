"use client"

import { motion } from "motion/react"

export function HeroSection() {
  return (
    <motion.section 
      className="w-full text-center py-6 sm:py-8 lg:py-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
        Om oss
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-6 px-2">
        Vi er en ambisiøs gruppe som er glad i utfordring, vi ser for oss å jobbe med et bachelorprosjekt hvor vi får brukt våre ferdigheter og videreutviklet vår tekniske kompetanse. 
      </p>
    </motion.section>
  );
}