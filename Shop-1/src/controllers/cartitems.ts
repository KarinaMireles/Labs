import CartItem from "../models/CartItems";
import { CartItemNotFoundError } from "../utils/errors";
import { reqRes } from "../utils/interfaces";

export const addCartItem: reqRes = async (req, res) => {
  try {
    const userId = req.params.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const cartCheck = await CartItem.findOne({
      userId,
      productId,
    });

    if (cartCheck) {
      cartCheck.quantity = quantity;
      await cartCheck.save();

      res.status(201).send(cartCheck);
    } else {
      const cartItem = new CartItem({
        ...req.body,
        userId,
        productId,
        quantity,
      });
      await cartItem.save();

      res.status(201).send(cartItem);
    }
  } catch (err) {
    res.status(400).send("Bad Request");
  }
};

export const getUserCartItems: reqRes = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cartItems = await CartItem.find({ userId });

    res.status(200).send(cartItems);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

export const updateCart: reqRes = async (req, res) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;
    const quantity = +req.body.quantity;
    const cartProduct = await CartItem.findOne({
      userId,
      productId,
    });

    if (!cartProduct) throw new CartItemNotFoundError();
    if (cartProduct.quantity) cartProduct.quantity = quantity;

    cartProduct.save();
    res.status(200).send(cartProduct);
  } catch (err) {
    let status = { code: 500, message: "Server Error" };
    if (err instanceof CartItemNotFoundError) {
      status = { code: 404, message: err.message };
    }
    res.status(status.code).send(status.message);
  }
};

export const deleteCartItem: reqRes = async (req, res) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;
    const cartItemId = await CartItem.findOne({
      userId,
      productId,
    });

    if (!cartItemId) throw new CartItemNotFoundError();
    if (cartItemId) {
      await CartItem.findByIdAndDelete(cartItemId);
      res.status(204).send();
    }
  } catch (err) {
    let status = { code: 500, message: "Server Error" };
    if (err instanceof CartItemNotFoundError) {
      status = { code: 404, message: "Not Found" };
    }
    res.status(status.code).send(status.message);
  }
};
