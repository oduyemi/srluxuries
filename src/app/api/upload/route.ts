export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { dbConnect } from "@/utils/db";
import CustomStyle from "@/models/customStyle";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// Twilio config
let twilioClient: any;
async function getTwilioClient() {
  if (!twilioClient) {
    const twilio = (await import("twilio")).default;
    twilioClient = twilio(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_AUTH_TOKEN!
    );
  }
  return twilioClient;
}

const ADMIN_WHATSAPP = "whatsapp:+2349159999965"; 

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const userId = formData.get("userId") as string;

    if (!file || !userId) {
      return NextResponse.json(
        { error: "File and userId are required" },
        { status: 400 }
      );
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const customFileName = `style_${Date.now()}_${userId}`;
    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "srl/uploads",
            public_id: customFileName,
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    // Save to MongoDB
    const customStyle = new CustomStyle({
      user: userId,
      fileUrl: result.secure_url,
      publicId: result.public_id,
    });
    await customStyle.save();

    // ✅ Respond immediately to user
    const response = NextResponse.json(
      { success: true, url: result.secure_url },
      { status: 201 }
    );

    setTimeout(async () => {
      try {
        const client = await getTwilioClient();
        await client.messages.create({
          from: "whatsapp:" + process.env.TWILIO_WHATSAPP_NUMBER,
          to: ADMIN_WHATSAPP,
          body: `📢 New Upload from User ${userId}\n\nFile: ${result.secure_url}`,
        });
        console.log("WhatsApp message sent to admin ✅");
      } catch (err) {
        console.error("Failed to send WhatsApp message:", err);
      }
    }, 3000);
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
