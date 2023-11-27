const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const router = express.Router();
require("dotenv").config();
const crypto = require("crypto");
const session = require("express-session");
const multer = require("multer");
const path = require("path");
const next = require('next');
const cloudinary = require("cloudinary").v2;


// Cloudinary config
cloudinary.config({
    cloud_name: "dymd1jkbl",
    api_key: "889361695447487",
    api_secret: "BtWnsFs30ET178eDvdPpuXZnuIU",
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
  
  const dev = process.env.NODE_ENV !== 'production';
  const nextApp = next({ dev });
  const handle = nextApp.getRequestHandler();
  const app = express();


const corsOptions = {
    origin: 'https://thesrluxuries.com/',
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
  
app.use(session({
    secret: "109108b5307f7beda5999b86cfd2eb7279c1c19407adfb1d5e33d2199bf4cba",
    resave: false,
    saveUninitialized: true,
  }));

app.use("/api", router);
app.use(bodyParser.json());

const port = process.env.PORT || 3001;


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


// Database
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "yemizgve_modeDeploy",
    password: "00duy3m1P",
    database: "yemizgve_srldb"
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL Database", err);
    } else{
        console.log("Connected to MySQL Database");
    }
});

// Table creation
const createUserTable = `
    CREATE TABLE IF NOT EXISTS user (
        UserId INT NOT NULL AUTO_INCREMENT,
        Name VARCHAR(120),
        Phone VARCHAR(50),
        Password VARCHAR(80),
        Address TEXT,
        BlazerTopLength INT,
        BlazerShoulder INT,
        BlazerChest INT,
        BlazerStomach INT,
        BlazerSleeve INT,
        BlazerBicep INT,
        TrouserLength INT,
        TrouserWaist INT,
        TrouserHip INT,
        TrouserStomach INT,
        TrouserLeg INT,
        ShirtLength INT,
        ShirtChest INT,
        ShirtShoulder INT,
        ShirtSleeve INT,
        ShirtStomach INT,
        ShirtCollar INT,
        SuitLength INT,
        SuitBody INT,
        SuitSleeve INT,
        SuitBack INT,
        SuitRoundSleeve INT,
        SuitTrouserLength INT,
        SuitTrouserWaist INT,
        SuitLap INT,
        SuitHip INT,
        SuitCalf INT,
        SuitAnkle INT,
        AgbadaLength INT,
        AgbadaBodyLength INT,
        AgbadaChest INT,
        AgbadaBack INT,
        AgbadaShortSleeve INT,
        AgbadaLongSleeve INT,
        AgbadaNeck INT,
        AgbadaStomach INT,
        AgbadaTrouserLength INT,
        AgbadaTrouserWaist INT,
        AgbadaLap INT,
        AgbadaHip INT,
        AgbadaCalf INT,
        AgbadaCap INT,
        PRIMARY KEY (UserId)
    );
`;

const createProductCategoryTable = `
    CREATE TABLE IF NOT EXISTS productcategory (
        ProductCategoryId INT NOT NULL AUTO_INCREMENT,
        Name VARCHAR(255),
        Description Text,
        PRIMARY KEY (ProductCategoryId)
    );
`;

const createProductTable = `
    CREATE TABLE IF NOT EXISTS product (
        ProductId INT NOT NULL AUTO_INCREMENT,
        ProductName VARCHAR(255),
        ProductCategoryId INT,
        Price FLOAT,
        ProductImage VARCHAR(255),
        ProductHoverImage VARCHAR(255),
        PRIMARY KEY (ProductId),
        FOREIGN KEY (ProductCategoryId) REFERENCES productcategory(ProductCategoryId)
    );
`;

const createAppointmentTable = `
CREATE TABLE IF NOT EXISTS appointment (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    phone VARCHAR(50),
    reason TEXT,
    firstVisit VARCHAR(10),
    callback VARCHAR(10),
    visitPreference VARCHAR(10),
    PRIMARY KEY (id)
);
`;

db.query(createUserTable, (err, result) => {
    if (err) {
        console.error("Error creating user table", err);
    } else {
        console.log("User table created successfully");
    }
});
    

db.query(createProductCategoryTable, (err, result) => {
    if (err) {
        console.error("Error creating productcategory table", err);
    } else {
        console.log("ProductCategory table created successfully");
    }
});

