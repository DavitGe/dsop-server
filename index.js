const http = require("http");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = require("@apollo/server");
const resolvers = require("./graphql");
const { ApolloServer } = require("apollo-server");

require("dotenv").config();
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

console.log("process.env.HOSTNAME", process.env.HOSTNAME);
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

// const server2 =

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});
