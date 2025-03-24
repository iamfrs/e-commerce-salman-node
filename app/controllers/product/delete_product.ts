import { Request, Response } from "express";
import { errorResponse, toJson } from "node_custom_utils";
import { Product } from "../../models/product";

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.send(400).json({ message: "id is required" });
    }

    let deleteProduct = await Product.findByIdAndDelete(id);
    return res.send(201).json({ message: "product deleted" });
  } catch (error) {
    return errorResponse(res, error);
  }
};
