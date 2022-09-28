import { Router, Request, Response} from "express";
import authMiddleware from "./src/middleware/authMiddleware";
import { login } from "./src/controller/loginController";
import { register } from "./src/controller/registerController"
import { newEmotion } from "./src/controller/emotionController";
import { friendship } from "./src/controller/friendshipController";
import { showFriendsRequest } from "./src/controller/showFriendesRequestController";
import { acceptFriend } from "./src/controller/acceptFriendController";
import { deleteFriend } from "./src/controller/deletFriendController";

const route = Router()

// acesso a aplicação
route.post("/api/register", register)
route.post("/api/login", login)

//parte relacionada a emoções
route.post("/api/uploadEmotion", authMiddleware, newEmotion)

//parte relacionada a amizades
route.post("/api/friendship", authMiddleware, friendship)
route.get("/api/showFriendRequest", authMiddleware, showFriendsRequest)
route.patch("/api/accept", authMiddleware, acceptFriend)
route.delete("/api/delete", authMiddleware, deleteFriend)

export default route