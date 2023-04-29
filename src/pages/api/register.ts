// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { IPrismaUser } from "@/interface/user";

const prisma = new PrismaClient();

export async function register(
  req: NextApiRequest,
  res: NextApiResponse<IPrismaUser | { message: String }>
) {
  if (req.method === "POST") {
    const { username, name, surname, email, password }: IPrismaUser = req.body;

    try {
      const user = prisma.user.create({
        data: { username, name, surname, email, password },
      });
    } catch (error) {}
  }
}
