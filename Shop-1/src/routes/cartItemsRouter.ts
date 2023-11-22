import express from "express";
import {
  addCartItem,
  deleteCartItem,
  getUserCartItems,
  updateCart,
} from "../controllers/cartItems";

const cartItemRoutes = express.Router();

cartItemRoutes.get("/:userId/cart", getUserCartItems);
cartItemRoutes.post("/:userId/cart", addCartItem);
cartItemRoutes.put("/:userId/cart/:productId", updateCart);
cartItemRoutes.delete("/:userId/cart/:productId", deleteCartItem);

export default cartItemRoutes;
