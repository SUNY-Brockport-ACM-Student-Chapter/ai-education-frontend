import api from '../apiConfig';
import { StudentResponse } from '../models/student.model';

export const studentConnector = {
    // Teacher endpoints
    searchForStudents: async (studentData: any): Promise<StudentResponse> => {
        try {
            const response = await api.get('/api/v1/search_for_students', {
                params: studentData
            });
            return response.data;
        } catch (error) {
            console.error('Error searching for students:', error);
            throw error;
        }
    },

    getStudentsForCourse: async (courseId: number): Promise<StudentResponse> => {
        try {
            const response = await api.get(`/api/v1/get_students_for_course/${courseId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching course students:', error);
            throw error;
        }
    }
};

export default studentConnector;
