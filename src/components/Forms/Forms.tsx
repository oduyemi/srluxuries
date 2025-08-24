"use client"
import { useState } from "react";
import { Box, Typography, Button, Card, Grid, TextField } from "@mui/material";
import { RadioGroupInput } from "./RadioGroupInput";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";

interface CustomFile {
  file: File;
  preview: string;
}


export const LoginForm = () => {
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneInput = document.getElementsByName("phone")[0] as HTMLInputElement;
    const passwordInput = document.getElementsByName("pwd")[0] as HTMLInputElement;

    const phone = phoneInput.value;
    const password = passwordInput.value;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Phone: phone, Password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = "/custom-image";
      } else {
        console.error("Login error:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Box className="flex items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl rounded-2xl p-8 backdrop-blur bg-white/90">
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            gutterBottom
            className="text-goldie"
          >
            Welcome Back
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            className="mb-6"
          >
            Login to continue your journey
          </Typography>

          <form onSubmit={submitForm} className="flex flex-col gap-5">
            <TextField
              label="Phone Number"
              name="phone"
              type="number"
              required
              fullWidth
              variant="outlined"
              InputProps={{ sx: { borderRadius: 3 } }}
            />

            <TextField
              label="Password"
              name="pwd"
              type="password"
              required
              fullWidth
              variant="outlined"
              InputProps={{ sx: { borderRadius: 3 } }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#CD8F2C",
                borderRadius: 3,
                py: 1.5,
                fontSize: "1rem",
                textTransform: "none",
                fontWeight: 600,
                '&:hover': { backgroundColor: "#b37a23" },
              }}
            >
              Login
            </Button>
          </form>

          <Typography
            variant="body2"
            align="center"
            className="mt-6 text-gray-700"
          >
            Not Registered Yet? {" "}
            <Link href="/register" className="text-goldie font-semibold hover:underline">
              Click Here
            </Link>
          </Typography>
        </Card>
      </motion.div>
    </Box>
  );
};


export const CustomStyle = () => {
  const [file1, setFile1] = useState<CustomFile | null>(null);
  const [file2, setFile2] = useState<CustomFile | null>(null);
  const [file3, setFile3] = useState<CustomFile | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<CustomFile | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter((prevFile) => ({ file, preview: reader.result as string }));
      };
      reader.readAsDataURL(file);
    } else {
      setter(null);
    }
  };

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/dymd1jkbl/image/upload/v1691953768/srl/uploads`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ynb6urq8");

    const response = await fetch(cloudinaryUploadUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error uploading to Cloudinary: ${response.statusText}`);
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleUpload = async () => {
    try {
      const uploadPromises = [file1, file2, file3]
        .filter((file) => file !== null)
        .map(async (file) => await uploadToCloudinary(file!.file));

      const cloudinaryLinks = await Promise.all(uploadPromises);
      console.log("Cloudinary Links:", cloudinaryLinks);

      const whatsappMessage = `Hi, I have uploaded my custom style. Here are the images:\n${cloudinaryLinks.join("\n")}`;
      const whatsappLink = `https://wa.me/+2349159999965?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappLink, "_blank");
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  return (
    <Box maxWidth="sm" sx={{ margin: "auto" }} className="my-10">
      <Card className="shadow appearance-none bg-transparent mx-auto">
        <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
          <Box maxWidth="sm" className="mx-auto login">
            <Typography variant="h2" className="text-2xl text-ggreen font-light text-center" gutterBottom>
              Upload Your Style!
            </Typography>
            <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>
              Upload up to 3 images of your custom style
            </Typography>
            <Box maxWidth="sm" sx={{ display: "flex", flexDirection: "column" }} className="mb-3 gap-6">
              <input
                type="file"
                name="img1"
                placeholder="Upload"
                onChange={(e) => handleFileChange(e, setFile1)}
                className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <input
                type="file"
                name="img2"
                placeholder="Upload"
                onChange={(e) => handleFileChange(e, setFile2)}
                className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <input
                type="file"
                name="img3"
                placeholder="Upload"
                onChange={(e) => handleFileChange(e, setFile3)}
                className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />

                {file1 && <Image src={file1.preview} alt="Preview" width={100} height={100} />}
                {file2 && <Image src={file2.preview} alt="Preview" width={100} height={100} />}
                {file3 && <Image src={file3.preview} alt="Preview" width={100} height={100} />}
            </Box>
            <Box className="text-center">
              <Box className="my-3 text-center">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#CD8F2C" }}
                  className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen border border-goldie hover:border-tan"
                  onClick={handleUpload}
                >
                  Upload
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Card>
    </Box>
  );
};


export const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "",
    firstVisit: "",
    callback: "",
    visitPreference: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/appointments", formData);
      if (response.status === 201) {
        const data = response.data;
        const whatsappMessage = `Hi, I would like to book an appointment:
          *Name:* ${formData.name}
          *Phone:* ${formData.phone}
          *Reason:* ${formData.reason}
          *First Visit:* ${formData.firstVisit || "Not Specified"}
          *Callback Preferred:* ${formData.callback || "No"}
          *Visit Preference:* ${formData.visitPreference}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappLink = `https://wa.me/+2349159999965?text=${encodedMessage}`;
        window.open(whatsappLink, "_blank");

        console.log("Appointment submitted:", data.message);
      } else {
        console.error("Appointment submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Error during appointment submission:", error);
    }
  };

  return (
    <Box maxWidth="sm" sx={{ margin: "auto" }} className="my-10">
      <Card className="shadow bg-transparent mx-auto p-6">
        <form>
          <Typography variant="h2" className="text-2xl text-ggreen font-light text-center" gutterBottom>
            Book Appointment
          </Typography>
          <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>
            We will contact you with the next available appointment date
          </Typography>

          <Box className="flex flex-col gap-6">
            {/* Name */}
            <Grid>
              <label className="text-ggreen text-l font-light mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="shadow border rounded w-full mb-4 py-2 px-4"
                required
              />
              <input
                type="number"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="shadow border rounded w-full mb-4 py-2 px-4"
                required
              />
            </Grid>

            {/* Reason */}
            <Grid>
              <label className="text-ggreen text-l font-light mb-2">
                Why would you like to book this appointment?
              </label>
              <textarea
                value={formData.reason}
                onChange={(e) => handleInputChange("reason", e.target.value)}
                placeholder="Enter your reason here..."
                className="shadow border rounded w-full py-2 px-4"
                required
              />
            </Grid>

            {/* First Visit */}
            <RadioGroupInput
              label="Is this your first visit to our offices?"
              name="firstVisit"
              value={formData.firstVisit}
              onChange={handleInputChange}
              options={[
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "Not Sure", value: "NotSure" },
              ]}
            />

            {/* Callback */}
            <RadioGroupInput
              label="Would you prefer a callback instead?"
              name="callback"
              value={formData.callback}
              onChange={handleInputChange}
              options={[
                { label: "Yes", value: "Yes" },
                { label: "No", value: "No" },
                { label: "Maybe", value: "Maybe" },
              ]}
            />

            {/* Visit Preference */}
            <RadioGroupInput
              label="When would you prefer to visit?"
              name="visitPreference"
              value={formData.visitPreference}
              onChange={handleInputChange}
              options={[
                { label: "Within 72 hours", value: "three_days" },
                { label: "Within a week", value: "one_week" },
                { label: "Within 2 weeks", value: "two_weeks" },
              ]}
            />

            <Box className="text-center my-4">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#CD8F2C" }}
                className="rounded px-8 py-2 text-xl hover:bg-tan hover:text-ggreen"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </Card>
    </Box>
  );
};
