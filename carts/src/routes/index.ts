import express from "express";
const routes = express.Router();
const cartItems = (
  id: number,
  product: string,
  price: number,
  quantity: number
) => ({
  id,
  product,
  price,
  quantity,
});
const albums = [
  cartItems(1, "Love Angel Music Baby", 12.99, 5),
  cartItems(2, "Paradise", 9.99, 3),
  cartItems(3, "Tako Tsubo", 8.99, 7),
];
routes.get("/", (req, res) => {
  res.json("hello world");
});
routes.get("/cart-items", (req, res) => {
  res.status(200).json(albums);
});
routes.get("/cart-items/:id", (req, res) => {
  const itemId = +req.params.id;
  const item = albums.find((item) => item.id === itemId);
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).send("ID Not Found");
  }
});
routes.post("/cart-items", (req, res) => {
  albums.push(
    cartItems(req.body.id, req.body.product, req.body.price, req.body.quantity)
  );
  res.status(201).json(albums);
});
routes.put("/cart-items/:id", (req, res) => {
  const edit = +req.params.id;
  const updateIndex = albums.findIndex((item) => item.id === edit);
  albums[updateIndex] = {
    id: edit,
    product: req.body.product,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  res.status(200).json(albums[updateIndex]);
});
routes.delete("/cart-items/:id", (req, res) => {
  const delId = +req.params.id;
  const deleteIndex = albums.findIndex((item) => item.id === delId);
  const deletedItem = albums.splice(deleteIndex, 1);
  if (deletedItem.length === 1) {
    res.sendStatus(204);
  } else {
    res.status(404).send("ID Not Found");
  }
});
export default routes;
