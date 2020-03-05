import { QuestionnaireApi } from "./api/questionnaire";
import { questionLoader } from "./graphql/loaders/questionLoader";
import { optionLoader } from "./graphql/loaders/optionLoader";

export interface Context {
  questionLoader: ReturnType<typeof questionLoader>;
  optionLoader: ReturnType<typeof optionLoader>;
  api: {
    questionnaireApi: QuestionnaireApi,
  },
}

export const generateContext: () => Context = () => {
  const questionnaireApi = new QuestionnaireApi();
  return {
    questionLoader: questionLoader(questionnaireApi),
    optionLoader: optionLoader(questionnaireApi),
    api: {
      questionnaireApi,
    }
  }
};