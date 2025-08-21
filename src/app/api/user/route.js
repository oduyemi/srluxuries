const express = require("express");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();
const { User } = require("../models/User");
const { Appointment } = require("../models/Appointment");


async function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512');
    return {
      salt,
      hashedPassword: hash.toString('hex')
    };
  }
  
  async function verifyPassword(password, hashedPassword, salt) {
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512');
    return hashedPassword === hash.toString('hex');
  }



router.post("/register", async (req, res) => {
  try {
    const { Name, Phone, Password, ConfirmPassword, Address } = req.body;

    if (!Name || !Phone || !Password || !ConfirmPassword || !Address) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ phone: Phone });
    if (existingUser) {
      return res.status(400).json({ message: "Phone number already registered" });
    }

    if (Password !== ConfirmPassword) {
      return res.status(400).json({ message: "Both passwords must match!" });
    }

    const { hashedPassword } = await hashPassword(Password);

    const newUser = await User.create({
      name: Name,
      phone: Phone,
      password: hashedPassword,
      address: Address,
    });

    req.session.user = {
      userId: newUser._id,
      Name,
      Phone,
      Address,
    };

    return res.status(201).json({
      message: "User registered successfully",
      nextStep: "/next-registration-page",
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ message: "Error registering user" });
  }
});

router.post("/register-blazer", async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) return res.status(401).json({ message: "User not authenticated" });

    const { BlazerTopLength, BlazerShoulder, BlazerChest, BlazerStomach, BlazerSleeve, BlazerBicep } = req.body;
    if (!BlazerTopLength || !BlazerShoulder || !BlazerChest || !BlazerStomach || !BlazerSleeve || !BlazerBicep) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await User.findByIdAndUpdate(user.userId, {
      blazerTopLength: BlazerTopLength,
      blazerShoulder: BlazerShoulder,
      blazerChest: BlazerChest,
      blazerStomach: BlazerStomach,
      blazerSleeve: BlazerSleeve,
      blazerBicep: BlazerBicep,
    });

    return res.status(201).json({
      message: "Blazer information registered successfully",
      nextStep: "/next-registration-page",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error updating user information" });
  }
});

router.post("/register-trouser", async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) return res.status(401).json({ message: "User not authenticated" });

    const { TrouserLength, TrouserWaist, TrouserHip, TrouserStomach, TrouserLeg } = req.body;
    if (!TrouserLength || !TrouserWaist || !TrouserHip || !TrouserStomach || !TrouserLeg) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await User.findByIdAndUpdate(user.userId, {
      trouserLength: TrouserLength,
      trouserWaist: TrouserWaist,
      trouserHip: TrouserHip,
      trouserStomach: TrouserStomach,
      trouserLeg: TrouserLeg,
    });

    return res.status(201).json({
      message: "Trouser information registered successfully",
      nextStep: "/next-registration-page",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error updating user information" });
  }
});

router.post("/register-shirt", async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) return res.status(401).json({ message: "User not authenticated" });

    const { ShirtLength, ShirtChest, ShirtShoulder, ShirtSleeve, ShirtStomach, ShirtCollar } = req.body;
    if (!ShirtLength || !ShirtChest || !ShirtShoulder || !ShirtSleeve || !ShirtStomach || !ShirtCollar) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await User.findByIdAndUpdate(user.userId, {
      shirtLength: ShirtLength,
      shirtChest: ShirtChest,
      shirtShoulder: ShirtShoulder,
      shirtSleeve: ShirtSleeve,
      shirtStomach: ShirtStomach,
      shirtCollar: ShirtCollar,
    });

    return res.status(201).json({
      message: "Shirt information registered successfully",
      nextStep: "/next-registration-page",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error updating user information" });
  }
});

router.post("/register-suit", async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) return res.status(401).json({ message: "User not authenticated" });

    const { SuitLength, SuitBody, SuitSleeve, SuitBack, SuitRoundSleeve, SuitTrouserLength,
      SuitTrouserWaist, SuitLap, SuitHip, SuitCalf, SuitAnkle } = req.body;

    if (!SuitLength || !SuitBody || !SuitSleeve || !SuitBack || !SuitRoundSleeve ||
        !SuitTrouserLength || !SuitTrouserWaist || !SuitLap || !SuitHip || !SuitCalf || !SuitAnkle) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await User.findByIdAndUpdate(user.userId, {
      suitLength: SuitLength,
      suitBody: SuitBody,
      suitSleeve: SuitSleeve,
      suitBack: SuitBack,
      suitRoundSleeve: SuitRoundSleeve,
      suitTrouserLength: SuitTrouserLength,
      suitTrouserWaist: SuitTrouserWaist,
      suitLap: SuitLap,
      suitHip: SuitHip,
      suitCalf: SuitCalf,
      suitAnkle: SuitAnkle,
    });

    return res.status(201).json({
      message: "Suit information registered successfully",
      nextStep: "/next-registration-page",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error updating user information" });
  }
});

