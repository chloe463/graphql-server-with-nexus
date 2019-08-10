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
      resolve: async (root, _args, _context) => {
        const id = root.id;
        const res = await axios.get(`http://localhost:3000/questionnaires/${id}/questions`);
        return res.data;
      },
    });
  },
});
