"use client";
import { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export const RegisterForm = () => {
  // Step control
  const [step, setStep] = useState(1);

  // Step 1: Basic Info
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");

  // Step 2: Blazer/Kaftan
  const [blazerTopLength, setBlazerTopLength] = useState("");
  const [blazerShoulder, setBlazerShoulder] = useState("");
  const [blazerChest, setBlazerChest] = useState("");
  const [blazerStomach, setBlazerStomach] = useState("");
  const [blazerSleeve, setBlazerSleeve] = useState("");
  const [blazerBicep, setBlazerBicep] = useState("");

  // Step 3: Trouser
  const [trouserLength, setTrouserLength] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [trouserStomach, setTrouserStomach] = useState("");
  const [leg, setLeg] = useState("");

  // Step 4: Shirt
  const [shirtLength, setShirtLength] = useState("");
  const [chest, setChest] = useState("");
  const [shoulder, setShoulder] = useState("");
  const [sleeve, setSleeve] = useState("");
  const [stomach, setStomach] = useState("");
  const [collar, setCollar] = useState("");

  // Step 5: Suit
  const [suitLength, setSuitLength] = useState("");
  const [roundBody, setRoundBody] = useState("");
  const [sleeveSuit, setSleeveSuit] = useState("");
  const [back, setBack] = useState("");
  const [roundSleeve, setRoundSleeve] = useState("");
  const [trouserLengthSuit, setTrouserLengthSuit] = useState("");
  const [trouserWaist, setTrouserWaist] = useState("");
  const [lap, setLap] = useState("");
  const [hipSuit, setHipSuit] = useState("");
  const [calf, setCalf] = useState("");
  const [ankle, setAnkle] = useState("");

  // Step 6: Agbada
  const [agbadaLength, setAgbadaLength] = useState("");
  const [agbadaBodyLength, setAgbadaBodyLength] = useState("");
  const [agbadaChest, setAgbadaChest] = useState("");
  const [chestAgbada, setChestAgbada] = useState("");
  const [backAgbada, setBackAgbada] = useState("");
  const [shortSleeve, setShortSleeve] = useState("");
  const [longSleeve, setLongSleeve] = useState("");
  const [neck, setNeck] = useState("");
  const [stomachAgbada, setStomachAgbada] = useState("");
  const [trouserLengthAgbada, setTrouserLengthAgbada] = useState("");
  const [trouserWaistAgbada, setTrouserWaistAgbada] = useState("");
  const [lapAgbada, setLapAgbada] = useState("");
  const [hipAgbada, setHipAgbada] = useState("");
  const [calfAgbada, setCalfAgbada] = useState("");
  const [cap, setCap] = useState("");

  // Navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Submit handler
  const handleSubmit = async () => {
    const payload = {
      name, phone, password, confirmPassword, address,
      blazerTopLength, blazerShoulder, blazerChest, blazerStomach, blazerSleeve, blazerBicep,
      trouserLength, waist, hip, trouserStomach, leg,
      shirtLength, chest, shoulder, sleeve, stomach, collar,
      suitLength, roundBody, sleeveSuit, back, roundSleeve, trouserLengthSuit, trouserWaist, lap, hipSuit, calf, ankle,
      agbadaLength, agbadaBodyLength, agbadaChest, chestAgbada, backAgbada, shortSleeve, longSleeve, neck,
      stomachAgbada, trouserLengthAgbada, trouserWaistAgbada, lapAgbada, hipAgbada, calfAgbada, cap
    };

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful:", data);
      } else {
        console.error("Registration error:", data.message);
      }
    } catch (err) {
      console.error("Error during registration:", err);
    }
  };

  // Helper input renderer
  const renderInput = (
    label: string,
    value: string,
    setValue: (val: string) => void,
    type: string = "text"
  ) => (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      fullWidth
      variant="outlined"
      margin="normal"
      InputProps={{ sx: { borderRadius: 2 } }}
    />
  );

  // Step renderer
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Typography variant="h5" textAlign="center" className="text-goldie" fontWeight={600} mb={2}>
              Join the SR Club
            </Typography>
            {renderInput("Name", name, setName)}
            {renderInput("Phone", phone, setPhone, "number")}
            {renderInput("Password", password, setPassword, "password")}
            {renderInput("Confirm Password", confirmPassword, setConfirmPassword, "password")}
            <TextField
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
              multiline
              rows={3}
              margin="normal"
              variant="outlined"
              InputProps={{ sx: { borderRadius: 2 } }}
            />
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h5" textAlign="center" className="text-goldie" fontWeight={600} mb={2}>
              Blazer & Kaftan
            </Typography>
            {renderInput("Top Length", blazerTopLength, setBlazerTopLength, "number")}
            {renderInput("Shoulder", blazerShoulder, setBlazerShoulder, "number")}
            {renderInput("Chest", blazerChest, setBlazerChest, "number")}
            {renderInput("Stomach", blazerStomach, setBlazerStomach, "number")}
            {renderInput("Sleeve", blazerSleeve, setBlazerSleeve, "number")}
            {renderInput("Bicep", blazerBicep, setBlazerBicep, "number")}
          </>
        );
      case 3:
        return (
          <>
            <Typography variant="h5" textAlign="center" className="text-goldie" fontWeight={600} mb={2}>
              Trouser
            </Typography>
            {renderInput("Trouser Length", trouserLength, setTrouserLength, "number")}
            {renderInput("Waist", waist, setWaist, "number")}
            {renderInput("Hip", hip, setHip, "number")}
            {renderInput("Stomach", trouserStomach, setTrouserStomach, "number")}
            {renderInput("Leg", leg, setLeg, "number")}
          </>
        );
      case 4:
        return (
          <>
            <Typography variant="h5" textAlign="center" className="text-goldie" fontWeight={600} mb={2}>
              Shirt
            </Typography>
            {renderInput("Shirt Length", shirtLength, setShirtLength, "number")}
            {renderInput("Chest", chest, setChest, "number")}
            {renderInput("Shoulder", shoulder, setShoulder, "number")}
            {renderInput("Sleeve", sleeve, setSleeve, "number")}
            {renderInput("Stomach", stomach, setStomach, "number")}
            {renderInput("Collar", collar, setCollar, "number")}
          </>
        );
      case 5:
        return (
          <>
            <Typography variant="h5" textAlign="center" className="text-goldie" fontWeight={600} mb={2}>
              Suit
            </Typography>
            {renderInput("Suit Length", suitLength, setSuitLength, "number")}
            {renderInput("Round Body", roundBody, setRoundBody, "number")}
            {renderInput("Sleeve", sleeveSuit, setSleeveSuit, "number")}
            {renderInput("Back", back, setBack, "number")}
            {renderInput("Round Sleeve", roundSleeve, setRoundSleeve, "number")}
            {renderInput("Trouser Length", trouserLengthSuit, setTrouserLengthSuit, "number")}
            {renderInput("Trouser Waist", trouserWaist, setTrouserWaist, "number")}
            {renderInput("Lap", lap, setLap, "number")}
            {renderInput("Hip", hipSuit, setHipSuit, "number")}
            {renderInput("Calf", calf, setCalf, "number")}
            {renderInput("Ankle", ankle, setAnkle, "number")}
          </>
        );
      case 6:
        return (
          <>
            <Typography variant="h5" textAlign="center" className="text-goldie" fontWeight={600} mb={2}>
              Agbada
            </Typography>
            {renderInput("Agbada Length", agbadaLength, setAgbadaLength, "number")}
            {renderInput("Agbada Body Length", agbadaBodyLength, setAgbadaBodyLength, "number")}
            {renderInput("Agbada Chest", agbadaChest, setAgbadaChest, "number")}
            {renderInput("Chest", chestAgbada, setChestAgbada, "number")}
            {renderInput("Back", backAgbada, setBackAgbada, "number")}
            {renderInput("Short Sleeve", shortSleeve, setShortSleeve, "number")}
            {renderInput("Long Sleeve", longSleeve, setLongSleeve, "number")}
            {renderInput("Neck", neck, setNeck, "number")}
            {renderInput("Stomach", stomachAgbada, setStomachAgbada, "number")}
            {renderInput("Trouser Length", trouserLengthAgbada, setTrouserLengthAgbada, "number")}
            {renderInput("Trouser Waist", trouserWaistAgbada, setTrouserWaistAgbada, "number")}
            {renderInput("Lap", lapAgbada, setLapAgbada, "number")}
            {renderInput("Hip", hipAgbada, setHipAgbada, "number")}
            {renderInput("Calf", calfAgbada, setCalfAgbada, "number")}
            {renderInput("Cap", cap, setCap, "number")}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box maxWidth="sm" sx={{ margin: "auto" }} className="my-10">
      <Card className="shadow bg-transparent mx-auto p-6 my-6">
        <form className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          <Box className="flex justify-between mt-4">
            {step > 1 && (
              <Button 
                variant="outlined" 
                sx={{ borderColor: "#CD8F2C", color: "#CD8F2C" }}
                className="rounded bg-goldie px-8 py-2 text-xl 
                            hover:bg-tan hover:text-ggreen
                            border border-goldie hover:border-tan" 
                onClick={prevStep}
              >
                Back
              </Button>
            )}
            {step < 6 ? (
              <Button 
                variant="contained" 
                sx={{ backgroundColor: "#CD8F2C" }}
                className="rounded bg-goldie px-8 py-2 text-xl 
                            hover:bg-transparent hover:text-ggreen
                            border border-goldie hover:border-tan" 
                onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button 
                variant="contained" 
                sx={{ backgroundColor: "#CD8F2C" }}
                className="rounded bg-goldie px-8 py-2 text-xl 
                            hover:bg-tan hover:text-ggreen
                            border border-goldie hover:border-tan" 
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}
          </Box>
        </form>
      </Card>
    </Box>
  );
};