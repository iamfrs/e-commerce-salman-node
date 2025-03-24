import { Request, Response } from "express";
import { errorResponse, toJson } from "node_custom_utils";
import { Purchase } from "../../models/purchase";
import { Types } from "mongoose";

export const deleteData = async (req: Request, res: Response) => {
  try {
    const { user_id,product_id } = req.params;

    if (!user_id) {
        return res.send(400).json({ message: "user_id is required" });
      }

      if (!product_id) {
        return res.send(400).json({ message: "product_id is required" });
      }

      let deletePurchase = await Purchase.deleteOne({ 
        user:new Types.ObjectId(user_id as string),
        product:new Types.ObjectId(product_id as string),
          });
    return res.status(201).json({message:"history deleted"})
  } catch (error) {
    return errorResponse(res, error);
  }
};