const Order = require("../models/Order");

const placeOrder = async (req, res) => {
  try {
    const { name, email, phone, address, order, total } = req.body;

    const newOrder = new Order({
      name,
      email,
      phone,
      address,
      order,
      total,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (error) {
    console.error("Order Save Error:", error);
    res.status(500).json({ message: "Failed to save order" });
  }
};
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders); // 👈 Must respond
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

module.exports = { placeOrder, getOrders };
