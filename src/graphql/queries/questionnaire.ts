import { queryField, intArg } from "nexus";
import axios from "axios";

export const questionnaires = queryField("questionnaires", {
  type: "Questionnaire",
  list: true,
  nullable: false,
  resolve: async (_root, _args, { api: { questionnaireApi } }) => questionnaireApi.fetchQuestionnaires(),
});

export const questionnaire = queryField("questionnaire", {
  type: "Questionnaire",
  nullable: false,
  args: {
    id: intArg(),
  },
  resolve: async (_root, args, _context) => {
    const id = args.id;
    const res = await axios.get(`http://localhost:3000/questionnaires/${id}`);
    return res.data;
  },
});
