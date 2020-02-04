import DataLoader from "dataloader";

import { QuestionnaireApi } from "../../api/questionnaire";
import { NexusGenAllTypes } from "../../generated/typings";

type BatchQuestion = (ids: number[]) => Promise<NexusGenAllTypes["Question"][]>;
type BatchQuestionsFactory = (apiClient: QuestionnaireApi) => BatchQuestion;

const batchQuestions: BatchQuestionsFactory = apiClient => async questionnaireIds => {
  const res = await apiClient.fetchQuestionsByQuestionnaireId(questionnaireIds);
  const questionsByUserId = res.reduce((acc, v) => {
    return {
      ...acc,
      [v.questionnaireId]: acc[v.questionnaireId] ? [...acc[v.questionnaireId], v] : [v],
    }
  }, {});
  const questions = questionnaireIds.map(id => questionsByUserId[id]);
  return questions;
};

export const questionLoader = (apiClient) =>
  new DataLoader<number, NexusGenAllTypes["Question"]>(batchQuestions(apiClient));
