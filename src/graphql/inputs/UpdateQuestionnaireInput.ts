import { inputObjectType } from "nexus";

export const UpdateQuestionnaireInput = inputObjectType({
  name: "UpdateQuestionnaireInput",
  definition(t) {
    t.int("id", { nullable: false });
    t.string("title", { nullable: true });
    t.string("description", { nullable: true });
    t.string("startAt", { nullable: true });
    t.string("endAt", { nullable: true });
    t.int("state", { nullable: true });
  }
});
