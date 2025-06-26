const product = require("../models/Items");

const addProduct = async (req, res) => {
  try {
    const { title, description, price, image } = req.body;
    await product.create({ title, description, price, image });

    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = { addProduct, getProducts };
