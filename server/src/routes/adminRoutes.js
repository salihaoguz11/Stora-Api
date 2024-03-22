"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */

const router = require("express").Router();

const { Product, Category } = require("../controllers/adminController");

//? long way
// const auth = require("../middlewares/auth");

//? short way
const { isAdmin } = require("../middlewares/auth");

//? long way
router.route("/products").post(isAdmin, Product.create);

router
  .route("/products/:id")
  .put(isAdmin, Product.update)
  .delete(isAdmin, Product.delete);

router.route("/categories").post(isAdmin, Category.create);

router
  .route("/categories/:id")
  .put(isAdmin, Category.update)
  //   .delete(auth.isAdmin, Category.delete);
  .delete(isAdmin, Category.delete);

module.exports = router;
