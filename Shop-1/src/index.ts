import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", products);
app.use("/users", users);
const port = 3000;
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
