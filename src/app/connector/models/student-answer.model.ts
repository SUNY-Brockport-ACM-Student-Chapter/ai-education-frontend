import { AiAssessment, Question, Student } from ".";

export interface StudentAnswer {
  student_answer_id: number;
  student_id: number;
  question_id: number;
  answer_text: string | null;
  second_attempt_answer: string | null;
  answer_grade: string; // Single character
  second_attempt_grade: string | null; // Single character
  answer_stage: number; // 1 or 2
  ai_assessments?: AiAssessment[];
  student?: Student;
  question?: Question;
}

// For creating/updating student answers
export interface StudentAnswerCreate {
  answer_text: string;
  answer_grade: string;
  answer_stage: 1 | 2;
}

// For API responses
export interface StudentAnswerResponse {
  success: boolean;
  message?: string;
  data?: StudentAnswer;
}
