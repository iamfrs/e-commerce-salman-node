import express from "express";

import { Request, Response } from "express";
import fileUpload from "express-fileupload";

import mongoose from "mongoose";
import UserRouter from "./app/routes/user_router";
import productRouter from "./app/routes/product_router";
import PurchaseRouter from "./app/routes/purchase_router";

const app = express();

app.use(fileUpload());
app.use(express.json());

mongoose
  .connect(`mongodb://localhost/27017/e-commerce`)
  .then(() => console.log("mongoose connected"))
  .catch((error) => console.error("error on db"));

app.get("/", (req: Request, res: Response) => {
  res.send("hello!!");
});

app.use("/user", UserRouter);
app.use("/product", productRouter);
app.use("/purchase", PurchaseRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
