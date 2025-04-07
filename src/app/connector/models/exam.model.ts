import { Course, Question } from '.';

export interface Exam {
    exam_id: number;
    course_id: number;
    exam_name: string;
    exam_description: string;
    max_attempt: number;
    start_date: string;  // ISO date string
    end_date: string;    // ISO date string
    created_at: string;  // ISO date string
    updated_at: string;  // ISO date string
    course?: Course;
    questions?: Question[];
}

// For creating/updating exams
export interface ExamCreate {
    exam_name: string;
    exam_description: string;
    max_attempt: number;
    start_date: string;  // ISO date string
    end_date: string;    // ISO date string
}

// For API responses
export interface ExamResponse {
    success: boolean;
    message?: string;
    data?: Exam;
} 