import path from "path";
import { makeSchema } from "nexus";
import * as types from "./graphql";

export const schema = makeSchema({
  types: [...Object.values(types)],
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/typings.ts"
  },
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, "../src/context.ts"),
        alias: "context"
      }
    ],
    contextType: "context.Context"
  }
});
