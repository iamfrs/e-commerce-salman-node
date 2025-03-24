import { Request, Response } from "express";
import { cToBooleanSafe, errorResponse, toJson } from "node_custom_utils";
import { Product } from "../../models/product";

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id, product_name, stock, price, active } = req.body;

    if (!id) {
      return res.status(400).json({ message: "id is needed" });
    }

    let product = await Product.findById(id);

    if (!product) {
      return res.status(400).json({ message: "product not found" });
    }

    let updatedData: any = {};

    if (product_name) {
      updatedData.product_name = product_name;
    }

    if (product_name) {
      updatedData.product_name = product_name;
    }

    if (stock) {
      updatedData.stock = stock;
    }

    if (price) {
      updatedData.price = price;
    }

    if (active) {
      updatedData.active = cToBooleanSafe(active);
    }

    let updated = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    return res.status(201).json({ message: " product updated" });
  } catch (error) {
    return errorResponse(res, error);
  }
};
