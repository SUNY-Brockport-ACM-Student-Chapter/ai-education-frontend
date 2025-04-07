import api from "../apiConfig";
import { ExamResponse, ExamCreate } from "../models/exam.model";

export const examConnector = {
  // Teacher endpoints
  getExamsForTeacher: async (teacherId: number): Promise<ExamResponse> => {
    try {
      const response = await api.get(`/api/v1/get_exams_for_teacher/${teacherId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching teacher exams:", error);
      throw error;
    }
  },

  getExamsForCourse: async (courseId: number): Promise<ExamResponse> => {
    try {
      const response = await api.get(`/api/v1/get_exams_for_course/${courseId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching course exams:", error);
      throw error;
    }
  },

  createExamForCourse: async (courseId: number, examData: ExamCreate): Promise<ExamResponse> => {
    try {
      const response = await api.post(`/api/v1/create_exam_for_course/${courseId}`, examData);
      return response.data;
    } catch (error) {
      console.error("Error creating exam:", error);
      throw error;
    }
  },

  getStudentExamSubmissionStage: async (
    examId: number,
    studentId: number,
  ): Promise<{ submission_count: number }> => {
    try {
      const response = await api.get(
        `/api/v1/get_student_exam_submission_stage/${examId}/${studentId}`,
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching exam submission count:", error);
      throw error;
    }
  },

  // Student endpoints
  getExamsForStudent: async (studentId: number): Promise<ExamResponse> => {
    try {
      const response = await api.get(`/api/v1/get_exams_for_student/${studentId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching student exams:", error);
      throw error;
    }
  },
};

export default examConnector;
