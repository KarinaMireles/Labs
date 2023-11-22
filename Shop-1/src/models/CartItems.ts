import mongoose, { Schema, Types } from "mongoose";

const CartItemSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      required: true,
    },
    productId: {
      type: Types.ObjectId,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const CartItem = mongoose.model("CartItem", CartItemSchema);
export default CartItem;
