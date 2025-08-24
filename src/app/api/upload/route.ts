import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import CustomStyle from "@/models/customStyle";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();

    const formData = await req.formData();
    const files = formData.getAll("files") as File[];
    const phone = formData.get("phone") as string;

    if (!phone) {
      return NextResponse.json({ message: "Phone number is required" }, { status: 400 });
    }

    if (!files || files.length === 0) {
      return NextResponse.json({ message: "No files provided" }, { status: 400 });
    }

    const uploadedUrls: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json({ message: `File ${file.name} has an unsupported format.` }, { status: 400 });
      }

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ message: `File ${file.name} exceeds 5MB.` }, { status: 400 });
      }

      const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/dymd1jkbl/image/upload/v1691953768/srl/uploads`;
      const uploadPreset = "ynb6urq8";
      const timestamp = Date.now();
      const customFileName = `${phone}_${timestamp}_${i}`;
      const cloudinaryFormData = new FormData();
      cloudinaryFormData.append("file", file);
      cloudinaryFormData.append("upload_preset", uploadPreset);
      cloudinaryFormData.append("public_id", `srl/uploads/${customFileName}`);
      const response = await fetch(cloudinaryUploadUrl, {
        method: "POST",
        body: cloudinaryFormData,
      });

      if (!response.ok) {
        throw new Error(`Error uploading file ${i + 1}: ${response.statusText}`);
      }

      const data = await response.json();
      uploadedUrls.push(data.secure_url);
    }

    await CustomStyle.create({ phone, images: uploadedUrls });
    return NextResponse.json({
      message: "Files uploaded successfully",
      urls: uploadedUrls,
    }, { status: 201 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "Error uploading files" }, { status: 500 });
  }
};
