import DataLoader from "dataloader";

import { QuestionnaireApi } from "../../api/questionnaire";
import { NexusGenAllTypes } from "../../generated/typings";

type BatchQuestion = (ids: number[]) => Promise<NexusGenAllTypes["Question"][]>;
type BatchQuestionsFactory = (apiClient: QuestionnaireApi) => BatchQuestion;

const batchQuestions: BatchQuestionsFactory = apiClient => async questionnaireIds => {
  const res = await apiClient.fetchQuestionsByQuestionnaireId(questionnaireIds);
  const questionsByQuestionnaireId: { [id: number]: NexusGenAllTypes["Question"] } = res.reduce((acc, v) => {
    const { questionnaireId } = v;
    return {
      ...acc,
      [questionnaireId]: acc[questionnaireId] ? [...acc[questionnaireId], v] : [v],
    }
  }, {});
  return questionnaireIds.map(id => questionsByQuestionnaireId[id]);
};

export const questionLoader = (apiClient: QuestionnaireApi) =>
  new DataLoader<number, NexusGenAllTypes["Question"]>(batchQuestions(apiClient));
