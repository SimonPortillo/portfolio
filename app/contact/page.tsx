"use client"

import { ContactForm } from "@/components/about/contact-form"
import { motion } from "motion/react"

export const contactInfo = {
    name: "Simon Portillo",
    email: "simon.portillo2003@gmail.com"
}

export default function ContactPage() {

    return (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col"
        >
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
          <h1 className="serif text-center text-4xl font-bold mb-20">Ønsker dere et samarbeid?</h1>
        </motion.div>
          <ContactForm />
        </motion.main>
    )
}
