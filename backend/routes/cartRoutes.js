const express = require("express");
const { getCart, addToCart, removeFromCart } = require("../controllers/cartController");
const router = express.Router();

router.get("/:userId", getCart);
router.post("/add", addToCart);
router.delete("/remove", removeFromCart);

module.exports = router;
