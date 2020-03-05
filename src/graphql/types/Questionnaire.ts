import { objectType } from "nexus";

export const Questionnaire = objectType({
  name: "Questionnaire",
  definition(t) {
    t.int("id", { nullable: false });
    t.string("title", { nullable: false });
    t.string("description", { nullable: false });
    t.string("state", { nullable: false });
    t.string("startAt", { nullable: false });
    t.string("endAt", { nullable: false });
    t.field("questions", {
      type: "Question",
      list: true,
      nullable: false,
      // @ts-ignore
      resolve: ({ id }, _args, { questionLoader }) => questionLoader.load(id),
    });
  },
});
