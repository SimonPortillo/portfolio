import { NextRequest, NextResponse } from "next/server"
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_TOKEN);

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    
    // Validate the data
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Check if CONTACT_EMAIL is configured in environment variables
    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL environment variable is not set")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 503 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <noreply@gruppe13.tech>', 
      to: [process.env.CONTACT_EMAIL],
      subject: `Kontaktskjema: ${body.subject}`,
      replyTo: body.email,
      react: EmailTemplate({
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    console.log("Email sent successfully:", data)

    return NextResponse.json(
      { message: "Message sent successfully", data },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
