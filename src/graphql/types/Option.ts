import { objectType } from "nexus";

export const Option = objectType({
  name: "Option",
  definition(t) {
    t.int("id", { nullable: false });
    t.int("questionId", { nullable: false });
    t.string("text", { nullable: false });
  }
});
