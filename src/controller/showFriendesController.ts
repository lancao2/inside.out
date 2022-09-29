import { Request, Response, NextFunction } from "express";
import { FriendModel } from "../models/friendModel";


export const showFriends = async (req: Request, res: Response) => {
    try {
      const friendes = await FriendModel.find({ user: req.userId, isFriend: true});
        res.status(201).json({ friendes });

  } catch (error) {
    res.status(400).json({ message: "algo deu errado" });
  }
}
