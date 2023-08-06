export const typeDefs = /* GraphQL */ `
  type A {
    A: String!
    B: String!
  }

  type Query {
    Hello(word: String!): A!
  }
`;
