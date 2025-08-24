import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAppointment extends Document {
  name: string;
  phone: string;
  reason: string;
  firstVisit?: Date;      // optional
  callback?: string;      // optional
  visitPreference: string;
}

const appointmentSchema: Schema<IAppointment> = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  reason: { type: String, required: true },
  firstVisit: { type: Date },       // optional
  callback: { type: String },       // optional
  visitPreference: { type: String, required: true },
});

const Appointment: Model<IAppointment> =
  mongoose.models.Appointment ||
  mongoose.model<IAppointment>("Appointment", appointmentSchema);

export default Appointment;
