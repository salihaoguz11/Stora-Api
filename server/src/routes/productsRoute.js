"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require("express").Router();
const { Category } = require("../controllers/productController");
const { Product } = require("../controllers/productController");

//? Category  Controller
router.route("/categories").get(Category.list).post(Category.create);
router.route("/categories/:id").get(Category.read);

//?Product Controller
router.route("/products").get(Product.list).post(Product.create);
// sadece is Admin silebilir.
// router.route("/:id").get(products.read).delete(isAdmin,products.delete); user da ise cookiedeki id ve userid aynı olmalı. Bunun içinde ayrı bir middleware yazılmalı.
router.route("/products/:id").get(Product.read).delete(Product.delete);

module.exports = router;