router.post("/register-agbada", async (req, res) => {
  try {
    const user = req.session.user;
    if (!user) return res.status(401).json({ message: "User not authenticated" });

    const { AgbadaLength, AgbadaBodyLength, AgbadaChest, AgbadaBack, AgbadaShortSleeve,
      AgbadaLongSleeve, AgbadaNeck, AgbadaStomach, AgbadaTrouserLength, AgbadaTrouserWaist,
      AgbadaLap, AgbadaHip, AgbadaCalf, AgbadaCap } = req.body;

    if (!AgbadaLength || !AgbadaBodyLength || !AgbadaChest || !AgbadaBack || !AgbadaShortSleeve ||
        !AgbadaLongSleeve || !AgbadaNeck || !AgbadaStomach || !AgbadaTrouserLength ||
        !AgbadaTrouserWaist || !AgbadaLap || !AgbadaHip || !AgbadaCalf || !AgbadaCap) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await User.findByIdAndUpdate(user.userId, {
      agbadaLength: AgbadaLength,
      agbadaBodyLength: AgbadaBodyLength,
      agbadaChest: AgbadaChest,
      agbadaBack: AgbadaBack,
      agbadaShortSleeve: AgbadaShortSleeve,
      agbadaLongSleeve: AgbadaLongSleeve,
      agbadaNeck: AgbadaNeck,
      agbadaStomach: AgbadaStomach,
      agbadaTrouserLength: AgbadaTrouserLength,
      agbadaTrouserWaist: AgbadaTrouserWaist,
      agbadaLap: AgbadaLap,
      agbadaHip: AgbadaHip,
      agbadaCalf: AgbadaCalf,
      agbadaCap: AgbadaCap,
    });

    return res.status(201).json({
      message: "Agbada information registered successfully",
      nextStep: "redirect to login",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error updating user information" });
  }
});

 



// ====================== LOGIN ======================
router.post("/login", async (req, res) => {
  try {
    const { Phone, Password } = req.body;
    if (!Phone || !Password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // find user by phone
    const user = await User.findOne({ phone: Phone });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Phone number not registered. Please register first." });
    }

    // verify password
    const isPasswordMatch = await verifyPassword(Password, user.password, user.salt);
    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ message: "Incorrect phone number or password" });
    }

    const sessionUser = {
      userId: user._id,
      Name: user.name,
      Phone: user.phone,
      Address: user.address,
    };

    req.session.user = sessionUser;

    return res.status(200).json({
      message: "Login successful",
      user: sessionUser,
      nextStep: "/custom-image",
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// ====================== UPLOAD (Cloudinary) ======================
router.post("/upload", upload.array("images", 3), async (req, res) => {
  try {
    const files = req.files;

    const uploadPromises = files.map(
      (file) =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { resource_type: "auto" },
            (error, result) => {
              if (error) {
                console.error("Error uploading file to Cloudinary:", error);
                reject(error);
              } else {
                console.log("File uploaded to Cloudinary:", result);
                resolve(result);
              }
            }
          );
          stream.end(file.buffer);
        })
    );

    const results = await Promise.all(uploadPromises);

    res.status(200).json({
      message: "Files uploaded to Cloudinary successfully",
      files: results,
    });
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ====================== APPOINTMENT ======================
router.post("/submit-appointment", async (req, res) => {
  try {
    const { name, phone, reason, firstVisit, callback, visitPreference } = req.body;

    if (!name || !phone || !reason || !firstVisit || !callback || !visitPreference) {
      return res.status(400).json({ message: "All fields are required" });
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

    return res.status(201).json({
      message: "Appointment submitted successfully",
      nextStep: "/",
    });
  } catch (error) {
    console.error("Error submitting appointment:", error);
    return res.status(500).json({ message: "Error registering appointment" });
  }
});

module.exports = router;

