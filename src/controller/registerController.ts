import { UserRegister } from "../modules/registerModules";
import { Request, Response } from "express";

export const  register = async (req: Request, res: Response) => {
    try {
        const user  = new UserRegister(req.body)
        await user.register()
        if(user.errors.length > 0){
            res.status(406).json({errors: user.errors })
        }
        res.status(201).json({
            body: user,
            message: "Usuario cadastrado com sucesso"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "algo deu errado em criar um usuario"})
    }
}