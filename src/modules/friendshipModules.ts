import { FriendModel } from "../models/friendModel";
import { UserModel } from "../models/userModel";

export class Friend{
    user: string;
    friendId: string;
    isFriend: boolean;
    dbUser: any;
    dbFriend: any;
    errors: Array<string>
    constructor(req:any){
        this.user = req.userId
        this.friendId = req.body.friend
        this.isFriend = false
        this.dbUser =  null
        this.dbFriend = null
        this.errors = []
    }

    async makeFriendship(){
        this.dbUser = await UserModel.findOne({_id: this.user})
        
        await this.getFriend()
        await this.validate()


        if (this.errors.length > 0) return

        await FriendModel.create({
            user: this.user,
            friendId: this.friendId,
            isFriend: this.isFriend
        })
    }

    async validate(){ 
        const friendship = await FriendModel.findOne({user: this.user, friendId: this.friendId})

         if(this.dbUser === null){
            this.errors.push("Seu usuario não existe")
        }
        if(this.dbFriend === null){
            this.errors.push("Seu amigo nao existe")
        }
        if(friendship){
            this.errors.push("Já existe uma relação entre esses usuarios")
        }
    }
    async getFriend(){
        this.dbFriend = await UserModel.findOne({email: this.friendId})
        this.friendId = this.dbFriend._id
    }
}