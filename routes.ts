import { Router, Request, Response} from "express";
import authMiddleware from "./src/middleware/authMiddleware";
import { login } from "./src/controller/loginController";
import { register } from "./src/controller/registerController"
import { newEmotion } from "./src/controller/emotionController";

const route = Router()


route.post("/api/register", register)
route.post("/api/login", login)
route.post("/api/uploadEmotion", authMiddleware, newEmotion)
export default route