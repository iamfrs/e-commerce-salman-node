import { Request, Response } from "express";
import { errorResponse, toJson } from "node_custom_utils";
import { Product } from "../../models/product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { product_name, stock, price, active } = req.body;

    if (!product_name) {
      return res.status(400).json({ message: "product_name is needed" });
    }

    let newProduct = await new Product({
      product_name,
      stock,
      price,
      active,
    });

    await newProduct.save();
    return res.status(201).json({ message: "new product created" });
  } catch (error) {
    return errorResponse(res, error);
  }
};
