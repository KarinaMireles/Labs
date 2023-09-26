import express from "express";

import cors from "cors";

import continentRoutes from "..src/routes/routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", continentRoutes);

const port = 3000;

app.listen(port, () => console.log(`Listening on port: ${port}.`));

import Greeter from "../src/routes/greeter";
import JavaScriptGreeter from "../src/routes/JavaScriptGreeter";
import LoudGreeter from "../src/routes/LoudGreeter";
import HtmlGreeter from "../src/routes/HtmlGreeter";

const greeter = new Greeter("Hello");
const jsGreeter = new JavaScriptGreeter("Hi");
const loudGreeter = new LoudGreeter("Hey");
const htmlGreeter = new HtmlGreeter("Hola", "h2");

console.log(greeter.greet("Alice"));
console.log(jsGreeter.greet("Bob"));
console.log(loudGreeter.greet("Charlie"));
console.log(htmlGreeter.greet("David"));
