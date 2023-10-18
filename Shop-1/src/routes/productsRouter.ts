import { express } from "express";
import {
  postProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductParams,
} from "../controllers/products";
import routes from "./usersRouter";

const routes = routes();
routes.post("/", postProduct);
routes.get("/", getProductsParams);
routes.get("/", getProducts);
routes.get("/:id", getProduct);
routes.put("/:id", updateProduct);
routes.delete("/:id", deleteProduct);

export default routes;
