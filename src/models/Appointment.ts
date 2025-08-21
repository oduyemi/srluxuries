import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAppointment extends Document {
  name: string;
  phone: string;
  reason: string;
  firstVisit: string;
  callback: string;
  visitPreference: string;
}

const appointmentSchema: Schema<IAppointment> = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  reason: { type: String },
  firstVisit: { type: String },
  callback: { type: String },
  visitPreference: { type: String },
});

const Appointment: Model<IAppointment> =
  mongoose.models.Appointment ||
  mongoose.model<IAppointment>("Appointment", appointmentSchema);

export default Appointment;
