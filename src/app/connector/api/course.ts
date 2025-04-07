import api from '../apiConfig';
import { CourseResponse, CourseCreate } from '../models/course.model';
import { ExamResponse } from '../models/exam.model';

export const courseConnector = {
    // Teacher endpoints
    getActiveCoursesForTeacher: async (teacherId: number): Promise<CourseResponse> => {
        try {
            const response = await api.get(`/api/v1/get_active_courses_for_teacher/${teacherId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching teacher courses:', error);
            throw error;
        }
    },

    createCourse: async (teacherId: number, courseData: CourseCreate): Promise<CourseResponse> => {
        try {
            const response = await api.post(`/api/v1/create_course/${teacherId}`, courseData);
            return response.data;
        } catch (error) {
            console.error('Error creating course:', error);
            throw error;
        }
    },

    changeCourseStatus: async (courseId: number, isActive: boolean): Promise<CourseResponse> => {
        try {
            const response = await api.put(`/api/v1/change_course_status/${courseId}`, { is_active: isActive });
            return response.data;
        } catch (error) {
            console.error('Error changing course status:', error);
            throw error;
        }
    },

    updateCourse: async (courseId: number, courseData: Partial<CourseCreate>): Promise<CourseResponse> => {
        try {
            const response = await api.put(`/api/v1/update_course/${courseId}`, courseData);
            return response.data;
        } catch (error) {
            console.error('Error updating course:', error);
            throw error;
        }
    },

    // Student endpoints
    getActiveCoursesForStudent: async (studentId: number): Promise<CourseResponse> => {
        try {
            const response = await api.get(`/api/v1/get_active_courses_for_student/${studentId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching student courses:', error);
            throw error;
        }
    }
};

export default courseConnector;
