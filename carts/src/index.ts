import express from "express";
import cors from "cors";
import routes from "./routes";
const app = express();
app.use(cors());
//const routes = express();
// routes.get("/", (req, res) => {
//   res.json("hello world");
// });
app.use(express.json());
app.use("/", routes);
const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));
