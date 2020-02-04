import express from "express";
import { ApolloServer } from "apollo-server-express";

import { schema } from "./schema";
import { QuestionnaireApi } from "./api/questionnaire";
import { questionLoader } from "./graphql/loaders/questionLoader";
import { optionLoader } from "./graphql/loaders/optionLoader";

interface Context {
  questionLoader: ReturnType<typeof questionLoader>;
  optionLoader: ReturnType<typeof optionLoader>;
  api: {
    questionnaireApi: QuestionnaireApi,
  },
}

const generateContext: () => Context = () => {
  const questionnaireApi = new QuestionnaireApi();
  return {
    questionLoader: questionLoader(questionnaireApi),
    optionLoader: optionLoader(questionnaireApi),
    api: {
      questionnaireApi,
    }
  }
};

const app = express();

const apolloServer = new ApolloServer({
  schema,
  context: generateContext(),
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
