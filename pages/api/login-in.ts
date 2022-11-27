import { withApiSession } from "@/lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  const user = await db.user.findUnique({
    where: {
      email
    }
  });
  if (!user) return res.status(404).end();
  req.session.user = {
    id: user.id
  };
  await req.session.save();
  return res.status(200).end();
}

export default withApiSession(handler);
