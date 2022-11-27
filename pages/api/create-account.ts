import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email } = req.body;
  const user = await db.user.findUnique({
    where: {
      email
    }
  });
  if (user) return res.status(200).end();
  await db.user.create({
    data: {
      name,
      email
    }
  });
  return res.status(201).end();
}
