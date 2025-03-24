import { Request, Response } from "express";
import { errorResponse, toJson } from "node_custom_utils";
import { Purchase } from "../../models/purchase";

export const BuyProduct = async (req: Request, res: Response) => {
  try {
    const { user_id, product_id, quantity } = req.body;

    if (!user_id) {
      return res.send(400).json({ message: "user id is required" });
    }

    if (!product_id) {
      return res.send(400).json({ message: "product id is missing" });
    }

    if (!quantity) {
      return res.send(400).json({ message: "quantity is required" });
    }

    let newPurchase = await new Purchase({
      user: user_id,
      product: product_id,
      quantity,
    });

    await newPurchase.save();

    return res.status(201).json({ message: "purchased successfully" });
  } catch (error) {
    return errorResponse(res, error);
  }
};
