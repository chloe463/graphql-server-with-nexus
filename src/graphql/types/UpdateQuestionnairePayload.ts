import { objectType } from "nexus";

export const UpdateQuestionnairePayload = objectType({
  name: "UpdateQuestionnairePayload",
  definition(t) {
    t.int("id", { nullable: false });
    t.boolean("success", { nullable: false });
  }
});
