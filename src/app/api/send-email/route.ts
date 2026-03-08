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
  <div style="background:#f6f7fb;padding:24px 12px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e6e8ee;border-radius:18px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
      <div style="background:#0b0f1a;color:#ffffff;padding:28px 28px 24px;">
        <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;">TubeHelper</p>
        <h1 style="margin:0 0 10px 0;font-size:24px;line-height:1.3;">Welcome to TubeHelper</h1>
        <p style="margin:0;font-size:14px;line-height:1.6;color:#d1d5db;">
          Hi ${safeName}, thanks for getting in touch. We received your details and will reach out within 24 hours.
        </p>
      </div>

      <div style="padding:24px 28px;">
        <h2 style="margin:0 0 10px 0;font-size:18px;">Here’s what to expect next</h2>
        <p style="margin:0 0 16px 0;font-size:14px;line-height:1.7;color:#4b5563;">
          One of our growth specialists will review your business goals and share a clear, actionable plan to improve
          revenue, ROAS, and conversion rates.
        </p>

        <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:14px;padding:16px;">
          <h3 style="margin:0 0 8px 0;font-size:16px;">About TubeHelper</h3>
          <p style="margin:0;font-size:13px;line-height:1.7;color:#6b7280;">
            TubeHelper is a performance marketing and ecommerce growth partner. We build data-driven marketing systems
            that scale Shopify and D2C brands using Meta &amp; Instagram Ads, Google Ads (Search &amp; Shopping), YouTube Ads,
            conversion rate optimization (CRO), GA4 tracking, analytics, and marketing automation. Our goal is simple:
            increase revenue without wasting ad spend.
          </p>
        </div>

        <div style="margin-top:18px;display:flex;gap:12px;flex-wrap:wrap;">
          <a href="https://wa.me/919897165137" style="background:#111827;color:#ffffff;text-decoration:none;padding:10px 16px;border-radius:999px;font-size:13px;display:inline-block;">
            Chat on WhatsApp
          </a>
          <a href="https://tubehelper.in/contact" style="border:1px solid #111827;color:#111827;text-decoration:none;padding:10px 16px;border-radius:999px;font-size:13px;display:inline-block;">
            Book a Strategy Call
          </a>
        </div>
      </div>

      <div style="background:#f3f4f6;padding:16px 28px;font-size:12px;color:#6b7280;">
        <p style="margin:0;">Email: contact@tubehelper.in | Phone: 91 9897165137</p>
        <p style="margin:6px 0 0 0;">A-83, First Floor, Sector 63, Noida</p>
        <p style="margin:10px 0 0 0;">© ${year} TubeHelper. All rights reserved.</p>
      </div>
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
