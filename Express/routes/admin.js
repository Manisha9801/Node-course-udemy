const path = require('path')

const express = require("express");

const rootDir = require('./../utility/path')

const router = express.Router();

router.get("/add-product", (req, res, next) => {
res.sendFile(path.join(rootDir,'views','add-product.html'))
});

router.post("/add-product", (req, res, next) => { //if method type is different we cn have same path
  console.log('req body',req.body);
  res.redirect("/");
});

module.exports = router;
