import api from '../apiConfig';
import { QuestionResponse, QuestionCreate } from '../models/question.model';

export const questionConnector = {
    // Teacher endpoints
    createQuestion: async (examId: number, questionData: QuestionCreate): Promise<QuestionResponse> => {
        try {
            const response = await api.post(`/api/v1/create_question/${examId}`, questionData);
            return response.data;
        } catch (error) {
            console.error('Error creating question:', error);
            throw error;
        }
    },

    getQuestionsForExam: async (examId: number): Promise<QuestionResponse> => {
        try {
            const response = await api.get(`/api/v1/get_questions_for_exam/${examId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching exam questions:', error);
            throw error;
        }
    }
};

export default questionConnector;
