import { objectType } from "nexus";
import axios from "axios";

export const Questionnaire = objectType({
  name: "Questionnaire",
  definition(t) {
    t.int("id", { nullable: false });
    t.string("title", { nullable: false });
    t.string("description", { nullable: false });
    t.string("state", { nullable: false });
    t.string("start_at", { nullable: false });
    t.string("end_at", { nullable: false });
    t.field("questions", {
      type: "Question",
      list: true,
      nullable: false,
      resolve: async ({ id }, _args, { questionLoader }) => questionLoader.load(id),
    });
  },
});
