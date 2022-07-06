const express = require("express");

const Staples = require("../models/Staples");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const staples = await Staples.find().lean().exec();
    return res.status(200).send(staples);
  } catch (error) {
    return res.status(501).send({ message: error.message });
  }
});

module.exports = router;
