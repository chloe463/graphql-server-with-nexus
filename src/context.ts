import { QuestionnaireRailsApi } from './api/questionnaire-rails';

export interface Context {
  questionnaireRailsApi: QuestionnaireRailsApi;
}


export const createContext = (_params): Context => {
  console.log(new QuestionnaireRailsApi());
  return {
    questionnaireRailsApi: new QuestionnaireRailsApi(),
  };
};
