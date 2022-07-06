const express = require("express");
const { signin, signup } = require("../controller/auth");

const {
  isRequestValidated,
  validateSignupRequest,
  validateSigninRequest,
} = require("../Validators/auth");
const router = express.Router();

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSigninRequest, isRequestValidated, signin);

// router.post("/profile",requireSignin,(req,res)=>{
//   res.status(200).json({user:"Profile"})
// })

module.exports = router;
