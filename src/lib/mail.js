import { createTransport } from "nodemailer";


const transport = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async (to, subject, message) => {
  try {
    const info = await transport.sendMail({
      from: `"TubeHelper" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: subject,
      html: message,
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