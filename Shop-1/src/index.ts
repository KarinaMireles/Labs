import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import products from "./routes/productsRouter";
import users from "./routes/usersRouter";
import cartItemRoutes from "./routes/cartItemsRouter";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", products);
app.use("/users", users);
app.use("/users", cartItemRoutes);

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "";
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