db.query(createProductTable, (err, result) => {
    if (err) {
        console.error("Error creating product table", err);
    } else {
        console.log("Product table created successfully");
    }
});

db.query(createAppointmentTable, (err, result) => {
    if (err) {
        console.error("Error creating Appointment table", err);
    } else {
        console.log("Appointment table created successfully");
    }
});


    //  P O S T    R E Q U E S T S

    //  registration
app.post('/register', (req, res) => {
    try {
        const { Name, Phone, Password, ConfirmPassword, Address } = req.body;

        if (!Name || !Phone || !Password || !ConfirmPassword || !Address) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const checkPhoneQuery = 'SELECT * FROM User WHERE Phone = ?';
        db.query(checkPhoneQuery, [Phone], async function (err, results) {
            if (err) {
                return res.status(500).json({ message: 'Error checking phone number' });
            }

            if (results.length > 0) {
                return res.status(400).json({ message: 'Phone number already registered' });
            }

            if (Password !== ConfirmPassword) {
                return res.status(400).json({ message: 'Both passwords must match!' });
            }

            const { salt, hashedPassword } = await hashPassword(Password);

            const insertUserQuery = 'INSERT INTO user (Name, Phone, Password) VALUES (?, ?, ?)';
            db.query(insertUserQuery, [Name, Phone, hashedPassword], function (err, result) {
                if (err) {
                    return res.status(500).json({ message: 'Error registering user' });
                }

                req.session.user = {
                    userId: result.insertId,
                    Name,
                    Phone,
                    Address
                };

                return res.status(201).json({
                    message: 'User registered successfully',
                    nextStep: '/next-registration-page'
                });
            });
        });

    } catch (error) {
        console.error('Error during user registration:', error);
        return res.status(500).json({ message: 'Error registering user' });
    }
});
    


router.post("/register-blazer", (req, res) => {
    const user = req.session.user;
    if (!user) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    const { BlazerTopLength, BlazerShoulder, BlazerChest, BlazerStomach, BlazerSleeve, BlazerBicep } = req.body;

    if (!BlazerTopLength || !BlazerShoulder || !BlazerChest || !BlazerStomach || !BlazerSleeve || !BlazerBicep) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const updateBlazerQuery = `
        UPDATE user 
        SET BlazerTopLength = ?, BlazerShoulder = ?, BlazerChest = ?, 
            BlazerStomach = ?, BlazerSleeve = ?, BlazerBicep = ? 
        WHERE UserId = ?`;

    db.query(
        updateBlazerQuery,
        [BlazerTopLength, BlazerShoulder, BlazerChest, BlazerStomach, BlazerSleeve, BlazerBicep, user.userId],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error updating user information" });
            }

            return res.status(201).json({
                message: "Blazer information registered successfully",
                nextStep: "/next-registration-page"
            });
        }
    );
});

router.post("/register-trouser", (req, res) => {
    const user = req.session.user;
    if (!user) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    const { TrouserLength, TrouserWaist, TrouserHip, TrouserStomach, TrouserLeg } = req.body;

    if (!TrouserLength || !TrouserWaist || !TrouserHip || !TrouserStomach || !TrouserLeg) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const updateTrouserQuery = `
        UPDATE user 
        SET TrouserLength = ?, TrouserWaist = ?, TrouserHip = ?, 
            TrouserStomach = ?, TrouserLeg = ?
        WHERE UserId = ?`;

    db.query(
        updateTrouserQuery,
        [TrouserLength, TrouserWaist, TrouserHip, TrouserStomach, TrouserLeg, user.userId],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error updating user information" });
            }

            return res.status(201).json({
                message: "Trouser information registered successfully",
                nextStep: "/next-registration-page"
            });
        }
    );
});


router.post("/register-shirt", (req, res) => {
    const user = req.session.user;
    if (!user) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    const { ShirtLength, ShirtChest, ShirtShoulder, ShirtSleeve, ShirtStomach, ShirtCollar } = req.body;
    
    if (!ShirtLength || !ShirtChest || !ShirtShoulder || !ShirtSleeve || !ShirtStomach || !ShirtCollar) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const updateShirtQuery = `
        UPDATE user 
        SET ShirtLength = ?, ShirtChest = ?, ShirtShoulder = ?, 
            ShirtSleeve = ?, ShirtStomach = ?, ShirtCollar = ? 
        WHERE UserId = ?`;

    db.query(
        updateShirtQuery,
        [ShirtLength, ShirtChest, ShirtShoulder, ShirtSleeve, ShirtStomach, ShirtCollar, user.userId],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error updating user information" });
            }

            return res.status(201).json({
                message: "Trouser information registered successfully",
                nextStep: "/next-registration-page"
            });
        }
    );
});


