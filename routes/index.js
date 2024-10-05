const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");

router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error });
});

router.get("/shop", isloggedin,async function (req, res) {
  let product=await productModel.find()
  res.render("shop",{product});
});

module.exports = router;
