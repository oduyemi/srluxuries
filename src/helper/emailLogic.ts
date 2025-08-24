import { transporter } from "@/utils/mail";

export const sendEmailWithRetry = async (
  recipient: string,
  subject: string,
  htmlContent: string,
  retries: number = 3
) => {
  let attempt = 0;
  while (attempt < retries) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: recipient,
        subject,
        html: htmlContent,
      });
      console.log("✅ Email sent successfully");
      return;
    } catch (error: any) {
      attempt++;
      console.error(`Attempt ${attempt}: Failed to send email - ${error.message}`);
      if (attempt >= retries) throw error;
    }
  }
};
