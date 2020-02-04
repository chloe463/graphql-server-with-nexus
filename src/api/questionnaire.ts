import { NexusGenAllTypes } from './../generated/typings';
import "dotenv/config";
import { isObject } from "util";
import camelCase from "lodash/camelCase";
import axios, { AxiosInstance, AxiosTransformer } from "axios";


const snakeToCamelDeep = (target: any) => {
  if (Array.isArray(target)) {
    return target.map(snakeToCamelDeep);
  } else if (isObject(target)) {
    const copy = {};
    Object.entries(target).map(([key, value]) => {
      copy[camelCase(key)] = snakeToCamelDeep(value);
    });
    return copy;
  }
  return target;
};

export class QuestionnaireApi {
  private baseUrl: string;
  private axiosClient: AxiosInstance;
  constructor() {
    this.baseUrl = process.env.QUESTIONNAIRE_RAILS_URL;
    this.axiosClient = axios.create({
      baseURL: this.baseUrl,
      headers: {
        accept: "application/json"
      },
      transformResponse:
        ([] as AxiosTransformer[]).concat(axios.defaults.transformResponse || [],
          (data, headers) => {
            const contentType: string = headers["content-type"] || "";
            if (!contentType.match(/application\/json/)) {
              return data;
            }
            return snakeToCamelDeep(data);
          })
    });
  }

  public async fetchQuestionnaires() {
    const res = await this.axiosClient.get(`${this.baseUrl}/questionnaires`);
    return res.data;
  }

  public async fetchQuestionnaire(id: number) {
    const res = await this.axiosClient.get(`${this.baseUrl}/questionnaires/${id}`);
    return res.data;
  }

  public async fetchQuestions() {
    const res = await this.axiosClient.get(`${this.baseUrl}/questions`);
    return res.data;
  }

  public async fetchQuestionsByQuestionnaireId(questionnaireIds: number[]) {
    const res = await this.axiosClient.get<NexusGenAllTypes["Question"][]>(`${this.baseUrl}/questions`, {
      params: {
        questionnaire_ids: questionnaireIds,
      }
    });
    return res.data;
  }

  public async fetchQuestion(id: number) {
    const res = await this.axiosClient.get(`${this.baseUrl}/questions/1`);
    return res.data;
  }

  public async fetchOptions() {
    const res = await this.axiosClient.get(`${this.baseUrl}/options`);
    return res.data;
  }

  public async fetchOptionsByQuestionId(questionIds: number[]) {
    const res = await this.axiosClient.get<NexusGenAllTypes["Option"][]>(`${this.baseUrl}/options`, {
      params: {
        question_ids: questionIds,
      },
    });
    return res.data;
  }
}
