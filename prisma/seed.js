const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const data = require("../public/Data/quests.json");

async function runSeeders() {
  //  await Promise.all(
  //    data.map(async (quests) =>
  //      db.tarkovQuests.createMany({
  //        data: {
  //            questId: quests.id,
  //            requiredLevel: quests.require.level,
  //           //  requiredQuests: {
  //           //   set: quests.require.quests.map((quest) => quest)
  //           //  },
  //            reputationTrader: quests.reputation.trader,
  //            reputation: quests.reputation.rep,
  //            title: quests.title,
  //            locales: "en",
  //            wikiLink: quests.wiki,
  //            experience: quests.exp,
  //            giver: quests.giver,
  //            gameId: quests.gameId,
  //        }
  //      })
  //    )
  //  )
  //console.log(data?.map((test) => test))
  // Posts
  // state maybe?

  // const objectives = data.map((obj) => obj.objectives)

  // await Promise.all(
  //     objectives.map((obj) => 
  //       db.tarkovQuests.update({
  //         where: {
  //           questId: 
  //         }
  //         data: {
  //           type: obj.type,
  //           target: obj.target,
  //           number: obj.number,
  //           location: obj.location,
  //           id: obj.id,
  //         },
  //       })
  //     )
  // );
}

runSeeders()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Successfully seeded database. Closing connection.");
    await db.$disconnect();
  });
