import { Request, Response } from "express";
import { errorResponse, toJson } from "node_custom_utils";
import { User } from "../../models/user";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, phone } = req.body;

    if (!phone) {
      return res.send(400).json({ message: "phone number is required" });
    }

    let newUser = new User({
      name,
      phone,
    });
    await newUser.save();
    return res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    return errorResponse(res, error);
  }
};
