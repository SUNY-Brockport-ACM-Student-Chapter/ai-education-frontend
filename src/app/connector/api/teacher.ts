import api from '../apiConfig';
import { TeacherResponse } from '../models/teacher.model';

export const teacherConnector = {
    // Teacher endpoints
    getTeacherById: async (teacherId: number): Promise<TeacherResponse> => {
        try {
            const response = await api.get(`/api/v1/get_teacher_by_id/${teacherId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching teacher:', error);
            throw error;
        }
    }
};

export default teacherConnector;
