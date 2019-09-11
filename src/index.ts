import express from "express";
import { ApolloServer } from "apollo-server-express";

import { schema } from "./schema";
import { createContext } from "./context";

const app = express();

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
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
