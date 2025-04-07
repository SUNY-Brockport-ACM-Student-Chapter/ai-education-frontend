import api from "../apiConfig";
import { StudentAnswerResponse, StudentAnswerCreate } from "../models/student-answer.model";

export const studentAnswerConnector = {
  // Teacher endpoints
  getStudentAnswersForStudent: async (
    studentId: number,
    questionId: number,
  ): Promise<StudentAnswerResponse> => {
    try {
      const response = await api.get(
        `/api/v1/get_student_answers_for_student/${studentId}/${questionId}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching student answers:", error);
      throw error;
    }
  },

  // Student endpoints
  createStudentAnswer: async (
    studentId: number,
    questionId: number,
    answerData: StudentAnswerCreate,
  ): Promise<StudentAnswerResponse> => {
    try {
      const response = await api.post(
        `/api/v1/create_student_answer/${studentId}/${questionId}`,
        answerData,
      );
      return response.data;
    } catch (error) {
      console.error("Error creating student answer:", error);
      throw error;
    }
  },
};

export default studentAnswerConnector;
