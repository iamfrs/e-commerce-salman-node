import { Request, Response } from "express";
import { PipelineStage, Types } from "mongoose";
import { errorResponse, toJson } from "node_custom_utils";
import { User } from "../../models/user";
import { Product } from "../../models/product";
import { Purchase } from "../../models/purchase";

export const purchaseList = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.params;

    if (!user_id) {
      return res.send(400).json({ message: "Authorization failed" });
    }

    let condition: any = {
      user_id: new Types.ObjectId(user_id as string),
    };
    const purchasePipeline: PipelineStage[] = [
      {
        $match: condition,
      },
      {
        $lookup: {
          from: User.collection.name,
          localField: "id",
          foreignField: "user",
          pipeline: [],
          as: "userData",
        },
      },

      {
        $lookup: {
          from: Product.collection.name,
          localField: "id",
          foreignField: "product",
          pipeline: [],
          as: "productData",
        },
      },
      //  { $sort: { _id: -1 } },
      //  { $skip: pagination.skip },
      //  { $limit: pagination.limit },
    ];
    const purchaseList = await Purchase.aggregate(purchasePipeline);

    return res.status(201).json({ data: purchaseList });
  } catch (error) {
    return errorResponse(res, error);
  }
};
