import { withApiSession } from "@/lib/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.session;
  if (!user?.id) return res.status(401).end();
  const profile = await db.user.findUnique({
    where: { id: user.id }
  });
  if (profile) {
    return res.send(profile);
  }
}

export default withApiSession(handler);
