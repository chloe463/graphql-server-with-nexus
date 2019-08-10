import { objectType } from "nexus";
import axios from "axios";

export const Question = objectType({
  name: "Question",
  definition(t) {
    t.int("id", { nullable: false });
    t.int("questionnaireId", { nullable: false });
    t.string("text", { nullable: false });
    t.int("typeCd", { nullable: false });
    t.string("type", { nullable: false });
    t.boolean("required", { nullable: false });
    t.field("options", {
      type: "Option",
      list: true,
      nullable: false,
      resolve: async (root, _args, _context) => {
        const id = root.id;
        const res = await axios.get(`http://localhost:3000/questions/${id}/options`);
        return res.data;
      }
    })
  },
});
