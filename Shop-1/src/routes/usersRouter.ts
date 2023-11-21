import express from "express";
import {
  postUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/users";

const routes = express.Router();

routes.post("/", postUser);
routes.get("/", getUserss);
routes.get("/:id", getUser);
routes.put("/:id", updateUser);
routes.delete("/:id", deleteUser);
export default routes;
