import { Request, Response } from "express";
import { Delete } from "../modules/deletModules";

export const deleteFriend = async (req: Request, res: Response) => {
    try {
        const userDelete = new Delete(req)
        if(userDelete.errors.length > 0){
          res.status(400).json({error: userDelete.errors})
        }
        await userDelete.deletefriend()
      res.status(201).json({message: "amizade deletada"})
  } catch (error) {
    res.status(400).json({ message: "algo deu errado" });
  }
};