const express = require("express");

const {addItemToCart } = require("../controller/Cart");
const { requireSignin, userMiddelware } = require("../middelware");
const router = express.Router();

router.post("/user/cart/addtocart", requireSignin, userMiddelware, addItemToCart);


module.exports = router;
