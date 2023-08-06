import { Elysia } from "elysia";
import { yoga } from "@elysiajs/graphql-yoga";
import { typeDefs } from "@graph-ql-test/shared";
import type {
  CreateMobius,
  Resolver,
} from "../../node_modules/graphql-mobius/src/index";

type Resolvers = Resolver<CreateMobius<typeof typeDefs>>;

const app = new Elysia()
  .use(
    yoga({
      typeDefs,
      resolvers: {
        Query: {
          Hello: async (_, { word }) => {
            const [word1, word2] = word.split(" ");

            return {
              A: word1,
              B: word2,
            };
          },
        },
      } satisfies Resolvers,
    })
  )
  .listen(8080);
