import { objectType } from "nexus";

export const Question = objectType({
  name: "Question",
  definition(t) {
    t.int("id", { nullable: false });
    t.int("questionnaireId", { nullable: false });
    t.string("text", { nullable: false });
    t.int("typeCd", { nullable: false });
    t.string("type", { nullable: false });
    t.boolean("required", { nullable: false });
  }
});
