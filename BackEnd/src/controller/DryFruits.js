const express = require("express");

const DryFruits = require("../models/DryFruits");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const dryfrute = await DryFruits.find().lean().exec();
    return res.status(200).send(dryfrute);
  } catch (error) {
    return res.status(501).send({ message: error.message });
  }
});

module.exports = router;
