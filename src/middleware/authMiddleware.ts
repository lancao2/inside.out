import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { auth } from "../config/index";

interface TokenPayload {
    id: string,
    iat: number,
    exp: number,
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401);
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, auth.secret);
    const { id } = data as TokenPayload; 

    req.userId = id
    return next()
  } catch {
    return res.status(401);
  }
};

export default authMiddleware;
