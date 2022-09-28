import { UserRegister } from "../modules/registerModules";
import { Request, Response, NextFunction } from "express";

export const  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user  = new UserRegister(req.body)
        await user.register()
        if(user.errors.length > 0){
            res.status(406).json({errors: user.errors })
        }
        user.giveToken()
        res.status(201).json({
            _id: user.dbUser._id,
            name: user.dbUser.name,
            email: user.dbUser.email,
            accessToken: user.token
        })
        next
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "algo deu errado em criar um usuario"})
    }
}