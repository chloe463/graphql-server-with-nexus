import { mutationField, arg } from "nexus";

import { NexusGenInputs } from "../../generated/typings";

export const updateQuestionnaire = mutationField("updateQuestionnaire", {
  type: "UpdateQuestionnairePayload",
  nullable: false,
  args: {
    questionnaire: arg({
      type: "UpdateQuestionnaireInput",
      required: true
    })
  },
  resolve: async (_root, args, { api: { questionnaireApi } }) => {
    const { questionnaire } = args;
    console.log({ questionnaire });
    const res = await questionnaireApi.updateQuestionnaire(questionnaire);
    console.log(res);
    return {
      id: 1,
      success: true
    };
  }
});
