const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, maxlength: 120 },
  phone: { type: String, maxlength: 50 },
  password: { type: String, maxlength: 80 },
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

module.exports = mongoose.model("User", userSchema);
