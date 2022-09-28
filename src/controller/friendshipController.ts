import { Request, Response } from "express";
import { Friend } from "../modules/friendshipModules";

export const friendship = async (req: Request, res: Response) => {
    try {
      const friend = new Friend(req);
      await friend.makeFriendship();
    if (friend.errors.length > 0) {
      res.status(406).json({ errors: friend.errors });
    }
    res.status(201).json({
      message: `relação entre ${friend.dbUser.name} e ${friend.dbFriend.name}`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "algo deu errado em add um amigo" });
  }
};
