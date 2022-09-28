import { FriendModel } from "../models/friendModel";

export class accept {
    user: string;
    friendId: string;
    isFriend: boolean;
    body: any;
    errors: Array<string>
    requestId: any;
    dbrequest: any;
    constructor(req:any){
        this.requestId = " "
        this.user = req.userId
        this.friendId = req.body.friendId
        this.isFriend = true
        this.dbrequest = " "
        this.body = " "
        this.errors = []
    }

    async updatefriend(){
        await this.getrequestId()
        if(this.errors.length > 0)return
        this.body = await FriendModel.findByIdAndUpdate(this.requestId, {isFriend: this.isFriend})
        
        if(!this.body){
            this.errors.push("usuario não encontrado")
        }
    }

    async getrequestId(){
       this.dbrequest = await FriendModel.findOne({user: this.user, friendId: this.friendId, isFriend: false})
       if(!this.dbrequest){
        this.errors.push("pedido de amizade nao encontrado")
       }
       this.requestId = this.dbrequest._id
    }

}