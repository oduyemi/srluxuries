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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg", "image/webp"];


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
  const [files, setFiles] = useState<CustomFile[]>([]);
  const [phone, setPhone] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const newFiles: CustomFile[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (!ALLOWED_TYPES.includes(file.type)) {
        alert(`File ${file.name} has unsupported format`);
        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        alert(`File ${file.name} exceeds 5MB`);
        continue;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFiles((prev) => [...prev, { file, preview: reader.result as string }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!phone) {
      alert("Please enter your phone number");
      return;
    }

    if (files.length === 0) {
      alert("Please select at least one file");
      return;
    }

    const formData = new FormData();
    formData.append("phone", phone);
    files.forEach((f) => formData.append("files", f.file));
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok) {
        alert("Files uploaded successfully!");
        window.open(
          `https://wa.me/+2349159999965?text=${encodeURIComponent(
            `Hi, I have uploaded my custom style images:\n${data.urls.join("\n")}`
          )}`,
          "_blank"
        );
        setFiles([]);
        setPhone("");
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading files");
    }
  };

  return (
    <Box maxWidth="md" sx={{ margin: "auto", my: 10 }}>
      <Card className="shadow p-6 bg-white rounded-lg">
        <Typography variant="h4" className="text-goldie" textAlign="center" gutterBottom>
          Upload Your Style
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center" paragraph>
          Upload up to 3 images of your custom style. Only images under 5MB are allowed.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 2 }}>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded w-full py-2 px-4"
          />

          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.webp"
            onChange={handleFileChange}
            className="border rounded w-full py-2 px-4"
          />

          {files.length > 0 && (
            <Grid container spacing={2}>
              {files.map((f, index) => (
                <Grid item xs={4} sm={3} key={index}>
                  <Box sx={{ position: "relative", width: "100%", pt: "100%" }}>
                    <Image
                      src={f.preview}
                      alt={`Preview ${index + 1}`}
                      fill
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}

          <Button
            variant="contained"
            sx={{ backgroundColor: "#CD8F2C", py: 1.5 }}
            onClick={handleUpload}
          >
            Upload
          </Button>
        </Box>
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
    <Box
      sx={{
        maxWidth: { xs: "95%", sm: "600px" },
        margin: "auto",
        my: 6,
        px: { xs: 2, sm: 0 },
      }}
    >
      <Card
        sx={{
          p: { xs: 3, sm: 6 },
          borderRadius: 3,
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffffcc", // subtle transparency
          backdropFilter: "blur(8px)",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 500,
            color: "#2C5F2D",
            mb: 1,
            fontSize: { xs: "1.75rem", sm: "2rem" },
          }}
        >
          Book Appointment
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#D4A017",
            mb: 4,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          We will contact you with the next available appointment date
        </Typography>

        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Name & Phone */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                required
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                required
                size="small"
              />
            </Grid>
          </Grid>

          {/* Reason */}
          <TextField
            label="Reason for Appointment"
            placeholder="Enter your reason..."
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            required
            size="small"
          />

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

          {/* Submit Button */}
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D4A017",
                color: "#1F1F1F",
                px: 6,
                py: 1.5,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                borderRadius: 3,
                "&:hover": {
                  backgroundColor: "#FFC857",
                  color: "#1F1F1F",
                },
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
