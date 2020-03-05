import express from "express";
import { ApolloServer } from "apollo-server-express";

import { schema } from "./schema";
import { generateContext } from "./context";

const app = express();

const apolloServer = new ApolloServer({
  schema,
  context: generateContext()
});

apolloServer.applyMiddleware({
  app,
  cors: {
    credentials: true,
    origin(origin, callback) {
      console.log(origin);
      callback(null, true);
    }
  }
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(3030, () => {
  console.log("🚀 Server is listening on localhost:3030");
});
