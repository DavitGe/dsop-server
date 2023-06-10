const { gql } = require("apollo-server");

const typeDefs = gql`
  type slider {
    title: String!
    description: String
    image: String!
    buttonText: String
    to: String
  }
  type advertisement {
    type: String!
    text: String!
    buttonText: String!
    linkTo: String!
    img: String!
  }
  type Query {
    sliders: [slider!]!
    advertisements: [advertisement!]!
  }
`;

module.exports = typeDefs;
