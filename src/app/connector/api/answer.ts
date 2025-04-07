import api from "../apiConfig";
import { AnswerResponse, AnswerCreate } from "../models/answer.model";

export const answerConnector = {
  // Teacher endpoints
  createAnswer: async (questionId: number, answerData: AnswerCreate): Promise<AnswerResponse> => {
    try {
      const response = await api.post(`/api/v1/create_answer/${questionId}`, answerData);
      return response.data;
    } catch (error) {
      console.error("Error creating answer:", error);
      throw error;
    }
  },
};

export default answerConnector;
