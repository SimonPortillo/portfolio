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
      <h1 className="serif text-5xl md:text-6xl font-bold mb-4">About Us</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
        Get to know our student group, our background, and our journey through university.
      </p>
    </motion.section>
  );
}