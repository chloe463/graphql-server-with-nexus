import DataLoader from "dataloader";

import { QuestionnaireApi } from "../../api/questionnaire";
import { NexusGenAllTypes } from "../../generated/typings";

type BatchOption = (ids: number[]) => Promise<NexusGenAllTypes["Option"][]>;
type BatchOptionFactory = (apiClient: QuestionnaireApi) => BatchOption;

const batchOption: BatchOptionFactory = apiClient => async questionIds => {
  const res = await apiClient.fetchOptionsByQuestionId(questionIds);
  const optionsByQuestionId: { [id: number]: NexusGenAllTypes["Option"] } = res.reduce((acc, v) => {
    const { questionId } = v;
    return {
      ...acc,
      [questionId]: acc[questionId] ? [...acc[questionId], v] : [v],
    };
  }, {});
  return questionIds.map(id => optionsByQuestionId[id]);
};

export const optionLoader = (apiClient: QuestionnaireApi) =>
  new DataLoader<number, NexusGenAllTypes["Option"]>(batchOption(apiClient));
