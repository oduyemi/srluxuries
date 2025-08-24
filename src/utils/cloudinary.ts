import { v2 as cloudinary } from "cloudinary";

if (!cloudinary.config().api_key) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
  });
}

export default cloudinary;
