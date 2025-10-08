"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { Spinner } from "@/components/ui/spinner"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldLegend,
  FieldSeparator,
} from "@/components/ui/field"
import { ExternalLinkIcon } from 'lucide-react';
import { Check } from 'lucide-react';
import { X } from 'lucide-react';
import { contactInfo } from "@/app/contact/page"
import { CircleAlert } from 'lucide-react';
import { Send } from 'lucide-react';

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Navn er påkrevd"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-post er påkrevd"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ugyldig e-postadresse"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Emne er påkrevd"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Melding er påkrevd"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Meldingen må være minst 10 tegn"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Item variant="outline" className="p-8 rounded-xl">
        <form onSubmit={handleSubmit}>
          <FieldSet>
            <FieldLegend>Kontaktskjema</FieldLegend>
            <FieldSeparator className="mb-[-30px]" /> 
            <FieldDescription className="mb-4">
              Fyll ut skjemaet nedenfor så tar vi kontakt med deg så snart som mulig.
            </FieldDescription>
          <FieldGroup>
            <Field data-invalid={!!errors.name}>
              <FieldLabel htmlFor="name" className="mono">Navn</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                placeholder="navn/bedrift"
              />
              {errors.name && <FieldError>{errors.name}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="email" className="mono">E-post</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                placeholder="din.epost@eksempel.no"
              />
              {errors.email && <FieldError>{errors.email}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.subject}>
              <FieldLabel htmlFor="subject" className="mono">Emne</FieldLabel>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={!!errors.subject}
                placeholder="Hva gjelder henvendelsen?"
              />
              {errors.subject && <FieldError>{errors.subject}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.message}>
              <FieldLabel htmlFor="message" className="mono">Melding</FieldLabel>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                placeholder="Skriv din melding her..."
                rows={6}
              />
              {errors.message && <FieldError>{errors.message}</FieldError>}
            </Field>
                <Item variant="muted" asChild className="mt-2">
                    <a href={`mailto:${contactInfo.email}`}>
                    <ItemContent>
                        <ItemTitle>Ikke fan av e-postskjemaet?</ItemTitle>
                        <ItemDescription className="mb-[-8px]">
                        Åpne i din foretrukne e-postklient.
                        </ItemDescription>
                        <ItemDescription className="italic text-xs flex items-center gap-1">
                            <CircleAlert className="inline size-3" />
                            du kontakter vår kontaktperson direkte
                        </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <ExternalLinkIcon className="size-4" />
                    </ItemActions>
                    </a>
                </Item>

            <div className="flex flex-col gap-4 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full mono"
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="mr-2" />
                    Sender...
                  </>
                ) : (
                  <>Send e-post <Send className="inline size-4" /></>
                )}
              </Button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-primary/10 text-primary border border-primary/20 rounded-md text-center"
                >
                <Check className="inline size-4" /> Melding sendt! Vi kommer tilbake til deg snart.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-md text-center"
                >
                  <X className="inline size-4" /> Noe gikk galt. Vennligst prøv igjen senere.
                </motion.div>
              )}
            </div>
          </FieldGroup>
        </FieldSet>
        </form>
      </Item>
    </motion.div>
  )
}