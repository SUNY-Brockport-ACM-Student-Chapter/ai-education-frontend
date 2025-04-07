import { Answer, StudentAnswer } from ".";

export interface Question {
  question_id: number;
  exam_id: number;
  question_text: string;
  created_at?: string; // ISO date string
  updated_at?: string; // ISO date string
  answers?: Answer[];
  student_answers?: StudentAnswer[];
}

// For creating/updating questions
export interface QuestionCreate {
  question_text: string;
}

// For API responses
export interface QuestionResponse {
  success: boolean;
  message?: string;
  data?: Question;
}
