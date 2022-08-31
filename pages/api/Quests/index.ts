import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../db";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const {
    modelId,
    questId,
    gameId,
    requireLevel,
    requireRep,
    traderRep,
    title,
    wikiLink,
    giver,
    experience,
  } = req.body;

  if (session) {
    const result = await prisma.tarkovQuests.update({
      where: {
        modelId: modelId,
      },
      data: {
        modelId: modelId,
        questId: questId,
        gameId: gameId,
        requiredLevel: requireLevel,
        reputation: requireRep,
        reputationTrader: traderRep,
        title: title,
        wikiLink: wikiLink,
        giver: giver,
        experience: experience,
      },
    });
    res.json(result);
  } else {
    res.status(401);
  }
  res.end();
}
