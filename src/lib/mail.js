import { createTransport } from "nodemailer";

function getTransport() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error(
      "Missing EMAIL_USER/EMAIL_PASS. Set SMTP credentials in your server environment."
    );
  }

  return createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT || 465),
    secure: String(process.env.EMAIL_SECURE || "true") === "true",
    auth: { user, pass },
  });
}

export const sendEmail = async (to, subject, message, options = {}) => {
  try {
    const transport = getTransport();
    const info = await transport.sendMail({
      from: `"TubeHelper" <${process.env.EMAIL_USER}>`,
      to: to,
      // subject: subject,
      html: message,
      replyTo: options.replyTo,
    });

    return {
      success: true,
      messageId: info.messageId,
    };

  } catch (error) {
    console.error("Email Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};
