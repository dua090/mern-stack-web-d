require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const landlordRoutes = require("./routes/landlordRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "🚀 Node.js Server with MongoDB is Running!" });
});

app.use("/landlords", landlordRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});