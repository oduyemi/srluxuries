import fetch from "node-fetch";

const WHATSAPP_API_URL = "https://graph.facebook.com/v21.0";

export async function sendWhatsAppMessage(to: string, message: string) {
  try {
    const response = await fetch(
      `${WHATSAPP_API_URL}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: to, // recipient WhatsApp number in international format
          type: "text",
          text: { body: message },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`WhatsApp API error: ${JSON.stringify(data)}`);
    }

    console.log("WhatsApp message sent:", data);
    return data;
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    throw error;
  }
}
