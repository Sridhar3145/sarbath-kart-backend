const express = require("express");
const router = express.Router();
const {
  placeOrder,
  getOrders,
} = require("../../controllers/checkoutController");

router.route("/").post(placeOrder).get(getOrders);

module.exports = router;
