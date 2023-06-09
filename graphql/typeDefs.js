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
  type product {
    id: String!
    title: String!
    img: String!
    price: Float!
    oldPrice: Float
    featured: Boolean
  }
  type Query {
    sliders: [slider!]!
    advertisements: [advertisement!]!
    featuredProducts: [product!]!
    products(offset: Int, limit: Int): [product!]!
    getProductById(id: String): [product!]!
  }
`;

module.exports = typeDefs;
