const { gql } = require("apollo-server");

const typeDefs = gql`
  type slider {
    title: String!
    description: String
    image: String!
    buttonText: String
    to: String
  }
  type Query {
    sliders: [slider!]!
  }
`;

module.exports = typeDefs;
