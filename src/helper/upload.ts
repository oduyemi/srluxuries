import cloudinary from "@/utils/cloudinary";





export async function uploadToCloudinary(
  buffer: Buffer,
  phone: string,
  originalName: string,
  suffix = Date.now()
): Promise<{ url: string; public_id: string }> {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  const fileExtension = originalName.split(".").pop()?.toLowerCase() || "";
  const mimeType = `image/${fileExtension === "jpg" ? "jpeg" : fileExtension}`;

  if (!allowedMimeTypes.includes(mimeType)) {
    throw new Error("Invalid file type. Only images are allowed.");
  }

  const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
  if (buffer.length > maxSizeInBytes) {
    throw new Error("File size exceeds 5MB limit.");
  }

  const folder = "srl/uploads";
  const public_id = `${phone}_${suffix}`;

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id,
        resource_type: "image",
      },
      (err, result) => {
        if (err) reject(err);
        else resolve({ url: result!.secure_url, public_id: result!.public_id });
      }
    );

    stream.end(buffer);
  });
}
