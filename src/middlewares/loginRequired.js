const jwt = require("jsonwebtoken");
require("dotenv/config");

exports.loginRequired = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send("error: do you not have authorization");
  }

  const parts = authorization.split(" ");

  if (!parts.length === 2){
    return res.status(401).send('error: token error')
  }

  const [text, token] = parts

  if(!/^Bearer$/i.test(text)){
    return res.status(401).send("error: Token not formated")
  }

  
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded)=>{
        if(err){
            return res.status(401).send("error: Invalid token")
        }

        const {_id} = decoded;
        req._id = _id
        return next();
    });
    
};
