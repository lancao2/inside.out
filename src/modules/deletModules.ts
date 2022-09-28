import { FriendModel } from "../models/friendModel";

export class Delete {
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

    async deletefriend(){
        await this.getrequestId()
        if(this.errors.length > 0)return
        this.body = await FriendModel.findByIdAndDelete(this.requestId)
        
        if(!this.body){
            this.errors.push("usuario não encontrado")
        }
    }

    async getrequestId(){
       this.dbrequest = await FriendModel.findOne({user: this.user, friendId: this.friendId})
       if(!this.dbrequest){
        this.errors.push("pedido de amizade nao encontrado")
       }
       this.requestId = this.dbrequest._id
    }

}