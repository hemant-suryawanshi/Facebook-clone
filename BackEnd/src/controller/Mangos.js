const express = require("express");

const Mangos = require("../models/Mangos");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const mangos = await Mangos.find().lean().exec();
    return res.status(200).send(mangos);
  } catch (error) {
    return res.status(501).send({ message: error.message });
  }
});

module.exports = router;
