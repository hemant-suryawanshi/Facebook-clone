const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
// const { default: mongoose } = require("mongoose");

const adminRoutes = require("./routes/admin/auth");
const authRoutes = require("./routes/auth");
const categoryRoutes=require("./routes/Category")
const productRoutes=require("./routes/product")
const cartRoutes=require("./routes/Cart")

env.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.yswkt.mongodb.net/${process.env.MONGO_DB_DATABSASE}`
    // { useNewUrlParser: true, useUniFiedTopology: true,useCreateIndex:true }
  )
  .then(() => {
    console.log("Database Conected");
  });

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.listen(process.env.PORT, () => {
  console.log("conected to 4800");
});
