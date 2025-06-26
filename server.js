// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const formRoutes = require("./routes/api/formRoutes");
const productRoutes = require("./routes/api/productRoutes");
const checkoutRoutes = require("./routes/api/checkoutRoutes");
const authRoutes = require("./routes/api/authRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/form", formRoutes);
app.use("/api/products", productRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", checkoutRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));
