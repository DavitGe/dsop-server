const { createServer } = require("http");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const resolvers = require("./graphql");
const typeDefs = require("./graphql/typeDefs");
const mongoose = require("mongoose");

require("dotenv").config();
const uri = process.env.MONGO_URI;
const url = process.env.URL || "0.0.0.0";
const port = process.env.PORT || 3000;

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  mongoose
    .connect(uri)
    .then(console.log(`mongoose connected succesfully`))
    .catch((error) => next(error));

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
      return {
        req,
        res,
      };
    },
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: "/api",
  });

  httpServer.listen({ port }, () =>
    console.log(
      `Server listening on localhost:${port}${apolloServer.graphqlPath}`
    )
  );
};

startServer();
