"use client"

import { motion } from "motion/react"

export function HeroSection() {
  return (
    <motion.section 
      className="w-full text-center py-8 pt-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="serif text-5xl md:text-6xl font-bold mb-4">Om oss</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
        Vi er en ambisiøs gruppe som er glad i utfordring, vi ser for oss å jobbe med et bachelorprosjekt hvor vi får brukt våre ferdigheter og videreutviklet vår tekniske kompetanse. 
      </p>
    </motion.section>
  );
}