import { NextRequest, NextResponse } from "next/server";
import {dbConnect} from "@/utils/db";
import Appointment from "@/models/Appointment";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { name, phone, reason, firstVisit, callback, visitPreference } = await req.json();

    if (!name || !phone || !reason || !firstVisit || !callback || !visitPreference) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const appointment = new Appointment({
      name,
      phone,
      reason,
      firstVisit,
      callback,
      visitPreference,
    });

    await appointment.save();

    return NextResponse.json(
      { message: "Appointment submitted successfully", nextStep: "/" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting appointment:", error);
    return NextResponse.json({ message: "Error registering appointment" }, { status: 500 });
  }
}
