import process from "process";
import * as dotenv from "dotenv"

dotenv.config()

export const auth = {
    mongoConnect: String(process.env.MONGODB_CONNECT),
    secret: String(process.env.SECRET),
    expires: '1h',
  };

