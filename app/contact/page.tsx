"use client"

import { ContactForm } from "@/components/about/contact-form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail } from 'lucide-react';
import { ExternalLinkIcon } from 'lucide-react';


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
          <p className="mono text-muted-foreground mb-1 text-center">Snakk med vår kontaktperson direkte:</p>
          <Separator className="mb-8 bg-muted" />
            <Item variant="outline" className="p-4 rounded-xl mb-20">
                <ItemMedia>
                <Avatar className="size-10">
                    <AvatarImage src="/simon.jpg" alt="Simon Portillo" />
                    <AvatarFallback>SP</AvatarFallback>
                </Avatar>
                </ItemMedia>
                <ItemContent>
                <ItemTitle>{contactInfo.name}<Badge variant="secondary">Team-lead</Badge></ItemTitle>
                <ItemDescription className="mono text-xs flex items-center gap-1"> <Mail className="inline size-3" /> {contactInfo.email}</ItemDescription>
                </ItemContent>
                <ItemActions>
                <Button
                    size="icon-sm"
                    variant="outline"
                    className="rounded-full"
                    aria-label={"Contact via email"}
                    onClick={() => window.location.href = `mailto:${contactInfo.email}`}
                >
                    { <ExternalLinkIcon />}
                </Button>
                </ItemActions>
            </Item>

        <p className="mono text-muted-foreground mb-1 text-center">Eller fyll ut skjemaet under:</p>
        <Separator className="mb-8 bg-muted" />
        </motion.div>

          <ContactForm />

        </motion.main>
    )
}
