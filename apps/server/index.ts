import { Elysia } from "elysia";
import { yoga } from "@elysiajs/graphql-yoga";
import { typeDefs } from "@graph-ql-test/shared";

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
      },
    })
  )
  .listen(8080);