router.post("/register-suit", (req, res) => {
    const user = req.session.user;
    if (!user) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    const { 
        SuitLength, SuitBody, SuitSleeve, 
        SuitBack, SuitRoundSleeve, SuitTrouserLength,  
        SuitTrouserWaist, SuitLap, SuitHip, 
        SuitCalf, SuitAnkle } = req.body;
    
    if (!SuitLength || !SuitBody || !SuitSleeve || !SuitBack || !SuitRoundSleeve ||
            !SuitTrouserLength || !SuitTrouserWaist || !SuitLap || !SuitHip || !SuitCalf || !SuitAnkle) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const updateSuitQuery = `
        UPDATE user 
        SET SuitLength = ?, SuitBody = ?, SuitSleeve = ?, 
            SuitBack = ?, SuitRoundSleeve = ?, SuitTrouserLength = ?,  
            SuitTrouserWaist = ?, SuitLap = ?, SuitHip = ?, 
            SuitCalf = ?, SuitAnkle = ?
        WHERE UserId = ?`;

    db.query(
        updateSuitQuery,
        [SuitLength, SuitBody, SuitSleeve, SuitBack, SuitRoundSleeve,
            SuitTrouserLength, SuitTrouserWaist, SuitLap, SuitHip, 
            SuitCalf, SuitAnkle, user.userId],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error updating user information" });
            }

            return res.status(201).json({
                message: "Suit information registered successfully",
                nextStep: "/next-registration-page"
            });
        }
    );
});


router.post("/register-agbada", (req, res) => {
    const user = req.session.user;
    if (!user) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    const { 
        AgbadaLength, AgbadaBodyLength, AgbadaChest,  AgbadaBack,
        AgbadaShortSleeve, AgbadaLongSleeve, AgbadaNeck,  
        AgbadaStomach, AgbadaTrouserLength, AgbadaTrouserWaist, 
        AgbadaLap, AgbadaHip, AgbadaCalf, AgbadaCap } = req.body;
    
    if (!AgbadaLength || !AgbadaBodyLength || !AgbadaChest || !AgbadaBack || !AgbadaShortSleeve ||
        !AgbadaLongSleeve || !AgbadaNeck || !AgbadaStomach || !AgbadaTrouserLength ||
        !AgbadaTrouserWaist || !AgbadaLap || !AgbadaHip || !AgbadaCalf || !AgbadaCap) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const updateAgbadaQuery = `
        UPDATE user 
        SET AgbadaLength = ?, AgbadaBodyLength = ?, AgbadaChest = ?,  AgbadaBack = ?,
            AgbadaShortSleeve = ?, AgbadaLongSleeve = ?, AgbadaNeck = ?, AgbadaStomach = ?,
            AgbadaTrouserLength = ?, AgbadaTrouserWaist = ?, AgbadaLap = ?, AgbadaHip = ?,
            AgbadaCalf = ?, AgbadaCap = ?
        WHERE UserId = ?`;

    db.query(
        updateAgbadaQuery,
        [AgbadaLength, AgbadaBodyLength, AgbadaChest,  AgbadaBack,
            AgbadaShortSleeve, AgbadaLongSleeve, AgbadaNeck, AgbadaStomach,
            AgbadaTrouserLength, AgbadaTrouserWaist, AgbadaLap, AgbadaHip,
            AgbadaCalf, AgbadaCap, user.userId],
        (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Error updating user information" });
            }

            return res.status(201).json({
                message: "User registered successfully",
                nextStep: "redirect to login"
            });
        }
    );
});

    //   login
router.post('/login', (req, res) => {
    const { Phone, Password } = req.body; 
    if (!Phone || !Password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const checkUserQuery = 'SELECT * FROM user WHERE Phone = ?';
    db.query(checkUserQuery, [Phone], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error checking user' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Phone number not registered. Please register first.' });
        }

        const user = results[0];
        const isPasswordMatch = await verifyPassword(Password, user.Password, user.salt);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Incorrect phone number or password' });
        }


        const sessionUser = {
            userId: user.UserId,
            Name: user.Name,
            Phone: user.Phone,
            Address: user.Address,
        };
        req.session.user = sessionUser;
        return res.status(200).json({
            message: 'Login successful',
            user: sessionUser,
            nextStep: '/custom-image', 
        });
    });
});


