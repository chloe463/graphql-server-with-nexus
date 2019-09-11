import "dotenv/config";
import axios from "axios";

export class QuestionnaireRailsApi {
  private baseURL: string;
  public constructor() {
    this.baseURL = process.env.QUESTIONNAIRE_RAILS_URL || "http://localhost:3000";
  }

  public async fetchQuestionnaires() {
    const res = await axios.get(`${this.baseURL}/questionnaires`);
    return res.data;
  }

  public async fetchQuestionnaire(id: number) {
    const res = await axios.get(`${this.baseURL}/questionnaires/${id}`);
    return res.data;
  }

  public async fetchQuestionsWithQuestionnaireId(id: number) {
    const res = await axios.get(`${this.baseURL}/questionnaires/${id}/questions`);
    return res.data;
  }

  public async fetchQuestions(id: number) {
    const res = await axios.get(`${this.baseURL}/questions`);
    return res.data;
  }

  public async fetchOptionsWithQuestionId(id: number) {
    const res = await axios.get(`${this.baseURL}/questions/${id}/options`);
    return res.data;
  }

  public async fetchOptions(id: number) {
    const res = await axios.get(`${this.baseURL}/options`);
    return res.data;
  }
}
