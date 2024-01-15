"use client"
import { useState } from "react";
import { Box, Typography, Button, Card, Grid, Radio } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

interface CustomFile {
  file: File;
  preview: string;
}



export const LoginForm = () => {
    const submitForm = async () => {
    const phoneInput = document.getElementsByName("phone")[0] as HTMLInputElement;
    const passwordInput = document.getElementsByName("pwd")[0] as HTMLInputElement;

    const phone = phoneInput.value;
    const password = passwordInput.value;

        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Phone: phone, Password: password }),
            });

            const data = await response.json();

            if (response.ok) {
              window.location.href = "/custom-image";
            } else {
              console.error("Login error:", data.message);
            }
          } catch (error) {
            console.error("Error during registration:", error);
          }
        };

    return (
        <Box maxWidth="sm" sx={{ margin: "auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" sx={{ display: "flex", flexDirection: "column", position: "relative", left:"7%" }} className="mb-3 gap-6 mx-auto">
                        <input
                            className="shadow appearance-none border rounded w-2/3 py-2 mx-auto px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="phone"
                            required
                            placeholder="Phone Number"
                        />
                        <input
                            className="shadow appearance-none border rounded w-2/3 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            name="pwd"
                            required
                            placeholder="Password"
                        />
                    </Box>
                    <Box className="text-center">
                        <Box className="my-3 text-center">
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: "#CD8F2C" }}
                                className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                        border border-goldie hover:border-tan"
                                onClick={submitForm}
                            >
                                Login
                            </Button>
                        </Box>
                        <Box className="text-center my-3">
                            <span className="text-brownie ps-3 text-xs mr-3">
                                Not Registered Yet?{" "}
                                <Link className="text-goldie" href="/register">
                                    Click Here
                                </Link>
                            </span>
                        </Box>
                    </Box>
                </form>
            </Card>
        </Box>
    );
};

export const Reg1 = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");

    const handleRegistration = async () => {
        try {
          const response = await fetch("/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Name: name,
              Phone: phone,
              Password: password,
              ConfirmPassword: confirmPassword,
              Address: address,
            }),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            window.location.href = "/register2";
          } else {
            console.error("Registration error:", data.message);
          }
        } catch (error) {
          console.error("Error during registration:", error);
        }
      };
      
    return(
        <Box maxWidth="sm" sx={{ margin:"auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">                    
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" className="mx-auto login">
                        <Typography variant="h2"className="text-2xl text-ggreen font-light text-center" gutterBottom>Join the SR Club</Typography>
                        <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>Please fill in your details</Typography>
                        <Box maxWidth="sm" sx={{ display:"flex", flexDirection:"column" }} className="mb-3 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            />
                            <input
                            type="number"
                            placeholder="Phone Number"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            />
                            <input
                            type="password"
                            placeholder="Create Password"
                            name="pwd"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            />
                            <input
                            type="password"
                            placeholder="Confirm Password"
                            name="cpwd"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            />
                            <textarea
                            placeholder="Your Address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                            />

                        </Box>
                        <Box className="text-center">
                            <Box className="my-3 text-center">
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: "#CD8F2C" }}
                                    className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                                            border border-goldie hover:border-tan"
                                    onClick={handleRegistration}
                                    >
                                        Next
                                </Button>
                            </Box>
                            <Box className="text-center my-3">
                                <span className="text-brownie ps-3 text-xs mr-3">Already have an account? <Link className="text-goldie" href="/login">Click Here</Link></span>
                            </Box>
                        </Box>
                    </Box>
                </form>   
            </Card>
        </Box>      
    )
};

