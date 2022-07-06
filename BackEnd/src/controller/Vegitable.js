const express = require("express");

const Vegitable = require("../models/Vegitable");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const vegitable = await Vegitable.find().lean().exec();
    return res.status(200).send(vegitable);
  } catch (error) {
    return res.status(501).send({ message: error.message });
  }
});

module.exports = router;
