"use strict";

/* -------------------------------------------------------
    EXPRESS - STORE API - Product-Category  Model
------------------------------------------------------- */
const { mongoose } = require("../dbConnection");
const CategorySchema = new mongoose.Schema(
  {
    // idyi kendisi veriyor
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },

  {
    collection: "category",
    timestamps: true,
    //createdAt, updatedAt eklendi.
  }
);

const ProductsSchema = new mongoose.Schema(
  {
    // idyi kendisi veriyor
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      //   required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: null,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    brand: {
      type: String,
      trim: true,
      required: true,
    },
    thumbnail: {
      type: String,
      trim: true,
    },
    images: {
      type: [String],
    },
  },
  {
    collection: "products",
    timestamps: true,
    //createdAt, updatedAt otomatik olarak.
  }
);

module.exports = {
  Category: mongoose.model("Category", CategorySchema),
  Product: mongoose.model("Product", ProductsSchema),
};
