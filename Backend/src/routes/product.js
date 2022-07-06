const express = require("express");
const { createProduct } = require("../controller/product");
const multer = require("multer");
const router = express.Router();
const { requireSignin, adminMiddelware } = require("../middelware");

const shortid=require('shortid')
const path=require('path')
// const { addCategory, getCategory } = require("../controller/Category");

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function(req,file,cb){
        cb(null, shortid.generate() + "-" + file.originalname)
    }
})

const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddelware,
  upload.array('productPicture'),
  createProduct
);
// router.get("/category/getcategory", getCategory);

module.exports = router;
