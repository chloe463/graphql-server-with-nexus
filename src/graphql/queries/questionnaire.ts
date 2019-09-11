import { queryField, intArg } from "nexus";
import axios from "axios";

export const questionnaires = queryField("questionnaires", {
  type: "Questionnaire",
  list: true,
  nullable: false,
  resolve: async (_root, _args, { questionnaireRailsApi }) => {
    return await questionnaireRailsApi.fetchQuestionnaires();
  },
});

export const questionnaire = queryField("questionnaire", {
  type: "Questionnaire",
  nullable: false,
  args: {
    id: intArg(),
  },
  resolve: async (_root, args, { questionnaireRailsApi }) => {
    const id = args.id;
    // const res = await axios.get(`http://localhost:3000/questionnaires/${id}`);
    // return res.data;
    return await questionnaireRailsApi.fetchQuestionnaire(id);
  },
});
