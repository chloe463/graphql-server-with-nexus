import { queryField } from "nexus";
import axios from "axios";

export const questionnaires = queryField("questionnaires", {
  type: "Questionnaire",
  list: true,
  nullable: false,
  resolve: async (_root, _args, _context) => {
    const res = await axios.get("http://localhost:3000/questionnaires");
    console.log(res.data);
    return res.data;
  },
});
