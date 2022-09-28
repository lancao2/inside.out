import { Request, Response } from "express";
import { accept } from "../modules/acceptFriend";

export const acceptFriend = async (req: Request, res: Response) => {
    try {
      const acceptFriend = new accept(req)
      await acceptFriend.updatefriend()
      if(acceptFriend.errors.length > 0){
        res.status(400).json({errors: acceptFriend.errors})
      }
      res.status(201).json({message: "amizade aceita"})
  } catch (error) {
    res.status(400).json({ message: "algo deu errado" });
  }
};