export const Reg2 = () => {
    const [blazerTopLength, setBlazerTopLength] = useState("");
    const [blazerShoulder, setBlazerShoulder] = useState("");
    const [blazerChest, setBlazerChest] = useState("");
    const [blazerStomach, setBlazerStomach] = useState("");
    const [blazerSleeve, setBlazerSleeve] = useState("");
    const [blazerBicep, setBlazerBicep] = useState("");
  
    const handleRegistration = async () => {
      try {
        const response = await fetch("/register-blazer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            BlazerTopLength: blazerTopLength,
            BlazerShoulder: blazerShoulder,
            BlazerChest: blazerChest,
            BlazerStomach: blazerStomach,
            BlazerSleeve: blazerSleeve,
            BlazerBicep: blazerBicep,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
            window.location.href = "/register3";
        } else {
          console.error("Registration error:", data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };
  
    return (
      <Box maxWidth="sm" sx={{ margin: "auto" }} className="my-10">
        <Card className="shadow appearance-none bg-transparent mx-auto">
          <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
            <Box maxWidth="sm" className="mx-auto login">
              <Typography variant="h2" className="text-2xl text-ggreen font-light text-center" gutterBottom>
                Blazer and Kaftan
              </Typography>
              <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>
                Please provide your measurement in inches
              </Typography>
              <Box maxWidth="sm" sx={{ display: "flex", flexDirection: "column" }} className="mb-3 gap-6">
                <input
                  type="number"
                  placeholder="Top Length"
                  name="top-length"
                  value={blazerTopLength}
                  onChange={(e) => setBlazerTopLength(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Shoulder"
                  name="shoulder"
                  value={blazerShoulder}
                  onChange={(e) => setBlazerShoulder(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Chest"
                  name="chest"
                  value={blazerChest}
                  onChange={(e) => setBlazerChest(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Blazer Stomach"
                  name="blazer-stomach"
                  value={blazerStomach}
                  onChange={(e) => setBlazerStomach(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Blazer Sleeve"
                  name="blazer-sleeve"
                  value={blazerSleeve}
                  onChange={(e) => setBlazerSleeve(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Bicep"
                  name="bicep"
                  value={blazerBicep}
                  onChange={(e) => setBlazerBicep(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </Box>
              <Box className="text-center">
                <Box className="my-3 text-center">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#CD8F2C" }}
                    className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen border border-goldie hover:border-tan"
                    onClick={handleRegistration}
                  >
                    Next
                  </Button>
                </Box>
                <Box className="text-center my-3">
                  <Link className="text-goldie" href="/register">
                    Go Back
                  </Link>
                </Box>
              </Box>
            </Box>
          </form>
        </Card>
      </Box>
    );
  };

  export const Reg3 = () => {
    const [trouserLength, setTrouserLength] = useState("");
    const [waist, setWaist] = useState("");
    const [hip, setHip] = useState("");
    const [trouserStomach, setTrouserStomach] = useState("");
    const [leg, setLeg] = useState("");
  
    const handleRegistration = async () => {
      try {
        const response = await fetch("/register-trouser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            TrouserLength: trouserLength,
            Waist: waist,
            Hip: hip,
            TrouserStomach: trouserStomach,
            Leg: leg,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
            window.location.href = "/register4";
        } else {
          console.error("Registration error:", data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };
  
    return (
      <Box maxWidth="sm" sx={{ margin: "auto" }} className="my-10">
        <Card className="shadow appearance-none bg-transparent mx-auto">
          <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
            <Box maxWidth="sm" className="mx-auto login">
              <Typography variant="h2" className="text-2xl text-ggreen font-light text-center" gutterBottom>
                Trouser
              </Typography>
              <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>
                Please provide your measurement in inches
              </Typography>
              <Box maxWidth="sm" sx={{ display: "flex", flexDirection: "column" }} className="mb-3 gap-6">
                <input
                  type="number"
                  placeholder="Trouser Length"
                  name="trouser-length"
                  value={trouserLength}
                  onChange={(e) => setTrouserLength(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Waist"
                  name="waist"
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Hip"
                  name="hip"
                  value={hip}
                  onChange={(e) => setHip(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Stomach"
                  name="trouser-stomach"
                  value={trouserStomach}
                  onChange={(e) => setTrouserStomach(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Leg"
                  name="leg"
                  value={leg}
                  onChange={(e) => setLeg(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </Box>
              <Box className="text-center">
                <Box className="my-3 text-center">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#CD8F2C" }}
                    className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen border border-goldie hover:border-tan"
                    onClick={handleRegistration}
                  >
                    Next
                  </Button>
                </Box>
                <Box className="text-center my-3">
                  <Link className="text-goldie" href="/register2">
                    Go Back
                  </Link>
                </Box>
              </Box>
            </Box>
          </form>
        </Card>
      </Box>
    );
  };

  export const Reg5 = () => {
    const [suitLength, setSuitLength] = useState("");
    const [roundBody, setRoundBody] = useState("");
    const [sleeve, setSleeve] = useState("");
    const [back, setBack] = useState("");
    const [roundSleeve, setRoundSleeve] = useState("");
    const [trouserLength, setTrouserLength] = useState("");
    const [trouserWaist, setTrouserWaist] = useState("");
    const [lap, setLap] = useState("");
    const [hip, setHip] = useState("");
    const [calf, setCalf] = useState("");
    const [ankle, setAnkle] = useState("");
  
    const handleRegistration = async () => {
      try {
        const response = await fetch("/register-suit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            SuitLength: suitLength,
            RoundBody: roundBody,
            Sleeve: sleeve,
            Back: back,
            RoundSleeve: roundSleeve,
            TrouserLength: trouserLength,
            TrouserWaist: trouserWaist,
            Lap: lap,
            Hip: hip,
            Calf: calf,
            Ankle: ankle,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
            window.location.href = "/register6";
        } else {
          console.error("Registration error:", data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };
  
    return (
      <Box maxWidth="sm" sx={{ margin: "auto" }} className="my-10">
        <Card className="shadow appearance-none bg-transparent mx-auto">
          <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
            <Box maxWidth="sm" className="mx-auto login">
              <Typography variant="h2" className="text-2xl text-ggreen font-light text-center" gutterBottom>
                Suit
              </Typography>
              <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>
                Please provide your measurement in inches
              </Typography>
              <Box maxWidth="sm" sx={{ display: "flex", flexDirection: "column" }} className="mb-3 gap-6">
                <input
                  type="number"
                  placeholder="Suit Length"
                  name="suit-length"
                  value={suitLength}
                  onChange={(e) => setSuitLength(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Round Body"
                  name="suit-body"
                  value={roundBody}
                  onChange={(e) => setRoundBody(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Sleeve"
                  name="sleeve"
                  value={sleeve}
                  onChange={(e) => setSleeve(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Back"
                  name="back"
                  value={back}
                  onChange={(e) => setBack(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Round Sleeve"
                  name="round-sleeve"
                  value={roundSleeve}
                  onChange={(e) => setRoundSleeve(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Trouser Length"
                  name="trouser-length"
                  value={trouserLength}
                  onChange={(e) => setTrouserLength(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Trouser Waist"
                  name="trouser-waist"
                  value={trouserWaist}
                  onChange={(e) => setTrouserWaist(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Lap"
                  name="lap"
                  value={lap}
                  onChange={(e) => setLap(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Hip"
                  name="hip"
                  value={hip}
                  onChange={(e) => setHip(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Calf"
                  name="calf"
                  value={calf}
                  onChange={(e) => setCalf(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Ankle"
                  name="ankle"
                  value={ankle}
                  onChange={(e) => setAnkle(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </Box>
              <Box className="text-center">
                <Box className="my-3 text-center">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#CD8F2C" }} 
                    onClick={handleRegistration}
                    className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                        border border-goldie hover:border-tan">
                        Next
                </Button>
            </Box>
            <Box className="text-center my-3">
                <Link className="text-goldie" href="/register4">Go Back</Link>
            </Box>
        </Box>
    </Box>
                </form>   
            </Card>
        </Box>      
    )
};

export const Reg4 = () => {
    const [shirtLength, setShirtLength] = useState("");
    const [chest, setChest] = useState("");
    const [shoulder, setShoulder] = useState("");
    const [sleeve, setSleeve] = useState("");
    const [stomach, setStomach] = useState("");
    const [collar, setCollar] = useState("");
  
    const handleRegistration = async () => {
      try {
        const response = await fetch("/register-shirt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ShirtLength: shirtLength,
            Chest: chest,
            Shoulder: shoulder,
            Sleeve: sleeve,
            Stomach: stomach,
            Collar: collar,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
            window.location.href = "/register5";
        } else {
          console.error("Registration error:", data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };
  
    return (
      <Box maxWidth="sm" sx={{ margin: "auto" }} className="my-10">
        <Card className="shadow appearance-none bg-transparent mx-auto">
          <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
            <Box maxWidth="sm" className="mx-auto login">
              <Typography variant="h2" className="text-2xl text-ggreen font-light text-center" gutterBottom>
                Shirt
              </Typography>
              <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>
                Please provide your measurement in inches
              </Typography>
              <Box maxWidth="sm" sx={{ display: "flex", flexDirection: "column" }} className="mb-3 gap-6">
                <input
                  type="number"
                  placeholder="Shirt Length"
                  name="shirt-length"
                  value={shirtLength}
                  onChange={(e) => setShirtLength(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Chest"
                  name="chest"
                  value={chest}
                  onChange={(e) => setChest(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Shoulder"
                  name="shoulder"
                  value={shoulder}
                  onChange={(e) => setShoulder(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Sleeve"
                  name="sleeve"
                  value={sleeve}
                  onChange={(e) => setSleeve(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Stomach"
                  name="stomach"
                  value={stomach}
                  onChange={(e) => setStomach(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Collar"
                  name="collar"
                  value={collar}
                  onChange={(e) => setCollar(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </Box>
              <Box className="text-center">
                <Box className="my-3 text-center">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#CD8F2C" }}
                    className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen border border-goldie hover:border-tan"
                    onClick={handleRegistration}
                  >
                    Next
                  </Button>
                </Box>
                <Box className="text-center my-3">
                  <Link className="text-goldie" href="/register3">
                    Go Back
                  </Link>
                </Box>
              </Box>
            </Box>
          </form>
        </Card>
      </Box>
    );
  };

  export const Reg6 = () => {
    const [agbadaLength, setAgbadaLength] = useState("");
    const [agbadaBodyLength, setAgbadaBodyLength] = useState("");
    const [agbadaChest, setAgbadaChest] = useState("");
    const [chest, setChest] = useState("");
    const [back, setBack] = useState("");
    const [shortSleeve, setShortSleeve] = useState("");
    const [longSleeve, setLongSleeve] = useState("");
    const [neck, setNeck] = useState("");
    const [stomach, setStomach] = useState("");
    const [trouserLength, setTrouserLength] = useState("");
    const [trouserWaist, setTrouserWaist] = useState("");
    const [lap, setLap] = useState("");
    const [hip, setHip] = useState("");
    const [calf, setCalf] = useState("");
    const [cap, setCap] = useState("");
  
    const handleRegistration = async () => {
      try {
        const response = await fetch("/register-agbada", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            AgbadaLength: agbadaLength,
            AgbadaBodyLength: agbadaBodyLength,
            AgbadaChest: agbadaChest,
            Chest: chest,
            Back: back,
            ShortSleeve: shortSleeve,
            LongSleeve: longSleeve,
            Neck: neck,
            Stomach: stomach,
            TrouserLength: trouserLength,
            TrouserWaist: trouserWaist,
            Lap: lap,
            Hip: hip,
            Calf: calf,
            Cap: cap,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          console.log("Registration successful:", data);
        } else {
          console.error("Registration error:", data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };
  
    return (
      <Box maxWidth="sm" sx={{ margin: "auto" }} className="my-10">
        <Card className="shadow appearance-none bg-transparent mx-auto">
          <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
            <Box maxWidth="sm" className="mx-auto login">
              <Typography variant="h2" className="text-2xl text-ggreen font-light text-center" gutterBottom>
                Agbada
              </Typography>
              <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>
                Please provide your measurement in inches
              </Typography>
              <Box maxWidth="sm" sx={{ display: "flex", flexDirection: "column" }} className="mb-3 gap-6">
                <input
                  type="number"
                  placeholder="Agbada Length"
                  name="agbada-length"
                  value={agbadaLength}
                  onChange={(e) => setAgbadaLength(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Agbada Body-Length"
                  name="agbada-bodyLength"
                  value={agbadaBodyLength}
                  onChange={(e) => setAgbadaBodyLength(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Agbada Chest"
                  name="agbada-chest"
                  value={agbadaChest}
                  onChange={(e) => setAgbadaChest(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="number"
                  placeholder="Chest"
                  name="chest"
                  value={chest}
                  onChange={(e) => setChest(e.target.value)}
                  className=" shadow appearance-none border rounded w-1/2 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />

              </Box>
              <Box className="text-center">
                <Box className="my-3 text-center">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#CD8F2C" }}
                    className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen
                          border border-goldie hover:border-tan"
                    onClick={handleRegistration}
                  >
                    Submit
                  </Button>
                </Box>
                <Box className="text-center my-3">
                  <Link className="text-goldie" href="/register5">
                    Go Back
                  </Link>
                </Box>
              </Box>
            </Box>
          </form>
        </Card>
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
      const whatsappLink = `https://wa.me/+2347036400067?text=${encodeURIComponent(whatsappMessage)}`;
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
      setFormData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  };

    const handleSubmit = async () => {
      try {
          const response = await axios.post("/submit-appointment", formData);
  
          if (response.status === 200) {
              const data = response.data;
              console.log("Appointment submitted:", data.message);
  
              // Now, create a WhatsApp message with the form data
              const whatsappMessage = `Hi, I would like to book an appointment:
                  *Name:* ${formData.name}
                  *Phone:* ${formData.phone}
                  *Reason:* ${formData.reason}
                  *First Visit:* ${formData.firstVisit}
                  *Callback Preferred:* ${formData.callback}
                  *Visit Preference:* ${formData.visitPreference}`;
  
              const encodedMessage = encodeURIComponent(whatsappMessage);
  
              const whatsappLink = `https://wa.me/+2347036400067?text=${encodedMessage}`;
  
              window.open(whatsappLink, "_blank");
          } else {
              console.error("Appointment submission error:", response.statusText);
          }
      } catch (error) {
          console.error("Error during appointment submission:", error);
      }
  };

    return (
        <Box maxWidth="sm" sx={{ margin: "auto" }} className="my-10">
            <Card className="shadow appearance-none bg-transparent mx-auto">
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box maxWidth="sm" className="mx-auto login">
                        <Typography variant="h2" className="text-2xl text-ggreen font-light text-center" gutterBottom>
                            Book Appointment
                        </Typography>
                        <Typography variant="h5" className="text-sm mt-2 text-center text-butter" paragraph gutterBottom>
                            We will contact you with the next available appointment date
                        </Typography>
                        <Box maxWidth="sm" sx={{ display: "flex", flexDirection: "column" }} className="mb-3 gap-6">
                            <Grid>
                                <label className="text-ggreen text-l font-light mb-2" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    className="shadow appearance-none border rounded w-full mb-4 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    className="shadow appearance-none border rounded w-full mb-6 py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </Grid>
                            <Grid>
                                <label className="text-ggreen text-l font-light mb-2" htmlFor="reason">
                                    Why would you like to book this appointment?
                                </label>
                                <textarea
                                    name="reason"
                                    placeholder="Enter your reason here..."
                                    className="shadow appearance-none border rounded w-full py-2 px-4 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                    onChange={(e) => handleInputChange("reason", e.target.value)}
                                ></textarea>
                            </Grid>
                            <Grid>
                                <label className="text-ggreen text-l font-light mb-2" htmlFor="firstVisit">
                                    Is this your first visit to our offices?
                                </label>
                                <ul>
                                    <li>
                                        <input
                                            type="radio"
                                            name="firstVisit"
                                            value="Yes"
                                            onChange={() => handleInputChange("firstVisit", "Yes")}
                                        />
                                        <label htmlFor="firstVisitYes">Yes</label>
                                    </li>
                                    <li className="choice-2">
                                        <input
                                            type="radio"
                                            name="firstVisit"
                                            value="No"
                                            onChange={() => handleInputChange("firstVisit", "No")}
                                        />
                                        <label htmlFor="firstVisitNo">No</label>
                                    </li>
                                    <li className="choice-3">
                                        <input
                                            type="radio"
                                            name="firstVisit"
                                            value="NotSure"
                                            onChange={() => handleInputChange("firstVisit", "NotSure")}
                                        />
                                        <label htmlFor="firstVisitNotSure">Not sure</label>
                                    </li>
                                </ul>
                            </Grid>

                            <Grid>
                                <label className="text-ggreen text-l font-light mb-2" htmlFor="callback">
                                    Would you prefer a callback instead?
                                </label>
                                <ul>
                                    <li>
                                        <input
                                            type="radio"
                                            value="Yes"
                                            name="callback"
                                            onChange={() => handleInputChange("callback", "Yes")}
                                        />
                                        <label htmlFor="callback">Yes</label>
                                    </li>
                                    <li className="choice-2">
                                        <input
                                            type="radio"
                                            value="No"
                                            name="callback"
                                            onChange={() => handleInputChange("callback", "No")}
                                        />
                                        <label htmlFor="callback">No</label>
                                    </li>
                                    <li className="choice-3">
                                        <input
                                            type="radio"
                                            value="Maybe"
                                            name="callback"
                                            onChange={() => handleInputChange("callback", "Maybe")}
                                        />
                                        <label htmlFor="callback">Maybe</label>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid>
                                <label className="text-ggreen text-l font-light mb-2" htmlFor="visitPreference">
                                    When would you prefer to visit?
                                </label>
                                <ul>
                                    <li>
                                        <input
                                            type="radio"
                                            value="three_days"
                                            name="visitPreference"
                                            onChange={() => handleInputChange("visitPreference", "three_days")}
                                        />
                                        <label htmlFor="visitPreference">Within 72 hours</label>
                                    </li>
                                    <li>
                                        <input
                                            type="radio"
                                            value="one_week"
                                            name="visitPreference"
                                            onChange={() => handleInputChange("visitPreference", "one_week")}
                                        />
                                        <label htmlFor="visitPreference">Within a week</label>
                                    </li>
                                    <li className="choice-3">
                                        <input
                                            type="radio"
                                            value="two_weeks"
                                            name="visitPreference"
                                            onChange={() => handleInputChange("visitPreference", "two_weeks")}
                                        />
                                        <label htmlFor="visitPreference">Within 2 weeks</label>
                                    </li>
                                </ul>
                            </Grid>
                        
                            <Box className="text-center">
                                <Box className="my-3 text-center">
                                    <Button
                                        variant="contained"
                                        sx={{ backgroundColor: "#CD8F2C" }}
                                        className="rounded bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-ggreen border border-goldie hover:border-tan"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </form>
            </Card>
        </Box>
    );
};
