import { queryField } from "nexus";
import axios from "axios";

export const questions = queryField("questions", {
  type: "Question",
  list: true,
  nullable: false,
  resolve: async (_root, _args, _context, _info) => {
    const res = await axios.get("http://localhost:3000/questions");
    return res.data;
  },
});