app.post("/upload", upload.array("images", 3), async (req, res) => {
    try {
      const files = req.files;
  
      const uploadPromises = files.map((file) => {
        return cloudinary.uploader.upload_stream({ resource_type: "auto" }, (result, error) => {
          if (error) {
            console.error("Error uploading file to Cloudinary:", error);
            res.status(500).json({ message: "Internal Server Error" });
          } else {
            console.log("File uploaded to Cloudinary:", result);
          }
        }).end(file.buffer);
      });
  
      await Promise.all(uploadPromises);
  
      res.status(200).json({ message: "Files uploaded to Cloudinary successfully" });
    } catch (error) {
      console.error("Error uploading files:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });


  app.post("/submit-appointment", (req, res) => {
    const { name, phone, reason, firstVisit, callback, visitPreference } = req.body;

    const insertAppointmentQuery = "INSERT INTO appointment (name, phone, reason, firstVisit, callback, visitPreference) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(insertAppointmentQuery, [name, phone, reason, firstVisit, callback, visitPreference], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error registering appointment" });
        }

        return res.status(201).json({
            message: "Appointment submitted successfully",
            nextStep: "/",
        });
    });
});



// G E T    R E Q U E S T S

app.get("/", (req, res) => {
    res.send("Welcome to the backend server for SR Luxuries");
});

app.get("/products", async (req, res) => {
    const fetchProductsQuery = `
        SELECT * FROM product;
    `;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(fetchProductsQuery, (err, result) => {
                if (err) {
                    console.error("Error executing fetchProductsQuery:", err);
                    reject({ error: "Internal Server Error" });
                } else {
                    resolve(result);
                }
            });
        });

        const Products = result;
        console.log("Products:", Products);

        res.json(result);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json(error);
    }
});

app.get("/products/beads", async (req, res) => {
    const fetchBeadsQuery = `
        SELECT * FROM product
        WHERE ProductCategoryId = (SELECT ProductCategoryId FROM productcategory WHERE Name = "Beads");
    `;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(fetchBeadsQuery, (err, result) => {
                if (err) {
                    console.error("Error executing fetchBeadsQuery:", err);
                    reject({ error: "Internal Server Error" });
                } else {
                    resolve(result);
                }
            });
        });

        const beadsProducts = result;
        console.log("Beads:", beadsProducts);

        res.json(result);
    } catch (error) {
        console.error("Error fetching beads products:", error);
        res.status(500).json(error);
    }
});

app.get("/products/belts", async (req, res) => {
    const fetchBeltsQuery = `
        SELECT * FROM product
        WHERE ProductCategoryId = (SELECT ProductCategoryId FROM productcategory WHERE Name = "Belts");
    `;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(fetchBeltsQuery, (err, result) => {
                if (err) {
                    console.error("Error executing fetchBeltsQuery:", err);
                    reject({ error: "Internal Server Error", details: err.message });
                } else {
                    resolve(result);
                }
            });
        });

        const beltsProducts = result;
        console.log("Belts products:", beltsProducts);

        res.json(result);
    } catch (error) {
        console.error("Error fetching belts products:", error);
        res.status(500).json(error);
    }
});

app.get("/products/caps", async (req, res) => {
    const fetchcapsQuery = `
        SELECT * FROM product
        WHERE ProductCategoryId = (SELECT ProductCategoryId FROM productcategory WHERE Name = "caps");
    `;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(fetchcapsQuery, (err, result) => {
                if (err) {
                    console.error("Error executing fetchcapsQuery:", err);
                    reject({ error: "Internal Server Error", details: err.message });
                } else {
                    resolve(result);
                }
            });
        });

        const capsProducts = result;
        console.log("caps products:", capsProducts);

        res.json(result);
    } catch (error) {
        console.error("Error fetching caps products:", error);
        res.status(500).json(error);
    }
});

