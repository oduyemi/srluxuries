import mongoose, { Schema, Types, Document, Model } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId; 
  name: string;
  phone: string;
  password: string;
  salt: string;
  address?: string;

  blazerTopLength?: number;
  blazerShoulder?: number;
  blazerChest?: number;
  blazerStomach?: number;
  blazerSleeve?: number;
  blazerBicep?: number;

  trouserLength?: number;
  trouserWaist?: number;
  trouserHip?: number;
  trouserStomach?: number;
  trouserLeg?: number;

  shirtLength?: number;
  shirtChest?: number;
  shirtShoulder?: number;
  shirtSleeve?: number;
  shirtStomach?: number;
  shirtCollar?: number;

  suitLength?: number;
  suitBody?: number;
  suitSleeve?: number;
  suitBack?: number;
  suitRoundSleeve?: number;
  suitTrouserLength?: number;
  suitTrouserWaist?: number;
  suitLap?: number;
  suitHip?: number;
  suitCalf?: number;
  suitAnkle?: number;

  agbadaLength?: number;
  agbadaBodyLength?: number;
  agbadaChest?: number;
  agbadaBack?: number;
  agbadaShortSleeve?: number;
  agbadaLongSleeve?: number;
  agbadaNeck?: number;
  agbadaStomach?: number;
  agbadaTrouserLength?: number;
  agbadaTrouserWaist?: number;
  agbadaLap?: number;
  agbadaHip?: number;
  agbadaCalf?: number;
  agbadaCap?: number;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  name: { type: String, maxlength: 120 },
  phone: { type: String, maxlength: 50, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  address: String,

  blazerTopLength: Number,
  blazerShoulder: Number,
  blazerChest: Number,
  blazerStomach: Number,
  blazerSleeve: Number,
  blazerBicep: Number,

  trouserLength: Number,
  trouserWaist: Number,
  trouserHip: Number,
  trouserStomach: Number,
  trouserLeg: Number,

  shirtLength: Number,
  shirtChest: Number,
  shirtShoulder: Number,
  shirtSleeve: Number,
  shirtStomach: Number,
  shirtCollar: Number,

  suitLength: Number,
  suitBody: Number,
  suitSleeve: Number,
  suitBack: Number,
  suitRoundSleeve: Number,
  suitTrouserLength: Number,
  suitTrouserWaist: Number,
  suitLap: Number,
  suitHip: Number,
  suitCalf: Number,
  suitAnkle: Number,

  agbadaLength: Number,
  agbadaBodyLength: Number,
  agbadaChest: Number,
  agbadaBack: Number,
  agbadaShortSleeve: Number,
  agbadaLongSleeve: Number,
  agbadaNeck: Number,
  agbadaStomach: Number,
  agbadaTrouserLength: Number,
  agbadaTrouserWaist: Number,
  agbadaLap: Number,
  agbadaHip: Number,
  agbadaCalf: Number,
  agbadaCap: Number,
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
