import api from '../apiConfig';
import { AiAssessmentResponse } from '../models/ai-assessment.model';

export const aiAssessmentConnector = {
    // Teacher endpoints
    getAiAssessmentForStudentAnswer: async (studentAnswerId: number): Promise<AiAssessmentResponse> => {
        try {
            const response = await api.get(`/api/v1/get_ai_assesment_for_studentAnswer/${studentAnswerId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching AI assessment:', error);
            throw error;
        }
    }
};

export default aiAssessmentConnector;
