const express = require("express");
require('dotenv').config();


const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port} `)
});

// Database
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "srldb"
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
    CREATE TABLE IF NOT EXISTS User (
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
    CREATE TABLE IF NOT EXISTS ProductCategory (
        ProductCategoryId INT NOT NULL AUTO_INCREMENT,
        Name VARCHAR(255),
        Description Text,
        PRIMARY KEY (ProductCategoryId)
    );
`;

const createProductTable = `
    CREATE TABLE IF NOT EXISTS Product (
        ProductId INT NOT NULL AUTO_INCREMENT,
        ProductName VARCHAR(255),
        ProductCategoryId INT,
        Price FLOAT,
        ProductImage VARCHAR(255),
        PRIMARY KEY (ProductId),
        FOREIGN KEY (ProductCategoryId) REFERENCES ProductCategory(ProductCategoryId)
    );
`;

db.query(createUserTable, (err, result) => {
    if (err) {
        console.error("Error creating User table", err);
    } else {
        console.log("User table created successfully");
    }
});
    

db.query(createProductCategoryTable, (err, result) => {
    if (err) {
        console.error("Error creating ProductCategory table", err);
    } else {
        console.log("ProductCategory table created successfully");
    }
});

db.query(createProductTable, (err, result) => {
    if (err) {
        console.error("Error creating ProductCategory table", err);
    } else {
        console.log("Product table created successfully");
    }
});


app.post("/product-category", async (req, res) => {
    const insertCategoryQuery = `
        INSERT INTO ProductCategory (Name, Description)
        VALUES (?, ?);
    `;
    const categories = [
        ["Beads", "SRL Luxury Beads and Stones"],
        ["Belts", "SRL Custom Belt Designs"],
        ["Caps", "SRL Unique Cap Designs"],
        ["Corporate Wears", "SRL Corporate and Business Casual Wears"],
        ["Footwears", "SRL Custom Footwear Designs"],
        ["2-Catchy-Piece", "SRL 2-Piece wears for summer"],
        ["SRL Shirts", "SRL unique Shirts"],
        ["SRL Tees", "SRL Custom Tee-Shirt Designs"],
        ["Trad", "SRL Indigenous Traditional Attires"]
    ];

    for (const category of categories) {
        const query = mysql.format(insertCategoryQuery, category);
        console.log("Insert Statement:", query);
        try {
            await new Promise((resolve, reject) => {
                db.query(insertCategoryQuery, category, (err, result) => {
                    if (err) {
                        console.error("Error creating ProductCategory:", err);
                        reject(err);
                    } else {
                        console.log("ProductCategory created successfully");
                        resolve(result);
                    }
                });
            });
        } catch (error) {
            console.error("An error occured", error);
        }
    }
    res.send("Product categories inserted successfully");
});


app.post("/product", async (req, res) => {
    const insertProductQuery = `
        INSERT INTO Product (ProductName, ProductCategoryId, Price, ProductImage)
        VALUES (?, ?, ?, ?);
    `;
    const products = [
        ["SRL Beaded Bracelet", 1, 12000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bds-1.jpg"],
        ["SRL Gemstone Bracelet", 1, 15000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bds-4.jpg"],
        ["SRL Leather Belt", 2, 12000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/belts/bt-1.jpg"],
        ["Full Asooke Cap", 3, 7000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/caps/cp-1.jpg"],
        ["Patterned Cap with Embroidery", 3, 7000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/caps/cp-2.jpg"],
        ["Brown 3-Piece Suit", 4, 80000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-1.jpg"],
        ["Red 3-Piece Suit", 4, 120000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-2.jpg"],
        ["Men Leather Slipper Sandal", 5, 35000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/footwears/shoe-10.jpg"],
        ["Men Leather Half Shoe", 5, 40000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/footwears/shoe-9.jpg"],
        ["SRL 2-Catchy-Piece", 6, 25000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/summer/sm-1.jpg"],
        ["SRL Casual Brocade Shirt", 7, 15000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casualbrocade/cs-1.jpg"],
        ["SRL Casual Shirt", 7, 12000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/shirts/casual/cs-1.jpg"],
        ["SRL White Signature Tee-Shirt", 8, 20000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-2.jpg"],
        ["SRL Black Signature Tee-Shirt", 8, 20000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/tees/t-1.jpg"],
        ["White 2-piece Senator Suit", 9, 50000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-6.jpg"],
        ["White 2-piece Senator Suit with Pattern", 9, 50000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-4.jpg"],
        ["Blue 2-piece Senator Suit with Circular Pattern", 9, 50000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-5.jpg"],
        ["Blue 2-piece Senator Suit with symmetrical Pattern", 9, 50000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-1.jpg"],
        ["Burgundy 2-piece Senator Suit", 9, 50000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-2.jpg"],
        ["Champagne Gold 2-piece Senator Suit", 9, 50000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-3.jpg"],
        ["White Agbada with Symmetrical Embroidery", 9, 100000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/agbada/a-1.jpg"],
        ["Blue Long-Sleeve Embroidery Agbada", 9, 100000, "https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/agbada/a-2.jpg"]

    ];

    for (const product of products) {
        const query = mysql.format(insertProductQuery, product);
        console.log("Insert Statement:", query);
        try {
            await new Promise((resolve, reject) => {
                db.query(insertProductQuery, product, (err, result) => {
                    if (err) {
                        console.error("Error creating Product:", err);
                        reject(err);
                    } else {
                        console.log("Product created successfully");
                        resolve(result);
                    }
                });
            });
        } catch (error) {
            console.error("An error occured", error);
        }
    }
    res.send("Products inserted successfully");
});



