import { Router, Request, Response} from "express";
import authMiddleware from "./src/middleware/authMiddleware";
import { login } from "./src/controller/loginController";
import { register } from "./src/controller/registerController"
import { newEmotion } from "./src/controller/emotionController";
import { friendship } from "./src/controller/friendshipController";
import { showFriendsRequest } from "./src/controller/showFriendesRequestController";
import { acceptFriend } from "./src/controller/acceptFriendController";
import { deleteFriend } from "./src/controller/deletFriendController";
import { showFriends } from "./src/controller/showFriendesController";

const route = Router()

// acesso a aplicação
route.post("/api/register", register) //registrar um novo usuario
route.post("/api/login", login) //logar usuario

//parte relacionada a emoções
route.post("/api/uploadEmotion", authMiddleware, newEmotion) // subir uma emoção que esta sentindo no momento

//parte relacionada a amizades
route.post("/api/friendship", authMiddleware, friendship) // enviar um pedido de amizade para um amigo
route.get("/api/showFriendRequest", authMiddleware, showFriendsRequest) // mostrar todas os seus pedidos nao aceitos
route.patch("/api/accept", authMiddleware, acceptFriend) // aceitar um pedido de amizade
route.delete("/api/delete", authMiddleware, deleteFriend) // recusar um pedido de amizade, ou desfazer uma amizade.
route.get("/api/friends", authMiddleware, showFriends)

export default route