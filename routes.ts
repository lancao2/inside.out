import { Router, Request, Response} from "express";
import authMiddleware from "./src/middleware/authMiddleware";
import { login } from "./src/controller/loginController";
import { register } from "./src/controller/registerController"

const route = Router()

route.get('/api', authMiddleware, (req: Request , res: Response) =>{
    res.json({userId: req.userId})
} )

route.post("/api/register", register)
route.post("/api/login", login)
export default route