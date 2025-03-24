import { Request, Response } from "express";
import { errorResponse, toJson } from "node_custom_utils";
import { User } from "../../models/user";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.send(400).json({ message: "id is required" });
    }
    const user = await User.findByIdAndDelete(id);
    return res.send(201).json({ message: "user deleted" });
  } catch (error) {
    return errorResponse(res, error);
  }
};
