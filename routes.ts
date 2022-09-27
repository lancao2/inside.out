import { Router, Request, Response} from "express";
import { register } from "./src/controller/registerController";

const route = Router()

route.get('/api', (req: Request , res: Response) =>{
    res.json({message: 'Aprendendo type script'})
} )

route.post("/api/register", register)
export default route