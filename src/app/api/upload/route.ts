import { NextRequest, NextResponse } from "next/server";
import CustomStyle from "@/models/customStyle";
import { dbConnect } from "@/utils/db";
import { escapeHtml } from "@/utils/escapeHTML";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const { uploadToCloudinary } = await import("@/helper/upload"); // lazy import
  const { sendEmailWithRetry } = await import("@/helper/emailLogic");

  try {
    await dbConnect();
    const formData = await req.formData();
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const style = formData.get("style") as string | null;
    const description = formData.get("description") as string | null;
    const additionalInfo = formData.get("additionalInfo") as string | null;

    if (!phone || !style || !description) {
      return NextResponse.json(
        { error: "Phone, style, and description are required" },
        { status: 400 }
      );
    }

    // ✅ Handle multiple files
    const files = formData.getAll("images") as File[];
    const uploadPromises = files
      .filter(Boolean) // skip null/undefined
      .map(async (file) => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        return uploadToCloudinary(buffer, phone, file.name);
      });

    const uploadedImages = await Promise.all(uploadPromises);

    const newStyle = new CustomStyle({
      email,
      phone,
      style,
      description,
      additionalInfo,
      images: uploadedImages,
    });
    await newStyle.save();

    const recipient = process.env.NOTIFY_EMAIL!;
    const subject = `🆕 New Custom Style Added: ${style}`;
    const htmlContent = `
      <h2>New Custom Style Added</h2>
      <p><b>Email:</b> ${escapeHtml(email || "N/A")}</p>
      <p><b>Phone:</b> ${escapeHtml(phone)}</p>
      <p><b>Name/Style:</b> ${escapeHtml(style)}</p>
      <p><b>Description:</b> ${escapeHtml(description)}</p>
      <p><b>Additional Information:</b> ${escapeHtml(additionalInfo || "")}</p>
      <p><b>Images:</b></p>
      <ul>
        ${uploadedImages
          .map((img) => `<li><a href="${img.url}" target="_blank">${img.url}</a></li>`)
          .join("")}
      </ul>
    `;

    await sendEmailWithRetry(recipient, subject, htmlContent);

    return NextResponse.json(
      { message: "Custom style created successfully", data: newStyle },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating custom style:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
