const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "product description is required"],
  },
  price: {
    type: Number,
    required: [true, "product price is required"],
    maxlength: [8, "price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "product category is required"],
  },
  stock: {
    type: Number,
    required: [true, "product stock is required"],
    maxlength: [4, "stock cannot exceed 4 characters"],
  },
  // reviews: [
  //   {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     rating: {
  //       type: Number,
  //       required: true,
  //     },
  //     comment: {
  //       type: String,
  //     },
  //   },
  // ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
