import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import Appointment from "@/models/Appointment";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { name, phone, reason, firstVisit, callback, visitPreference } =
      await req.json();

    if (!name || !phone || !reason || !visitPreference) {
      return NextResponse.json(
        { message: "Name, phone, reason, and visit preference are required" },
        { status: 400 }
      );
    }

    const appointment = new Appointment({
      name: name.trim(),
      phone: phone.trim(),
      reason: reason.trim(),
      visitPreference: visitPreference.trim(),
      firstVisit: firstVisit ? new Date(firstVisit) : undefined,
      callback: callback ? callback.trim() : undefined,
    });

    await appointment.save();

    return NextResponse.json(
      { message: "Appointment submitted successfully", id: appointment._id, nextStep: "/" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting appointment:", error);
    return NextResponse.json(
      { message: "Error registering appointment" },
      { status: 500 }
    );
  }
}
