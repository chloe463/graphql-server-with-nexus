import { makeSchema } from "nexus";
import * as types from "./graphql";

export const schema = makeSchema({
  types: [...Object.values(types)],
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/typings.ts",
  },
});
