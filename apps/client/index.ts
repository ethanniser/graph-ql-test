import { Mobius } from "../../node_modules/graphql-mobius/src/index";
import { typeDefs } from "@graph-ql-test/shared";

const mobius = new Mobius<typeof typeDefs>({
  url: "http://localhost:8080/graphql",
});

// Call query to execute query
const result = await mobius.query({
  Hello: {
    where: {
      word: "Hello World!",
    },
    select: {
      A: true,
    },
  },
});

console.log(result);
