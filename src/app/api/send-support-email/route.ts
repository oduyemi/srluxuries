import { transporter } from "@/utils/mail";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { from, to, subject, message, cc, bcc } = body;

    if (!from || !to || !subject || !message) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    // Send mail
    await transporter.sendMail({
      from: `"${from}" <${process.env.SMTP_USER}>`,
      replyTo: from,
      to,
      cc: cc || undefined,
      bcc: bcc || undefined,
      subject,
      html: `
        <h3>New Support Message</h3>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Email sent" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
  }
}
