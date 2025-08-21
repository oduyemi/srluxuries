import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import User from "@/models/User";
import crypto from "crypto";

// ===== Utilities =====
async function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512");
  return { salt, hashedPassword: hash.toString("hex") };
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { Name, Phone, Password, ConfirmPassword, Address } = await req.json();

    if (!Name || !Phone || !Password || !ConfirmPassword || !Address) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    if (Password !== ConfirmPassword) {
      return NextResponse.json({ message: "Both passwords must match!" }, { status: 400 });
    }

    const existingUser = await User.findOne({ phone: Phone });
    if (existingUser) {
      return NextResponse.json({ message: "Phone number already registered" }, { status: 400 });
    }

    const { hashedPassword, salt } = await hashPassword(Password);

    const newUser = await User.create({
      name: Name,
      phone: Phone,
      password: hashedPassword,
      salt,
      address: Address,
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: { id: newUser._id, Name, Phone, Address },
        nextStep: "/next-registration-page",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({ message: "Error registering user" }, { status: 500 });
  }
}
