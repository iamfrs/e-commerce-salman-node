import { Request, Response } from "express";
import { errorResponse, toJson } from "node_custom_utils";
import { User } from "../../models/user";

export const UpdateUser = async (req: Request, res: Response) => {
  try {
    const { id, name, phone } = req.body;

    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }

    let user = await User.findById(id);
    if (!user) {
      return res.send(400).json({ message: "invalid id" });
    }

    let updateData: any = {};

    if (name) {
      updateData.name = name;
    }
    if (phone) {
      updateData.phone = phone;
    }

    let data = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res.status(201).json({ message: "updated " });
  } catch (error) {
    return errorResponse(res, error);
  }
};
