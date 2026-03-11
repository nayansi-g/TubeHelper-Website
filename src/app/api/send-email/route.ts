import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/mail"

export const runtime = "nodejs"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function buildThankYouEmail(name?: string) {
  const safeName = name?.trim() ? escapeHtml(name.trim()) : "there"

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#f7f7f7;padding:20px;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:10px;padding:24px;color:#333;line-height:1.6;">
        <p style="margin:0 0 12px 0;">Hi ${safeName},</p>

        <p style="margin:0 0 16px 0;">
          Thank you for requesting a <strong>Growth Consultation with TubeHelper</strong>.
        </p>

        <p style="margin:0 0 16px 0;">
          Our team has received your details and will review your business to understand potential opportunities for
          <strong>profitable ecommerce scaling</strong>. A growth strategist will contact you shortly.
        </p>

        <p style="margin:0 0 10px 0;">If you need immediate assistance, feel free to reach us:</p>

        <p style="margin:0 0 6px 0;">
          <a href="mailto:contact@tubehelper.in" style="color:#1a73e8;text-decoration:none;">contact@tubehelper.in</a>
        </p>

        <p style="margin:0 0 16px 0;">
          <a href="tel:+919897165137" style="color:#1a73e8;text-decoration:none;">+91 9897165137</a>
        </p>

        <p style="margin:20px 0 0 0;">Best regards,</p>
        <p style="margin:4px 0 0 0;"><strong>Team TubeHelper</strong></p>
      </div>
    </div>
  `
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(req: Request) {
  try {
    const { email, name, mobile, website, service } = await req.json()

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Valid email is required." },
        { status: 400 }
      )
    }

    const subject = `Thanks for contacting TubeHelper${name ? `, ${String(name)}` : ""}`
    const html = buildThankYouEmail(typeof name === "string" ? name : undefined)

    const result = await sendEmail(email, subject, html, { replyTo: "contact@tubehelper.in" })

    const notifyTo = process.env.LEADS_EMAIL_TO || process.env.EMAIL_USER
    if (notifyTo) {
      const safeEmail = escapeHtml(email)
      const safeLeadName = typeof name === "string" && name.trim() ? escapeHtml(name.trim()) : "Not provided"
      const safeMobile = typeof mobile === "string" && mobile.trim() ? escapeHtml(mobile.trim()) : "Not provided"
      const safeWebsite = typeof website === "string" && website.trim() ? escapeHtml(website.trim()) : "Not provided"
      const safeService = typeof service === "string" && service.trim() ? escapeHtml(service.trim()) : "Not provided"

      await sendEmail(
        notifyTo,
        "New TubeHelper lead from website",
        `
          <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111;">
            <h2 style="margin:0 0 12px 0;">New Lead</h2>
            <p style="margin:0 0 6px 0;"><strong>Name:</strong> ${safeLeadName}</p>
            <p style="margin:0 0 6px 0;"><strong>Email:</strong> ${safeEmail}</p>
            <p style="margin:0 0 6px 0;"><strong>Mobile:</strong> ${safeMobile}</p>
            <p style="margin:0 0 6px 0;"><strong>Website:</strong> ${safeWebsite}</p>
            <p style="margin:0 0 6px 0;"><strong>Budget:</strong> ${safeService}</p>
          </div>
        `,
        { replyTo: email }
      )
    }

    return NextResponse.json(result, { status: result.success ? 200 : 500 })
  } catch (error) {
    console.error("Send email API error:", error)
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 })
  }
}
