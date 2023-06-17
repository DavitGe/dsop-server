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
    title: String!
    img: String!
    price: Float!
    oldPrice: Float
    featured: Boolean
  }
  type Query {
    sliders: [slider!]!
    advertisements: [advertisement!]!
    products(from: Int): [product!]!
    featuredProducts: [product!]!
    productsScroll(offset: Int, limit: Int): [product!]!
  }
`;

module.exports = typeDefs;
