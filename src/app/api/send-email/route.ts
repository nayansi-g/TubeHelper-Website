import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const buildThankYouEmail = (name?: string) => {
  const safeName = name?.trim() ? escapeHtml(name.trim()) : "there";
  const year = new Date().getFullYear();

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f7f7f7;padding:20px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:10px;padding:24px;color:#333;line-height:1.6;">
      
      <p style="margin:0 0 12px 0;">Hi ${safeName},</p>

      <p style="margin:0 0 16px 0;">
        Thank you for requesting a <strong>Growth Consultation with Tubehelper</strong>.
      </p>

      <p style="margin:0 0 16px 0;">
        Our team has received your details and will review your business to understand potential 
        opportunities for <strong>profitable ecommerce scaling</strong>. 
        A growth strategist will contact you shortly.
      </p>

      <p style="margin:0 0 10px 0;">
        If you need immediate assistance, feel free to reach us:
      </p>

      <p style="margin:0 0 6px 0;">
        📧 <a href="mailto:contact@tubehelper.in" style="color:#1a73e8;text-decoration:none;">
        contact@tubehelper.in
        </a>
      </p>

      <p style="margin:0 0 16px 0;">
        📞 <a href="tel:+919897165137" style="color:#1a73e8;text-decoration:none;">
        +91 9897165137
        </a>
      </p>

      <p style="margin:20px 0 0 0;">Best regards,</p>
      <p style="margin:4px 0 0 0;"><strong>*Team Tubehelper*</strong></p>

    </div>
  </div>
  `;
};

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const subject = `Thanks for contacting TubeHelper${name ? `, ${name}` : ""}`;
    const html = buildThankYouEmail(name);
    const result = await sendEmail(email, subject, html);

    return NextResponse.json(result, {
      status: result.success ? 200 : 500,
    });
  } catch (error) {
    console.error("Send email API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
