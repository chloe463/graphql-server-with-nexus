import express from "express";
import { ApolloServer } from "apollo-server-express";

import { schema } from "./schema";

const app = express();

const apolloServer = new ApolloServer({
  schema,
});

apolloServer.applyMiddleware({
  app
})

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(3030, () => {
  console.log("🚀 Server is listening on localhost:3030");
});
