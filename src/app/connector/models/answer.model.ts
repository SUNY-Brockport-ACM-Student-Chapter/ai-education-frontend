import { Question } from './question.model';

export interface Answer {
    answer_id: number;
    answer_text: string;
    question_id: number;
    created_at?: string;  // ISO date string
    updated_at?: string;  // ISO date string
    question?: Question;
}

// For creating/updating answers
export interface AnswerCreate {
    answer_text: string;
}

// For API responses
export interface AnswerResponse {
    success: boolean;
    message?: string;
    data?: Answer;
} 