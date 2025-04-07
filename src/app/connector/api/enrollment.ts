import api from '../apiConfig';
import { EnrollmentResponse, EnrollmentCreate, EnrollmentStatus } from '../models/enrollment.model';

export const enrollmentConnector = {
    // Teacher endpoints
    createEnrollment: async (studentId: number, courseId: number, enrollmentData?: EnrollmentCreate): Promise<EnrollmentResponse> => {
        try {
            const response = await api.post(`/api/v1/create_enrollment/${studentId}/${courseId}`, enrollmentData);
            return response.data;
        } catch (error) {
            console.error('Error creating enrollment:', error);
            throw error;
        }
    },

    changeEnrollmentStatus: async (studentId: number, courseId: number, status: EnrollmentStatus): Promise<EnrollmentResponse> => {
        try {
            const response = await api.put(
                `/api/v1/change_enrollment_status_for_student/${studentId}/${courseId}`,
                { status }
            );
            return response.data;
        } catch (error) {
            console.error('Error changing enrollment status:', error);
            throw error;
        }
    }
};

export default enrollmentConnector;
