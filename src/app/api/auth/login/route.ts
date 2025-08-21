import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/User";
import crypto from "crypto";

// ===== Utilities =====
async function verifyPassword(password: string, hashedPassword: string, salt: string): Promise<boolean> {
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512");
  return hashedPassword === hash.toString("hex");
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { Phone, Password } = await req.json();

    if (!Phone || !Password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const user = await User.findOne({ phone: Phone });
    if (!user) {
      return NextResponse.json({ message: "Phone number not registered. Please register first." }, { status: 401 });
    }

    const isPasswordMatch = await verifyPassword(Password, user.password, user.salt);
    if (!isPasswordMatch) {
      return NextResponse.json({ message: "Incorrect phone number or password" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Login successful",
      user: {
        userId: user._id.toString(),
        Name: user.name,
        Phone: user.phone,
        Address: user.address,
      },
      nextStep: "/custom-image",
    }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
