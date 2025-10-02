"use client"

import { motion } from "motion/react"
import Script from "next/script"

export function VideoSection() {
  return (
    <motion.section 
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
        <div className="aspect-video w-full relative">
          <iframe 
            src="https://player.vimeo.com/video/1123948699?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute top-0 left-0 w-full h-full"
            title="Gruppe 13 Promo Video"
          />
        </div>
      </div>
      
      {/* Load Vimeo player API */}
      <Script 
        src="https://player.vimeo.com/api/player.js" 
        strategy="lazyOnload"
      />
    </motion.section>
  )
}
