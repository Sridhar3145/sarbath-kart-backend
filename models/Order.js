const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    order: { type: String, required: true },
    total: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model("Order", orderSchema);
