"use strict";
/* -------------------------------------------------------
    EXPRESS - Store API
------------------------------------------------------- */
const { Product, Category } = require("../models/productModel");

//! Category Controller
module.exports.Category = {
  list: async (req, res) => {
    const data = await res.getModelList(Category);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Category),
      data,
    });
  },

  read: async (req, res) => {
    const data = await Category.findOne({ _id: req.params.id });
    res.status(202).send({
      error: false,
      data,
    });
  },
};

//! Product Controller
module.exports.Product = {
  list: async (req, res) => {
    const data = await res.getModelList(Product);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Product),
      data,
    });
  },

  read: async (req, res) => {
    const data = await Product.findOne({ _id: req.params.id });
    res.status(202).send({
      error: false,
      data,
    });
  },
};
