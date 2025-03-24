import { Request, Response } from "express";
import { errorResponse, toJson } from "node_custom_utils";
import { Product } from "../../models/product";

export const productList = async (req: Request, res: Response) => {
  try {
    let products = await Product.find();
    return res.status(201).json({ data: products });
  } catch (error) {
    return errorResponse(res, error);
  }
};
