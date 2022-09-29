import { Request, Response, NextFunction } from "express";
import { FriendModel } from "../models/friendModel";

export const showFriendsRequest = async (req: Request, res: Response) => {
    try {
      const friendesRequest = await FriendModel.find({ user: req.userId, isFriend: false});
    res.status(201).json({ friendesRequest: friendesRequest });
  } catch (error) {
    res.status(400).json({ message: "algo deu errado" });
  }
};
