import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    photoURL: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
// models/Product.ts

export interface Product {
  _id?: string;
  name: string;
  price: number;
  photoURL?: string;
}
