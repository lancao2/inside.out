import { UserLogin } from "../modules/LoginModules";
import { Request, Response } from "express";

export const  login = async (req: Request, res: Response) => {
    try {
        const user  = new UserLogin(req.body)
        await user.authorization()
        if(user.errors.length > 0){
            res.status(406).json({errors: user.errors })
        }
        res.status(201).json({
            _id: user.dbUser._id,
            name: user.dbUser.name,
            email: user.dbUser.email,
            accessToken: user.token
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "algo deu errado ao entrar na sua conta"})
    }
}