const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const multer = require("multer");
const path = require("path");
const next = require("next");
const cloudinary = require("cloudinary").v2;

// MongoDB connection
const { dbConnect } = require("./db");

// Import routes
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb("Error: Images only!");
    }
  },
});

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const app = express();

const corsOptions = {
  origin: ["https://srluxuries.com", "https://www.srluxuries.com", "http://localhost:3000"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.json());

// ================== ROUTES ==================
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
// ============================================

const port = process.env.PORT || 3001;

nextApp.prepare().then(async () => {
  // connect to db before starting server
  await dbConnect();

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://srluxuries.com:${port}`);
  });
});

module.exports = app;
