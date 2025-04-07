import { StudentAnswer } from ".";

export interface AiAssessment {
  ai_assessment_id: number;
  assessment_text: string | null;
  student_answer_id: number;
  grade: string | null; // Single character
  student_answer?: StudentAnswer;
}

// For creating/updating AI assessments
export interface AiAssessmentCreate {
  assessment_text: string;
  student_answer_id: number;
  grade: string;
}

// For API responses
export interface AiAssessmentResponse {
  success: boolean;
  message?: string;
  data?: AiAssessment;
}
