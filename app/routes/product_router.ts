import express from "express";
import { createProduct } from "../controllers/product/create_product";
import { updateProduct } from "../controllers/product/updateProduct";
import { productList } from "../controllers/product/productList";
import { deleteProduct } from "../controllers/product/delete_product";

const productRouter = express.Router();

productRouter.post("/create", createProduct);
productRouter.post("/update", updateProduct);
productRouter.get("/view/list", productList);
productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
