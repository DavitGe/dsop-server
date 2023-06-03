const { gql } = require("apollo-server");

const typeDefs = gql`
  type slider {
    title: String
    description: String
    image: String
    buttonText: String
    to: String
  }
`;

module.exports = typeDefs;
