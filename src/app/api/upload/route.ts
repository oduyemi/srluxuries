import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("images") as unknown[];

    if (!files.length) {
      return NextResponse.json({ message: "No files uploaded" }, { status: 400 });
    }

    const uploadPromises = files.map(async (file) => {
      if (!(file instanceof File)) throw new Error("Invalid file");

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "auto" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });
    });

    const results = await Promise.all(uploadPromises);
    return NextResponse.json({ files: results });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
