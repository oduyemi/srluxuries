import mongoose, { Schema, Types, Document, Model } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId; 
  name: string;
  phone: string;
  password: string;
  salt: string;
  address?: string;

  // Blazer/Kaftan
  blazerTopLength?: number;
  blazerShoulder?: number;
  blazerChest?: number;
  blazerStomach?: number;
  blazerSleeve?: number;
  blazerBicep?: number;

  // Trouser
  trouserLength?: number;
  waist?: number;
  hip?: number;
  trouserStomach?: number;
  leg?: number;

  // Shirt
  shirtLength?: number;
  chest?: number;
  shoulder?: number;
  sleeve?: number;
  stomach?: number;
  collar?: number;

  // Suit
  suitLength?: number;
  roundBody?: number;
  sleeveSuit?: number;
  back?: number;
  roundSleeve?: number;
  trouserLengthSuit?: number;
  trouserWaist?: number;
  lap?: number;
  hipSuit?: number;
  calf?: number;
  ankle?: number;

  // Agbada
  agbadaLength?: number;
  agbadaBodyLength?: number;
  agbadaChest?: number;
  chestAgbada?: number;
  backAgbada?: number;
  shortSleeve?: number;
  longSleeve?: number;
  neck?: number;
  stomachAgbada?: number;
  trouserLengthAgbada?: number;
  trouserWaistAgbada?: number;
  lapAgbada?: number;
  hipAgbada?: number;
  calfAgbada?: number;
  cap?: number;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  name: { type: String, maxlength: 120 },
  phone: { type: String, maxlength: 50, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  address: String,

  // Blazer
  blazerTopLength: Number,
  blazerShoulder: Number,
  blazerChest: Number,
  blazerStomach: Number,
  blazerSleeve: Number,
  blazerBicep: Number,

  // Trouser
  trouserLength: Number,
  waist: Number,
  hip: Number,
  trouserStomach: Number,
  leg: Number,

  // Shirt
  shirtLength: Number,
  chest: Number,
  shoulder: Number,
  sleeve: Number,
  stomach: Number,
  collar: Number,

  // Suit
  suitLength: Number,
  roundBody: Number,
  sleeveSuit: Number,
  back: Number,
  roundSleeve: Number,
  trouserLengthSuit: Number,
  trouserWaist: Number,
  lap: Number,
  hipSuit: Number,
  calf: Number,
  ankle: Number,

  // Agbada
  agbadaLength: Number,
  agbadaBodyLength: Number,
  agbadaChest: Number,
  chestAgbada: Number,
  backAgbada: Number,
  shortSleeve: Number,
  longSleeve: Number,
  neck: Number,
  stomachAgbada: Number,
  trouserLengthAgbada: Number,
  trouserWaistAgbada: Number,
  lapAgbada: Number,
  hipAgbada: Number,
  calfAgbada: Number,
  cap: Number,
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
