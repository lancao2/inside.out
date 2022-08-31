const mongoose = require("mongoose");
const  UserRegister = require("../models/RegisterModel");
const bcrypt = require('bcryptjs')



const loginModel = mongoose.model("User", UserRegister.UserSchema)


  class login extends UserRegister.register {
       constructor(body){
        super(body)
       }
   
    async toLogin(){
        this.validate()
        if(this.errors.length > 0 ) return
        this.user = await loginModel.findOne({mail: this.body.mail})

        if(!this.user) {
            this.errors.push('username or password is invalid')
            return
        }

        if(!bcrypt.compareSync(this.body.password, this.user.password)){
            this.errors.push('username or password is invalid')
            return
        }
    }

  }

 module.exports = login 