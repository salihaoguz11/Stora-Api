"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require("express").Router();
const { Category } = require("../controllers/productController");
const { Product } = require("../controllers/productController");

//? Category  Controller
router.route("/categories").get(Category.list);
router.route("/categories/:id").get(Category.read);

//?Product Controller
router.route("/products").get(Product.list);
router.route("/products/:id").get(Product.read);

module.exports = router;