app.get("/products/corporate", async (req, res) => {
    const fetchCorporateQuery = `
        SELECT * FROM product
        WHERE ProductCategoryId = (SELECT ProductCategoryId FROM productcategory WHERE Name = "Corporate Wears");
    `;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(fetchCorporateQuery, (err, result) => {
                if (err) {
                    console.error("Error executing fetchCorporateQuery:", err);
                    reject({ error: "Internal Server Error", details: err.message });
                } else {
                    resolve(result);
                }
            });
        });

        const corporateProducts = result;
        console.log("Corporate products:", corporateProducts);

        res.json(result);
    } catch (error) {
        console.error("Error fetching corporate products:", error);
        res.status(500).json(error);
    }
});

app.get("/products/footwears", async (req, res) => {
    const fetchFootQuery = `
        SELECT * FROM product
        WHERE ProductCategoryId = (SELECT ProductCategoryId FROM productcategory WHERE Name = "Footwears");
    `;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(fetchFootQuery, (err, result) => {
                if (err) {
                    console.error("Error executing fetchFootQuery:", err);
                    reject({ error: "Internal Server Error", details: err.message });
                } else {
                    resolve(result);
                }
            });
        });

        const footProducts = result;
        console.log("Footwear products:", footProducts);

        res.json(result);
    } catch (error) {
        console.error("Error fetching footwear products:", error);
        res.status(500).json(error);
    }
});

app.get("/products/two-piece", async (req, res) => {
    const fetchTwoPieceQuery = `
        SELECT * FROM product
        WHERE ProductCategoryId = (SELECT ProductCategoryId FROM productcategory WHERE Name = "2-Catchy-Piece");
    `;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(fetchTwoPieceQuery, (err, result) => {
                if (err) {
                    console.error("Error executing fetchTwoPieceQuery:", err);
                    reject({ error: "Internal Server Error", details: err.message });
                } else {
                    resolve(result);
                }
            });
        });

        const twopieceProducts = result;
        console.log("Corporate products:", twopieceProducts);

        res.json(result);
    } catch (error) {
        console.error("Error fetching two-piece products:", error);
        res.status(500).json(error);
    }
});

app.get("/products/shirts", async (req, res) => {
    const fetchShirtsQuery = `
        SELECT * FROM product
        WHERE ProductCategoryId = (SELECT ProductCategoryId FROM productcategory WHERE Name = "SRL Shirts");
    `;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(fetchShirtsQuery, (err, result) => {
                if (err) {
                    console.error("Error executing fetchShirtsQuery:", err);
                    reject({ error: "Internal Server Error", details: err.message });
                } else {
                    resolve(result);
                }
            });
        });

        const shirtsProducts = result;
        console.log("Shirts:", shirtsProducts);

        res.json(result);
    } catch (error) {
        console.error("Error fetching SRL Shirts:", error);
        res.status(500).json(error);
    }
});

app.get("/products/tees", async (req, res) => {
    const fetchTeesQuery = `
        SELECT * FROM product
        WHERE ProductCategoryId = (SELECT ProductCategoryId FROM productcategory WHERE Name = "SRL Tees");
    `;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(fetchTeesQuery, (err, result) => {
                if (err) {
                    console.error("Error executing fetchTeesQuery:", err);
                    reject({ error: "Internal Server Error", details: err.message });
                } else {
                    resolve(result);
                }
            });
        });

        const teesProducts = result;
        console.log("Tees:", teesProducts);

        res.json(result);
    } catch (error) {
        console.error("Error fetching SRL Tees:", error);
        res.status(500).json(error);
    }
});

app.get("/products/trad", async (req, res) => {
    const fetchTradQuery = `
        SELECT * FROM product
        WHERE ProductCategoryId = (SELECT ProductCategoryId FROM productcategory WHERE Name = "Trad");
    `;

    try {
        const result = await new Promise((resolve, reject) => {
            db.query(fetchTradQuery, (err, result) => {
                if (err) {
                    console.error("Error executing fetchTradQuery:", err);
                    reject({ error: "Internal Server Error", details: err.message });
                } else {
                    resolve(result);
                }
            });
        });

        const tradProducts = result;
        console.log("Trad products:", tradProducts);

        res.json(result);
    } catch (error) {
        console.error("Error fetching trad products:", error);
        res.status(500).json(error);
    }
});






nextApp.prepare().then(() => {
    app.get('*', (req, res) => {
      return handle(req, res);
    });
  
    app.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://thesrluxuries.com:${port}`);
    });
  });


module.exports = app;



